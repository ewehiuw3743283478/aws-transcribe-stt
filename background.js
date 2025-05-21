// background.js

// --- AWS SDK Imports ---
import {
    TranscribeStreamingClient,
    StartStreamTranscriptionCommand,
    TranscriptEvent, // Import for type checking if needed
    AudioStream, // Import for type checking if needed
} from "@aws-sdk/client-transcribe-streaming";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
// EventStreamMarshaller is typically handled by the client for the response stream,
// but might be needed if you were to construct complex AudioEvents manually.
// For sending simple Uint8Array audio chunks, it's not directly used by our code.
// fromUtf8/toUtf8 are still useful for processing results if they are Uint8Array.
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";


console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
// let transcribeWebSocket = null; // Will be managed by TranscribeStreamingClient
let transcribeClient = null; // AWS Transcribe Streaming Client instance
let translateClient = null; // AWS Translate Client instance
let currentTabId = null;

// For managing the audio stream to Transcribe client
let audioChunkQueue = [];
let resolveAudioChunkPromise = null;
let audioStreamController = {
    abort: () => {} // Placeholder for aborting the stream
};


// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP";
const TRANSLATE_SOURCE_LANGUAGE = "ja";
const TRANSLATE_TARGET_LANGUAGE = "zh";
const AUDIO_CHUNK_SAMPLE_RATE = 16000;
// const TRANSCRIBE_SERVICE_NAME = 'transcribe'; // No longer needed for manual SigV4

// --- Helper: Get AWS Credentials ---
async function getAwsCredentials() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], function(data) {
      if (data.awsAccessKeyId && data.awsSecretAccessKey && data.awsRegion) {
        awsConfig = {
          accessKeyId: data.awsAccessKeyId,
          secretAccessKey: data.awsSecretAccessKey,
          region: data.awsRegion,
          // For SDK v3 clients, credentials are often passed as an object
          credentials: {
            accessKeyId: data.awsAccessKeyId,
            secretAccessKey: data.awsSecretAccessKey,
          }
        };
        console.log("AWS Credentials loaded from storage.");
        resolve(awsConfig);
      } else {
        console.warn("AWS Credentials not found in storage.");
        reject("Credentials not configured");
      }
    });
  });
}

// --- Audio Stream Generator for Transcribe Client ---
async function* audioStreamGenerator() {
    console.log("Audio stream generator started for Transcribe client.");
    try {
        while (isRunning) {
            if (audioChunkQueue.length > 0) {
                const chunk = audioChunkQueue.shift();
                // console.log("Yielding audio chunk to Transcribe client, size:", chunk.byteLength); // Can be noisy
                yield new Uint8Array(chunk); // Client expects Uint8Array
            } else {
                // Wait for the next chunk to arrive or for the stream to be stopped
                // console.log("Audio queue empty, waiting for next chunk or stop signal..."); // Can be noisy
                await new Promise(resolve => {
                    resolveAudioChunkPromise = resolve;
                });
                // After promise resolves, check isRunning again before continuing
                if (!isRunning) {
                    console.log("Audio stream generator: isRunning became false while waiting for chunk.");
                    break;
                }
            }
        }
    } catch (error) {
        console.error("Error in audioStreamGenerator:", error);
        // This error might propagate to the Transcribe client
    } finally {
        console.log("Audio stream generator finished.");
        // Clean up any remaining promise resolvers
        if (resolveAudioChunkPromise) {
            resolveAudioChunkPromise = null;
        }
    }
}


// --- AWS Transcribe Streaming Logic (using TranscribeStreamingClient) ---
async function startTranscribeStreaming(config) {
  if (!transcribeClient) {
    transcribeClient = new TranscribeStreamingClient({
        region: config.region,
        credentials: config.credentials,
    });
    console.log("TranscribeStreamingClient initialized.");
  }

  console.log("Starting Transcribe stream with client...");

  // Abort controller to stop the transcription if needed
  const abortController = new AbortController();
  audioStreamController.abort = () => {
      console.log("Aborting Transcribe stream via AbortController.");
      abortController.abort();
  };


  try {
    const command = new StartStreamTranscriptionCommand({
        LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
        MediaSampleRateHertz: AUDIO_CHUNK_SAMPLE_RATE,
        MediaEncoding: "pcm",
        AudioStream: audioStreamGenerator(), // Pass our async generator
        // EnablePartialResultsStabilization: true, // Optional
        // PartialResultsStability: "high", // Optional
    });

    const response = await transcribeClient.send(command, { abortSignal: abortController.signal });
    console.log("Transcribe client send command successful. Listening for transcript results...");

    if (currentTabId) {
        chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e.message));
    }

    // Iterate over the transcript results stream
    for await (const event of response.TranscriptResultStream) {
        if (!isRunning) { // Check if processing was stopped externally
            console.log("Detected stop signal while iterating transcript results. Breaking loop.");
            audioStreamController.abort(); // Ensure underlying HTTP request is aborted
            break;
        }

        if (event.TranscriptEvent) {
            const results = event.TranscriptEvent.Transcript?.Results;
            if (results && results.length > 0) {
                const result = results[0];
                if (!result.IsPartial && result.Alternatives && result.Alternatives.length > 0) {
                    const transcript = result.Alternatives[0].Transcript;
                    if (transcript && transcript.trim().length > 0) {
                        console.log("Final Japanese (from client):", transcript);
                        translateText(transcript);
                    }
                }
            }
        } else if (event.ServiceUnavailableException || event.BadRequestException || event.InternalFailureException || event.LimitExceededException) {
            const exception = event.ServiceUnavailableException || event.BadRequestException || event.InternalFailureException || event.LimitExceededException;
            console.error("Transcribe service exception:", exception.message || exception.name);
            updateSubtitlesInContentScript("", `[STT服务出错: ${exception.name}]`);
            if (isRunning) stopProcessing();
            break; // Stop processing on critical errors
        }
    }
    console.log("Finished iterating transcript results stream.");

  } catch (error) {
    if (error.name === 'AbortError') {
        console.log("Transcribe stream aborted as expected.");
    } else {
        console.error("Error during Transcribe streaming:", error);
        updateSubtitlesInContentScript("", `[STT连接出错: ${error.message || error.name}]`);
        if (isRunning) stopProcessing();
    }
  } finally {
    console.log("startTranscribeStreaming function finished.");
    // If isRunning is true here, it means the stream ended naturally or due to an error not handled by abort.
    // If it was stopped via stopProcessing, isRunning would be false.
    if (isRunning) { // If stream ended but we weren't explicitly stopped
        console.warn("Transcribe stream ended, but processing was still marked as running. Stopping now.");
        stopProcessing();
    }
  }
}

// No longer sending audio directly to WebSocket, but to the queue for the generator
function sendAudioChunkToQueue(chunk) {
    if (isRunning) {
        audioChunkQueue.push(chunk);
        if (resolveAudioChunkPromise) {
            resolveAudioChunkPromise(); // Resolve the promise to signal new data
            resolveAudioChunkPromise = null;
        }
    }
}

// --- AWS Translate Logic (remains the same) ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }
  if (!japaneseText || japaneseText.trim().length === 0) {
      return;
  }
  try {
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    updateSubtitlesInContentScript(japaneseText, chineseText);
  } catch (error) {
    console.error("Error translating text:", error);
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// Helper to send subtitle update message (remains the same)
function updateSubtitlesInContentScript(japaneseText, chineseText) {
    if (currentTabId) {
        chrome.tabs.sendMessage(currentTabId, {
          action: "updateSubtitles",
          japanese: japaneseText,
          chinese: chineseText
        }).catch(e => console.warn("Error sending updateSubtitles (tab might be closed):", e.message));
    }
}

// --- Main Control Functions ---
async function startProcessing() {
  if (isRunning) {
    console.log("Already running.");
    return { success: false, error: "Already running" };
  }
  console.log("Attempting to start processing...");
  try {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (!tab || !tab.id) {
         console.error("No active tab found or tab ID is invalid.");
         return { success: false, error: "No active tab found" };
    }
    currentTabId = tab.id;
    audioChunkQueue = []; // Clear queue on start

    await getAwsCredentials(); // awsConfig is set globally

    translateClient = new TranslateClient({
       region: awsConfig.region,
       credentials: awsConfig.credentials,
    });
    console.log("TranslateClient initialized.");

    // Set isRunning to true BEFORE starting the async transcribe operation
    // So that the audioStreamGenerator knows it can run.
    isRunning = true;

    // Start Transcribe streaming (this is an async operation that runs in the background)
    startTranscribeStreaming(awsConfig).catch(error => {
        // This catch is for unhandled errors from startTranscribeStreaming itself,
        // though most errors within it should call stopProcessing.
        console.error("Critical error in startTranscribeStreaming execution:", error);
        if (isRunning) stopProcessing();
    });
    console.log("Transcribe streaming process initiated.");


    // Setup content script
    try {
        await chrome.scripting.executeScript({ target: { tabId: currentTabId }, files: ['content.js']});
        await chrome.scripting.insertCSS({ target: { tabId: currentTabId }, files: ['subtitle.css']});
        await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
        console.log("Content script setup signal sent.");
    } catch (scriptError) {
        console.error("Error setting up content script:", scriptError);
        throw new Error(`Content script setup failed: ${scriptError.message}`);
    }
    
    try {
        await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
        console.log("Sent initiateTabCapture signal to content script.");
    } catch (captureError) {
         console.error("Error sending initiateTabCapture signal:", captureError);
         throw new Error(`Signaling tab capture failed: ${captureError.message}`);
    }

    console.log("Processing marked as started.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    isRunning = false; // Ensure isRunning is false if start failed
    awsConfig = null;
    translateClient = null;
    transcribeClient = null; // Clear transcribe client
    if(currentTabId) {
        updateSubtitlesInContentScript("", `[启动失败: ${error.message}]`);
        chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
            .catch(e => console.warn("Error sending stop to content script during failed start:", e.message))
            .finally(() => currentTabId = null);
    }
    const userError = (typeof error === 'string') ? error : (error instanceof Error ? error.message : "Unknown error during start.");
    return { success: false, error: userError };
  }
}

function stopProcessing() {
  if (!isRunning && !transcribeClient && !currentTabId && !awsConfig) {
    console.log("StopProcessing called but already seems stopped/cleaned.");
    return { success: true, message: "Already stopped or not running." };
  }
  console.log("Stopping processing...");

  isRunning = false; // Signal to stop all async loops and operations

  // Abort the Transcribe stream if active
  if (audioStreamController && typeof audioStreamController.abort === 'function') {
    audioStreamController.abort();
  }
  transcribeClient = null; // Clear the client instance

  // Wake up the audioStreamGenerator if it's waiting for a chunk, so it can terminate
  if (resolveAudioChunkPromise) {
      resolveAudioChunkPromise();
      resolveAudioChunkPromise = null;
  }
  audioChunkQueue = []; // Clear any pending audio chunks

  if (currentTabId) {
      const tabIdToStop = currentTabId;
      currentTabId = null;
      chrome.tabs.sendMessage(tabIdToStop, { action: "stopContentScript" })
        .catch(e => console.warn("Error sending stopContentScript (tab might be closed):", e.message));
      console.log("Sent stop signal to content script for tab:", tabIdToStop);
  }

  awsConfig = null;
  translateClient = null;
  console.log("Processing stopped and resources reset.");
  return { success: true };
}

// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const fromContentScript = sender.tab && sender.tab.id;
  // console.log(`Background received: ${request.action}`, fromContentScript ? `from CS tab ${sender.tab.id}` : "from popup/other");

  if (request.action === "start") {
    startProcessing().then(sendResponse);
    return true; // Indicate async response
  } else if (request.action === "stop") {
    sendResponse(stopProcessing());
    return false;
  } else if (request.action === "getStatus") {
    sendResponse({ isRunning: isRunning });
    return false;
  } else if (request.action === "audioChunk") {
    if (fromContentScript && sender.tab.id === currentTabId && request.chunk && isRunning) {
        sendAudioChunkToQueue(request.chunk); // Changed from sendAudioChunkToTranscribe
    }
    return false; // No response needed
  } else if (request.action === "audioCaptureError") {
     console.error("Audio capture error from content script:", request.error, `Tab: ${sender.tab?.id}`);
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`);
     if (isRunning) stopProcessing();
     sendResponse({ success: true });
     return false;
  } else if (request.action === "audioProcessingStarted") {
      // console.log("Content script audio processing started.", `Tab: ${sender.tab?.id}`);
      sendResponse({ success: true });
      return false;
  }
  return false; // Default for unhandled messages
});

console.log("Background service worker initialized. State: Idle.");

chrome.runtime.onSuspend.addListener(() => {
  console.log("Service worker suspending. Cleaning up if running.");
  if (isRunning) {
    stopProcessing();
  }
});
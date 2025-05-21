// background.js

import {
    TranscribeStreamingClient,
    StartStreamTranscriptionCommand,
} from "@aws-sdk/client-transcribe-streaming";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { fromUtf8 } from "@aws-sdk/util-utf8-node"; // toUtf8 not directly used here, but fromUtf8 for results

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeClient = null;
let translateClient = null;
let currentTabId = null;

let audioChunkQueue = [];
let resolveAudioChunkPromise = null;
let audioStreamAbortController = null; // To abort the SDK's request
let keepAudioStreamAliveTimer = null; // Timer for the generator's internal timeout

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP";
const TRANSLATE_SOURCE_LANGUAGE = "ja";
const TRANSLATE_TARGET_LANGUAGE = "zh";
const AUDIO_CHUNK_SAMPLE_RATE = 16000;
const AUDIO_GENERATOR_TIMEOUT_MS = 10000; // Timeout for waiting for an audio chunk (e.g., 10s)


// --- Helper: Get AWS Credentials ---
async function getAwsCredentials() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], function(data) {
      if (data.awsAccessKeyId && data.awsSecretAccessKey && data.awsRegion) {
        awsConfig = {
          accessKeyId: data.awsAccessKeyId,
          secretAccessKey: data.awsSecretAccessKey,
          region: data.awsRegion,
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
    console.log("Audio stream generator started.");
    try {
        while (isRunning) {
            if (audioChunkQueue.length > 0) {
                const chunk = audioChunkQueue.shift();
                // console.log(`AudioStreamGenerator: Yielding chunk. Queue size: ${audioChunkQueue.length}`);
                yield new Uint8Array(chunk);
            } else {
                // Wait for the next chunk with a timeout
                // console.log("AudioStreamGenerator: Queue empty, waiting for next chunk...");
                const waitPromise = new Promise((resolve, reject) => {
                    resolveAudioChunkPromise = resolve; // External promise to resolve when new chunk arrives
                    // Setup a timeout that will reject the promise if no chunk arrives
                    if (keepAudioStreamAliveTimer) clearTimeout(keepAudioStreamAliveTimer);
                    keepAudioStreamAliveTimer = setTimeout(() => {
                        // console.log(`AudioStreamGenerator: Timeout waiting for audio chunk (${AUDIO_GENERATOR_TIMEOUT_MS}ms).`);
                        // Check isRunning, as stopProcessing might have just cleared the timer
                        if (isRunning && resolveAudioChunkPromise === resolve) { // Ensure this timeout belongs to current wait
                           reject(new Error("AudioGeneratorTimeout"));
                        }
                    }, AUDIO_GENERATOR_TIMEOUT_MS);
                });

                try {
                    await waitPromise;
                } catch (error) {
                    if (error.message === "AudioGeneratorTimeout") {
                        if (isRunning) { // Only if we are still supposed to be running
                            console.warn("AudioStreamGenerator: Timed out waiting for audio. Assuming stream ended from source.");
                            // This will cause the generator to end, signaling end of stream to Transcribe.
                            // Transcribe itself has a 15s timeout; this internal one is shorter to proactively manage.
                            // However, if Transcribe expects continuous audio, this might be an issue.
                            // For now, we let the generator end. The service will eventually timeout if this wasn't intended.
                            // Alternatively, we could send a silent chunk, but that's more complex.
                            // Or, simply let Transcribe's own 15s timeout handle it.
                            // Let's try letting the generator end if no audio comes.
                            // If an error occurs here, it will be caught by the outer try-catch.
                            // For now, just break the loop, which finishes the generator.
                             updateSubtitlesInContentScript("", "[音频源暂停或中断]");
                        }
                        // No matter what, break, as we can't wait indefinitely if timeout occurred
                        break;
                    }
                    // Rethrow other errors
                    throw error;
                } finally {
                     if (keepAudioStreamAliveTimer && resolveAudioChunkPromise !== null) { // Clear timer if promise resolved by new chunk, not timeout
                        clearTimeout(keepAudioStreamAliveTimer);
                        keepAudioStreamAliveTimer = null;
                    }
                    resolveAudioChunkPromise = null; // Clear resolver
                }

                if (!isRunning) {
                    // console.log("AudioStreamGenerator: Woke up, but isRunning is false. Breaking.");
                    break;
                }
                // console.log("AudioStreamGenerator: Woke up by new chunk.");
            }
        }
    } catch (error) {
        console.error("Error in audioStreamGenerator:", error);
        if (isRunning) { // If an unexpected error occurs, try to stop gracefully
            updateSubtitlesInContentScript("", "[音频流内部错误]");
            stopProcessing();
        }
    } finally {
        console.log("Audio stream generator finished.");
        if (keepAudioStreamAliveTimer) {
            clearTimeout(keepAudioStreamAliveTimer);
            keepAudioStreamAliveTimer = null;
        }
        resolveAudioChunkPromise = null; // Ensure it's cleared
        // The Transcribe client should handle the generator finishing as the end of the audio stream.
    }
}


// --- AWS Transcribe Streaming Logic ---
async function startTranscribeStreaming(config) {
  if (!transcribeClient) {
    transcribeClient = new TranscribeStreamingClient({
        region: config.region,
        credentials: config.credentials,
        // Disable request timeout if AWS SDK supports it and if internal generator timeout is preferred.
        // By default, SDK has its own timeouts.
        // requestHandler: new FetchHttpHandler({ requestTimeout: 0 }) // Example if using FetchHttpHandler
    });
    console.log("TranscribeStreamingClient initialized.");
  }

  console.log("Starting Transcribe stream with client...");
  audioStreamAbortController = new AbortController(); // Create a new AbortController for this stream

  try {
    const command = new StartStreamTranscriptionCommand({
        LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
        MediaSampleRateHertz: AUDIO_CHUNK_SAMPLE_RATE,
        MediaEncoding: "pcm",
        AudioStream: audioStreamGenerator(),
    });

    // The send command is long-lived for streaming.
    const response = await transcribeClient.send(command, {
        abortSignal: audioStreamAbortController.signal
    });
    console.log("Transcribe client send command successful. Listening for transcript results...");

    if (currentTabId && isRunning) { // Check isRunning before sending
        chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.warn("Error sending awsReady to tab (might be closed):", e.message));
    }

    for await (const event of response.TranscriptResultStream) {
        if (!isRunning) {
            console.log("Detected stop signal while iterating transcript results. Aborting stream.");
            if (audioStreamAbortController && !audioStreamAbortController.signal.aborted) {
                audioStreamAbortController.abort();
            }
            break;
        }

        if (event.TranscriptEvent) {
            const results = event.TranscriptEvent.Transcript?.Results;
            if (results && results.length > 0) {
                const result = results[0];
                if (!result.IsPartial && result.Alternatives && result.Alternatives.length > 0) {
                    const transcript = result.Alternatives[0].Transcript;
                    if (transcript && transcript.trim().length > 0) {
                        // console.log("Final Japanese (from client):", transcript);
                        translateText(transcript);
                    }
                }
            }
        } else if (event.ServiceUnavailableException || event.BadRequestException || event.InternalFailureException || event.LimitExceededException) {
            const exception = event.ServiceUnavailableException || event.BadRequestException || event.InternalFailureException || event.LimitExceededException;
            console.error("Transcribe service exception:", exception.message || exception.name);
            updateSubtitlesInContentScript("", `[STT服务出错: ${exception.name}]`);
            if (isRunning) stopProcessing(); // This will set isRunning to false
            break;
        }
    }
    console.log("Finished iterating transcript results stream.");

  } catch (error) {
    if (error.name === 'AbortError') {
        console.log("Transcribe stream aborted as expected.");
    } else {
        console.error("Error during Transcribe streaming command execution:", error);
        updateSubtitlesInContentScript("", `[STT连接/命令出错: ${error.name}]`);
        if (isRunning) stopProcessing();
    }
  } finally {
    console.log("startTranscribeStreaming function scope finished.");
    // If the stream finished (naturally or due to an unhandled error within the loop)
    // and we were still supposed to be running, initiate a stop.
    if (isRunning) {
        console.warn("Transcribe stream processing ended, but main process was still marked as running. Initiating stop.");
        stopProcessing();
    }
    // Nullify the controller associated with this specific stream attempt
    if (audioStreamAbortController && !audioStreamAbortController.signal.aborted) {
        // If it wasn't aborted but we are here, it means the stream ended.
        // For safety, if it can be aborted, do it, though it might be too late.
        // audioStreamAbortController.abort(); // This might be problematic if called after stream ends.
    }
    audioStreamAbortController = null;
  }
}

function sendAudioChunkToQueue(chunk) {
    if (isRunning) {
        audioChunkQueue.push(chunk);
        if (resolveAudioChunkPromise) {
            if (keepAudioStreamAliveTimer) { // Clear the timeout for this specific wait period
                clearTimeout(keepAudioStreamAliveTimer);
                keepAudioStreamAliveTimer = null;
            }
            resolveAudioChunkPromise();
            resolveAudioChunkPromise = null;
        }
    }
}

// --- AWS Translate Logic (no changes needed from previous version) ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }
  if (!japaneseText || japaneseText.trim().length === 0) return;
  try {
    const command = new TranslateTextCommand({
      Text: japaneseText, SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE, TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    updateSubtitlesInContentScript(japaneseText, response.TranslatedText);
  } catch (error) {
    console.error("Error translating text:", error);
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// --- Helper to send subtitle update message (no changes) ---
function updateSubtitlesInContentScript(japaneseText, chineseText) {
    if (currentTabId && isRunning) { // Only send if still running and tab is known
        chrome.tabs.sendMessage(currentTabId, {
          action: "updateSubtitles", japanese: japaneseText, chinese: chineseText
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

  // Reset state variables for a fresh start
  audioChunkQueue = [];
  if (resolveAudioChunkPromise) resolveAudioChunkPromise = null;
  if (keepAudioStreamAliveTimer) clearTimeout(keepAudioStreamAliveTimer);
  keepAudioStreamAliveTimer = null;
  if(audioStreamAbortController) audioStreamAbortController.abort(); // Abort any previous stream
  audioStreamAbortController = null;


  try {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (!tab || !tab.id) {
         return { success: false, error: "No active tab found" };
    }
    currentTabId = tab.id;

    await getAwsCredentials();

    translateClient = new TranslateClient({
       region: awsConfig.region, credentials: awsConfig.credentials,
    });
    console.log("TranslateClient initialized.");

    // Initialize Transcribe client here if not already, or ensure it's fresh
    transcribeClient = new TranscribeStreamingClient({
        region: awsConfig.region, credentials: awsConfig.credentials,
    });
    console.log("TranscribeStreamingClient (re)initialized for new session.");

    isRunning = true; // Set isRunning before starting the long-lived stream

    // Start Transcribe streaming. This function is async and will run in the background.
    // We don't await it here because it's a long-lived process.
    // Errors within startTranscribeStreaming should ideally call stopProcessing.
    startTranscribeStreaming(awsConfig).catch(error => {
        console.error("Unhandled error from startTranscribeStreaming promise:", error);
        // Ensure cleanup if this top-level promise rejects unexpectedly
        if (isRunning) stopProcessing();
    });
    console.log("Transcribe streaming process initiated.");

    // Setup content script
    await chrome.scripting.executeScript({ target: { tabId: currentTabId }, files: ['content.js']});
    await chrome.scripting.insertCSS({ target: { tabId: currentTabId }, files: ['subtitle.css']});
    await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
    console.log("Content script setup signal sent.");
    
    await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
    console.log("Sent initiateTabCapture signal to content script.");

    console.log("Processing marked as started.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    isRunning = false; // Critical to reset state
    const userErrorMsg = (typeof error === 'string') ? error : (error instanceof Error ? error.message : "Unknown error during start.");
    if (currentTabId) {
        updateSubtitlesInContentScript("", `[启动失败: ${userErrorMsg}]`);
        // Attempt to clean up content script side as well
        chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
            .catch(e => console.warn("Error sending stopContentScript during failed start:", e.message));
    }
    // Full cleanup
    awsConfig = null;
    translateClient = null;
    transcribeClient = null;
    if(audioStreamAbortController) audioStreamAbortController.abort();
    audioStreamAbortController = null;
    currentTabId = null;
    audioChunkQueue = [];
    if (resolveAudioChunkPromise) { resolveAudioChunkPromise(); resolveAudioChunkPromise = null;}
    if (keepAudioStreamAliveTimer) { clearTimeout(keepAudioStreamAliveTimer); keepAudioStreamAliveTimer = null; }

    return { success: false, error: userErrorMsg };
  }
}

function stopProcessing() {
  if (!isRunning && !audioStreamAbortController && !currentTabId && !awsConfig && audioChunkQueue.length === 0) {
    console.log("StopProcessing: Already stopped or nothing to do.");
    return { success: true, message: "Already stopped." };
  }
  console.log("Stopping processing...");

  isRunning = false; // Primary flag to stop all operations

  if (audioStreamAbortController && !audioStreamAbortController.signal.aborted) {
    console.log("Aborting Transcribe stream via controller.");
    audioStreamAbortController.abort();
  }
  audioStreamAbortController = null; // Clear it

  // Wake up the audioStreamGenerator if it's waiting, so it can see isRunning is false and exit
  if (resolveAudioChunkPromise) {
      resolveAudioChunkPromise(); // Doesn't matter if it rejects or resolves, just wakes it
      resolveAudioChunkPromise = null;
  }
  if (keepAudioStreamAliveTimer) { // Clear any pending timeout for the generator
      clearTimeout(keepAudioStreamAliveTimer);
      keepAudioStreamAliveTimer = null;
  }
  audioChunkQueue = []; // Clear any pending audio chunks


  if (currentTabId) {
      const tabIdToStop = currentTabId; // Use a local copy before nulling
      // currentTabId = null; // Nullify early to prevent race conditions with message sending
      chrome.tabs.sendMessage(tabIdToStop, { action: "stopContentScript" })
        .catch(e => console.warn("Error sending stopContentScript (tab might be closed):", e.message))
        .finally(() => {
            // Ensure currentTabId is nulled even if sendMessage fails, but only if it's still the one we meant to stop
            if (currentTabId === tabIdToStop) {
                currentTabId = null;
            }
        });
      console.log("Sent stop signal to content script for tab:", tabIdToStop);
  } else {
      console.log("No currentTabId to send stopContentScript to.");
  }
  
  // Reset clients and config
  transcribeClient = null; // Allow it to be garbage collected/recreated
  translateClient = null;
  awsConfig = null;

  console.log("Processing stopped and resources reset.");
  return { success: true };
}

// --- Message Listener ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const fromContentScript = sender.tab && sender.tab.id;
  // console.log(`BG RCV: ${request.action}`, fromContentScript ? `from CS tab ${sender.tab.id}` : "from popup/other", request.chunk ? `chunk: ${request.chunk.byteLength}`: "");

  if (request.action === "start") {
    startProcessing().then(sendResponse);
    return true;
  } else if (request.action === "stop") {
    sendResponse(stopProcessing());
    return false; // Synchronous response
  } else if (request.action === "getStatus") {
    sendResponse({ isRunning: isRunning });
    return false; // Synchronous response
  } else if (request.action === "audioChunk") {
    if (fromContentScript && sender.tab.id === currentTabId && request.chunk && isRunning) {
        sendAudioChunkToQueue(request.chunk);
    } else {
        // console.warn("BG: audioChunk ignored - conditions not met.", {fromCS: fromContentScript, senderTab: sender.tab?.id, currentTabId, hasChunk: !!request.chunk, isRunning});
    }
    return false; // No response needed
  } else if (request.action === "audioCaptureError") {
     console.error("BG: Audio capture error from content script:", request.error, `Tab: ${sender.tab?.id}`);
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`);
     if (isRunning) stopProcessing();
     sendResponse({ success: true }); // Acknowledge
     return false;
  } else if (request.action === "audioProcessingStarted") {
      // console.log("BG: Content script audio processing started.", `Tab: ${sender.tab?.id}`);
      sendResponse({ success: true }); // Acknowledge
      return false;
  }
  // console.warn(`BG: Unhandled message action: ${request.action}`);
  return false; // Default for unhandled messages or sync responses
});

console.log("Background service worker initialized. State: Idle.");

chrome.runtime.onSuspend.addListener(() => {
  console.log("Service worker suspending. Cleaning up if running.");
  if (isRunning) {
    stopProcessing();
  }
});
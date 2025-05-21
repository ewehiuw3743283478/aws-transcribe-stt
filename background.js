// background.js

// --- AWS SDK Imports ---
import { TranscribeStreamingClient } from "@aws-sdk/client-transcribe"; // Used for types, actual client not directly used for WebSocket
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeWebSocket = null;
let translateClient = null;
let currentTabId = null;
let eventMarshaller = null; // For AWS EventStream messages

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP"; // Japanese for STT
const TRANSLATE_SOURCE_LANGUAGE = "ja";   // Japanese for Translate
const TRANSLATE_TARGET_LANGUAGE = "zh";   // Chinese for Translate
const AUDIO_CHUNK_SAMPLE_RATE = 16000;    // Sample rate for Transcribe
const TRANSCRIBE_SERVICE_NAME = 'transcribe'; // Service name for Transcribe SigV4

// --- Helper: Get AWS Credentials ---
async function getAwsCredentials() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], function(data) {
      if (data.awsAccessKeyId && data.awsSecretAccessKey && data.awsRegion) {
        awsConfig = {
          accessKeyId: data.awsAccessKeyId,
          secretAccessKey: data.awsSecretAccessKey,
          region: data.awsRegion
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

// --- AWS Transcribe Real-time WebSocket Logic ---
async function startTranscribeWebSocket(config) {
  console.log("Attempting to connect to AWS Transcribe...");

  const endpoint = `wss://transcribestreaming.${config.region}.amazonaws.com:8443`;
  const parsedEndpointUrl = parseUrl(endpoint);

  const signer = new SignatureV4({
    credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        // sessionToken: config.sessionToken, // Include if using temporary credentials
    },
    region: config.region,
    service: TRANSCRIBE_SERVICE_NAME,
    sha256: Sha256, // Use the class constructor
  });

  // Create the HttpRequest object that will be presigned.
  // This represents the initial GET request for the WebSocket handshake.
  const requestToSign = new HttpRequest({
      method: 'GET',
      hostname: parsedEndpointUrl.hostname,
      path: '/stream-transcription-websocket', // Standard path for Transcribe streaming
      protocol: parsedEndpointUrl.protocol, // Should be 'wss:'
      headers: {
          'Host': parsedEndpointUrl.hostname // Crucial for SigV4 signing
      },
      query: { // Service-specific parameters for Transcribe
          'language-code': TRANSCRIBE_LANGUAGE_CODE,
          'media-encoding': 'pcm',
          'sample-rate': AUDIO_CHUNK_SAMPLE_RATE.toString(),
      }
  });

  // Use signer.presign() to generate the presigned URL components.
  // This method is designed for creating URLs with authentication in the query string.
  // It should populate `signedRequest.query` with all necessary `X-Amz-*` parameters.
  const signedRequest = await signer.presign(requestToSign, {
       expiresIn: 300, // URL expires in 5 minutes
       // signingDate is not explicitly set, SDK uses current time by default
  });

  // Construct the final WebSocket URL from the components of the signedRequest.
  // signedRequest.query should contain the original query parameters plus all X-Amz-* signature parameters.
  const queryString = new URLSearchParams(signedRequest.query).toString();
  const signedUrl = `wss://${signedRequest.hostname}${signedRequest.path}?${queryString}`;

  console.log("Signed WebSocket URL constructed using signer.presign():");
  console.log("Full Signed URL (for debugging - check for X-Amz-Signature, X-Amz-Expires, etc.):", signedUrl);
  // For deeper debugging, you can inspect the query object:
  // console.log("Signed Request Query Parameters:", signedRequest.query);

  transcribeWebSocket = new WebSocket(signedUrl);

  // Initialize the EventStreamMarshaller for encoding/decoding Transcribe messages
  eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened successfully.");
    // Send the initial configuration event required by Transcribe
    try {
        const greetingMessage = {
            headers: {
                ':message-type': { type: 'string', value: 'event' },
                ':event-type': { type: 'string', value: 'configuration-event' }, // This was 'AudioEvent' previously, should be 'configuration-event'
            },
            body: JSON.stringify({ // Body should be a JSON string for configuration
                LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
                MediaEncoding: 'pcm',
                SampleRate: AUDIO_CHUNK_SAMPLE_RATE,
                // Add any other session configuration attributes if needed
                // e.g., "EnablePartialResultsStabilization": true, "PartialResultsStability": "high"
            }),
        };
        const binaryMessage = eventMarshaller.marshall(greetingMessage);
        transcribeWebSocket.send(binaryMessage);
        console.log("Sent Transcribe configuration event message.");
    } catch (error) {
        console.error("Error sending Transcribe configuration message:", error);
        updateSubtitlesInContentScript("", `[STT配置出错: ${error.message}]`);
        if (isRunning) stopProcessing();
    }
     if (currentTabId) {
         chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e.message));
     }
  };

  transcribeWebSocket.onmessage = (eventMessage) => { // Renamed 'event' to 'eventMessage' to avoid conflict
    try {
        const blob = eventMessage.data;
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            if (!eventMarshaller) {
                console.error("eventMarshaller not initialized for onmessage.");
                return;
            }
            const message = eventMarshaller.unmarshall(new Uint8Array(arrayBuffer)); // AWS SDK Event
            const messageHeaders = message.headers;
            const messageBody = message.body; // This is a Uint8Array

            const messageType = messageHeaders[':message-type']?.value;
            const eventType = messageHeaders[':event-type']?.value;

            if (messageType === 'event' && eventType === 'TranscriptEvent') { // Corrected eventType
                const transcriptEvent = JSON.parse(toUtf8(messageBody)); // Convert Uint8Array body to string, then parse JSON
                const results = transcriptEvent.Transcript?.Results;
                if (results && results.length > 0) {
                    const result = results[0];
                    if (!result.IsPartial && result.Alternatives && result.Alternatives.length > 0) {
                        const transcript = result.Alternatives[0].Transcript;
                        if (transcript && transcript.trim().length > 0) {
                            console.log("Final Japanese:", transcript);
                            translateText(transcript);
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const exception = JSON.parse(toUtf8(messageBody));
                 console.error("Transcribe Exception:", exception.Message || exception.ExceptionType);
                 updateSubtitlesInContentScript("", `[STT出错: ${exception.Message || exception.ExceptionType}]`);
                 if (isRunning) stopProcessing();
            } else if (messageType === 'error') { // Handle :error events as well
                 const error = JSON.parse(toUtf8(messageBody));
                 console.error("Transcribe Error:", error.Message || error.ErrorCode);
                 updateSubtitlesInContentScript("", `[STT出错: ${error.Message || error.ErrorCode}]`);
                 if (isRunning) stopProcessing();
            }else {
                 console.log("Received unknown WebSocket message type/event:", messageType, eventType);
            }
        };
        reader.readAsArrayBuffer(blob);
    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        if (isRunning) stopProcessing();
    }
  };

   transcribeWebSocket.onerror = (wsErrorEvent) => { // Renamed 'event' to 'wsErrorEvent'
    console.error("Transcribe WebSocket error:", wsErrorEvent);
    // The native WebSocket ErrorEvent often doesn't have a detailed message.
    // More details might be in the browser's console when the error occurs.
    updateSubtitlesInContentScript("", `[STT连接错误]`);
    if (isRunning) stopProcessing();
  };

  transcribeWebSocket.onclose = (closeEvent) => { // Renamed 'event' to 'closeEvent'
    console.log("Transcribe WebSocket closed:", closeEvent.code, closeEvent.reason);
    const wasUnexpected = isRunning && closeEvent.code !== 1000 && closeEvent.code !== 1001;
    if (wasUnexpected) {
       console.error("WebSocket closed unexpectedly.");
       updateSubtitlesInContentScript("", `[STT连接意外关闭: ${closeEvent.code}]`);
    }
    // Ensure cleanup is done if the process was supposed to be running
    if (isRunning) {
        stopProcessing(); // This will set isRunning to false and clean up other resources
    } else {
        transcribeWebSocket = null; // Ensure it's cleared if stopProcessing wasn't called
    }
  };

  return transcribeWebSocket;
}

function stopTranscribeWebSocket() {
  if (transcribeWebSocket) {
    console.log("Closing Transcribe WebSocket...");
    if (transcribeWebSocket.readyState === WebSocket.OPEN || transcribeWebSocket.readyState === WebSocket.CONNECTING) {
        transcribeWebSocket.close(1000, "Client stopping");
    }
    transcribeWebSocket = null;
  }
}

// Function to send audio chunks to Transcribe
function sendAudioChunkToTranscribe(chunk) {
    if (transcribeWebSocket && transcribeWebSocket.readyState === WebSocket.OPEN) {
        if (!eventMarshaller) {
            console.error("eventMarshaller not initialized for sendAudioChunkToTranscribe.");
            return;
        }
        try {
            // Construct the AudioEvent message
            const audioEventMessage = {
                headers: {
                    ':message-type': { type: 'string', value: 'event' },
                    ':event-type': { type: 'string', value: 'AudioEvent' },
                    // ':content-type': { type: 'string', value: 'application/octet-stream' } // Usually not needed if media-encoding is pcm
                },
                body: new Uint8Array(chunk), // Raw audio bytes
            };
            const binaryMessage = eventMarshaller.marshall(audioEventMessage);
            transcribeWebSocket.send(binaryMessage);
        } catch (error) {
            console.error("Error marshalling/sending audio chunk:", error);
            updateSubtitlesInContentScript("", `[发送音频出错: ${error.message}]`);
            // Consider if stopProcessing() should be called here on repeated errors
        }
    } else {
        // console.warn("WebSocket not open or not initialized, cannot send audio chunk.");
    }
}

// --- AWS Translate Logic ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }
  if (!japaneseText || japaneseText.trim().length === 0) {
      // console.log("No meaningful text to translate.");
      return;
  }
  // console.log("Translating:", japaneseText); // Can be noisy
  try {
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    // console.log("Translated:", chineseText); // Can be noisy
    updateSubtitlesInContentScript(japaneseText, chineseText);
  } catch (error) {
    console.error("Error translating text:", error);
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// Helper to send subtitle update message
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

    await getAwsCredentials();

    translateClient = new TranslateClient({
       region: awsConfig.region,
       credentials: {
           accessKeyId: awsConfig.accessKeyId,
           secretAccessKey: awsConfig.secretAccessKey,
       }
    });
    console.log("TranslateClient initialized.");

    // Start WebSocket connection. This is async.
    await startTranscribeWebSocket(awsConfig);
    console.log("Transcribe WebSocket setup initiated (connection pending).");

    // Setup content script
    try {
        await chrome.scripting.executeScript({ target: { tabId: currentTabId }, files: ['content.js']});
        await chrome.scripting.insertCSS({ target: { tabId: currentTabId }, files: ['subtitle.css']});
        await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
        console.log("Content script setup signal sent.");
    } catch (scriptError) {
        console.error("Error setting up content script:", scriptError);
        throw new Error(`Content script setup failed: ${scriptError.message}`); // Propagate
    }
    
    // Signal content script to start audio capture.
    // The content script should ideally wait for the "awsReady" message before sending chunks,
    // or buffer them if it starts capturing earlier.
    try {
        await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
        console.log("Sent initiateTabCapture signal to content script.");
    } catch (captureError) {
         console.error("Error sending initiateTabCapture signal:", captureError);
         throw new Error(`Signaling tab capture failed: ${captureError.message}`); // Propagate
    }

    isRunning = true;
    console.log("Processing marked as started. Waiting for WebSocket to open and receive audio.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    // Ensure cleanup, even if some parts succeeded before the error
    if (isRunning) { // If it was marked as running before error
        stopProcessing(); // This will handle full cleanup
    } else { // If it failed before isRunning was set true
        awsConfig = null;
        translateClient = null;
        if(transcribeWebSocket) stopTranscribeWebSocket();
        if(currentTabId) {
            updateSubtitlesInContentScript("", `[启动失败: ${error.message}]`);
            // Try to tell content script to stop if it was partially set up
            chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
                .catch(e => console.warn("Error sending stop to content script during failed start:", e.message))
                .finally(() => currentTabId = null);
        }
    }
    const userError = (typeof error === 'string') ? error : (error instanceof Error ? error.message : "Unknown error during start.");
    return { success: false, error: userError };
  }
}

function stopProcessing() {
  if (!isRunning && !transcribeWebSocket && !currentTabId && !awsConfig) {
    console.log("StopProcessing called but already seems stopped/cleaned.");
    return { success: true, message: "Already stopped or not running." };
  }
  console.log("Stopping processing...");

  stopTranscribeWebSocket(); // Clears transcribeWebSocket

  if (currentTabId) {
      const tabIdToStop = currentTabId; // Local copy
      currentTabId = null; // Clear immediately to prevent new messages
      chrome.tabs.sendMessage(tabIdToStop, { action: "stopContentScript" })
        .catch(e => console.warn("Error sending stopContentScript (tab might be closed):", e.message));
      console.log("Sent stop signal to content script for tab:", tabIdToStop);
  }

  isRunning = false;
  awsConfig = null;
  translateClient = null;
  eventMarshaller = null;
  console.log("Processing stopped and resources reset.");
  return { success: true };
}

// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const fromContentScript = sender.tab && sender.tab.id;
  console.log(`Background received: ${request.action}`, fromContentScript ? `from content script tab ${sender.tab.id}` : "from popup/other");

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
    // Only process if it's from the current tab and we are running
    if (fromContentScript && sender.tab.id === currentTabId && request.chunk && isRunning) {
        sendAudioChunkToTranscribe(request.chunk);
    }
    // No response needed for audio chunks to reduce overhead
    return false;
  } else if (request.action === "audioCaptureError") {
     console.error("Audio capture error from content script:", request.error, `Tab: ${sender.tab?.id}`);
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`);
     if (isRunning) stopProcessing(); // Stop if running
     sendResponse({ success: true }); // Acknowledge
     return false;
  } else if (request.action === "audioProcessingStarted") {
      console.log("Content script audio processing started.", `Tab: ${sender.tab?.id}`);
      sendResponse({ success: true }); // Acknowledge
      return false;
  }
  // Default to false if not handled or not async
  return false;
});

console.log("Background service worker initialized. State: Idle.");

// Cleanup on extension uninstall/disable (though service workers are event-driven)
chrome.runtime.onSuspend.addListener(() => {
  console.log("Service worker suspending. Cleaning up if running.");
  if (isRunning) {
    stopProcessing();
  }
});
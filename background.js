// background.js

// --- AWS SDK Imports (Conceptual - requires bundling) ---
import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser";
import { buildHttpRequest, HttpRequest } from "@aws-sdk/protocol-http";
import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node"; // Or browser equivalent

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeWebSocket = null;
let translateClient = null; // AWS Translate Client instance
let currentTabId = null; // Keep track of the tab where processing is active

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP"; // Japanese for STT
const TRANSLATE_SOURCE_LANGUAGE = "ja"; // Japanese for Translate
const TRANSLATE_TARGET_LANGUAGE = "zh"; // Chinese for Translate
// IMPORTANT: Sample rate MUST match the sample rate of the audio chunks received from content.js
// If content.js captures at 44100Hz and doesn't resample, you must set this to 44100.
// If content.js resamples to 16000Hz, set this to 16000.
const AUDIO_CHUNK_SAMPLE_RATE = 16000; // Assuming content.js resamples or captures at this rate

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
// (Mostly same as before, but sends AUDIO_CHUNK_SAMPLE_RATE)
async function startTranscribeWebSocket(config) {
  console.log("Attempting to connect to AWS Transcribe...");

  const endpoint = `wss://transcribestreaming.${config.region}.amazonaws.com:8443`;
  // Construct the signed WebSocket URL using SigV4 (complex, requires SDK helpers)
  // const signedUrl = await buildSignedTranscribeUrl(config, endpoint, AUDIO_CHUNK_SAMPLE_RATE); // Hypothetical helper

  // Placeholder URL structure (DOES NOT INCLUDE REAL SIGV4 SIGNING!)
  const placeholderUrl = `${endpoint}/?language-code=${TRANSCRIBE_LANGUAGE_CODE}&media-encoding=pcm&sample-rate=${AUDIO_CHUNK_SAMPLE_RATE}`;
  console.warn("Using placeholder WebSocket URL without real SigV4 signing. Connection will likely fail.");
  transcribeWebSocket = new WebSocket(placeholderUrl);
  // const eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8); // Requires @aws-sdk/eventstream-marshaller, util-utf8-node

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened.");
    // Send initial settings message (conceptual, requires event stream marshalling)
    /*
    const greetingMessage = { ... }; // Build Transcribe configuration message
    const binaryMessage = eventMarshaller.marshall(greetingMessage);
    transcribeWebSocket.send(binaryMessage);
    */
     console.log("WebSocket opened. Ready to receive audio data (and send config if implemented).");
     // Inform content script that AWS is ready to receive audio (optional)
     if (currentTabId) {
         chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e));
     }
  };

  transcribeWebSocket.onmessage = (event) => {
    // *** Parse the incoming event stream message from Transcribe ***
    // This is where you get the transcribed Japanese text.
    // Example (conceptual, requires eventstream-marshaller):
    /*
    try {
        const blob = event.data;
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const message = eventMarshaller.unmarshall(new Uint8Array(arrayBuffer));

            const messageType = message.headers[':message-type']?.value;
            const eventType = message.headers[':event-type']?.value;

            if (messageType === 'event' && eventType === 'transcript-event') {
                const messageBody = JSON.parse(message.body);
                const results = messageBody.Transcript?.Results;

                if (results && results.length > 0) {
                    const result = results[0];
                    const alternative = result.Alternatives?.[0];

                    if (alternative && alternative.Transcript && alternative.Transcript.trim().length > 0) {
                        const transcript = alternative.Transcript;
                        const isPartial = result.IsPartial;

                        if (!isPartial) {
                            console.log("Final Japanese:", transcript);
                            // *** CALL TRANSLATE HERE ***
                            translateText(transcript);
                        } else {
                            // Optional: Handle partial results
                            // updateSubtitlesInContentScript(transcript, "...");
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const messageBody = JSON.parse(message.body);
                 console.error("Transcribe Exception:", messageBody.Message);
                 updateSubtitlesInContentScript("", `[STT出错: ${messageBody.Message}]`);
                 stopProcessing(); // Stop on error
            }
        };
        reader.readAsArrayBuffer(blob);

    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        stopProcessing(); // Stop on error
    }
    */

    // --- Placeholder: Simulate receiving a final transcript ---
    console.log("Received WebSocket message (placeholder). Simulating transcript result.");
    // In a real scenario, parse event.data and call translateText(parsedJapaneseText);
    // For now, let's simulate receiving text and triggering translation after a short delay.
    // This simulation replaces the actual message parsing logic above.
    if (!transcribeWebSocket._simulating) { // Prevent multiple timeouts from one message
        transcribeWebSocket._simulating = true;
         setTimeout(() => {
            const simulatedJapaneseText = "こんにちは、これはタブキャプチャからのテストです。"; // Example Japanese text
            console.log("Simulated Final Japanese:", simulatedJapaneseText);
            translateText(simulatedJapaneseText); // Call translate
            delete transcribeWebSocket._simulating;
         }, 500); // Simulate processing delay
    }
    // --- End Placeholder Simulation ---
  };

  transcribeWebSocket.onerror = (event) => {
    console.error("Transcribe WebSocket error:", event);
    const errorMessage = event?.message || 'Unknown WebSocket error';
    updateSubtitlesInContentScript("", `[STT连接出错: ${errorMessage}]`);
    stopProcessing(); // Ensure state is reset
  };

  transcribeWebSocket.onclose = (event) => {
    console.log("Transcribe WebSocket closed:", event.code, event.reason);
    if (isRunning) { // If it closed unexpectedly while running
       console.error("WebSocket closed unexpectedly, attempting to stop.");
       updateSubtitlesInContentScript("", "[STT连接意外关闭]");
       stopProcessing(); // Ensure state is reset
    } else {
       console.log("WebSocket closed gracefully.");
    }
  };

  return transcribeWebSocket;
}

function stopTranscribeWebSocket() {
  if (transcribeWebSocket) {
    console.log("Closing Transcribe WebSocket...");
    transcribeWebSocket.close(1000, "Client stopping"); // Normal closure
    transcribeWebSocket = null;
  }
}

// Function to send audio chunks (called by content script)
// The chunk should be an ArrayBuffer containing raw audio data (Int16Array buffer)
function sendAudioChunkToTranscribe(chunk) {
    if (transcribeWebSocket && transcribeWebSocket.readyState === WebSocket.OPEN) {
        // *** Send the audio chunk as a binary message ***
        // This involves creating an EventStream message of type 'AudioEvent'
        // with the chunk as the body, and marshalling it into a binary frame.
        // Requires eventstream-marshaller.
        /*
        try {
            const audioEventMessage = {
                headers: {
                    ':message-type': { type: 'string', value: 'event' },
                    ':event-type': { type: 'string', value: 'AudioEvent' },
                },
                body: new Uint8Array(chunk), // Audio data as Uint8Array or Buffer
            };
            const binaryMessage = eventMarshaller.marshall(audioEventMessage);
            transcribeWebSocket.send(binaryMessage);
            // console.log("Sent audio chunk. Size:", chunk.byteLength);
        } catch (error) {
            console.error("Error marshalling/sending audio chunk:", error);
            // Decide how to handle send errors - maybe stop or log
            updateSubtitlesInContentScript("", `[发送音频出错: ${error.message}]`);
            // stopProcessing(); // Optional: stop on send error
        }
        */
        // console.log("Received and would send audio chunk (processing disabled in example). Size:", chunk.byteLength);
        // In a real scenario, uncomment the try/catch block above.
    } else {
        // console.warn("WebSocket not open, cannot send audio chunk.");
        // Handle case where WS is not ready - buffer chunks? Drop them?
    }
}


// --- AWS Translate Logic (Same as before) ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }

  if (!japaneseText || japaneseText.trim().length === 0) {
      console.log("No meaningful text to translate.");
      // If Transcribe sends empty or whitespace result, maybe clear subtitles or show only previous?
      // updateSubtitlesInContentScript("", "");
      return;
  }

  console.log("Translating:", japaneseText);

  try {
    // *** Call Translate API (Requires @aws-sdk/client-translate) ***
    /*
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    */

    // --- Placeholder: Simulate translation delay and result ---
    const chineseText = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`[翻译: ${japaneseText}]`); // Replace with actual translation result from AWS
        }, 200); // Simulate network latency for translation
    });
    // --- End Placeholder ---

    console.log("Translated:", chineseText);

    // Send both original and translated text to content script
    updateSubtitlesInContentScript(japaneseText, chineseText);

  } catch (error) {
    console.error("Error translating text:", error);
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// Helper to send subtitle update message to the active tab
function updateSubtitlesInContentScript(japaneseText, chineseText) {
    // Send message only to the tab that initiated the process
    if (currentTabId) {
        chrome.tabs.sendMessage(currentTabId, {
          action: "updateSubtitles",
          japanese: japaneseText,
          chinese: chineseText
        }).catch(e => console.error("Error sending updateSubtitles message:", e));
    } else {
        console.warn("No active tab ID to send subtitle update.");
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
    // Get the active tab first to know where to inject/send messages
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (!tab || !tab.id) {
         console.error("No active tab found or tab ID is invalid.");
         return { success: false, error: "No active tab found" };
    }
    currentTabId = tab.id; // Store the tab ID

    // 1. Get AWS Credentials
    awsConfig = await getAwsCredentials();
    console.log("AWS Config loaded successfully.");

    // 2. Initialize AWS Translate Client
    // translateClient = new TranslateClient({ ... }); // Requires @aws-sdk/client-translate
    console.warn("TranslateClient initialization placeholder."); // Placeholder

    // 3. Start AWS Transcribe WebSocket connection
    // This is async and needs to handle connection lifecycle.
    // We start the WS connection early while waiting for audio.
    await startTranscribeWebSocket(awsConfig);
    console.log("Transcribe WebSocket setup initiated.");

    // 4. Inject content script and CSS (if not already there) and signal it to start subtitles
    // This ensures the content script is ready before we ask it to capture.
    await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        files: ['content.js'], // Inject content.js if not already there
    });
     await chrome.scripting.insertCSS({
        target: { tabId: currentTabId },
        files: ['subtitle.css'], // Inject CSS if not already there
    });

    // Send the initial start signal to the content script (primarily for subtitles)
    await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
    console.log("Sent startContentScript signal to content script.");

    // 5. *** NOW, TELL THE CONTENT SCRIPT TO INITIATE TAB CAPTURE ***
    // This will trigger the chrome.tabCapture.capture call and the permission dialog.
    // The content script will then send audio chunks back via 'audioChunk' messages.
    await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
    console.log("Sent initiateTabCapture signal to content script.");


    isRunning = true;
    console.log("Processing started successfully.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    // Ensure cleanup happens if start fails
    stopProcessing();
    let userError = "Unknown error during start.";
    if (typeof error === 'string') {
        userError = error;
    } else if (error instanceof Error) {
        userError = error.message;
    }
    updateSubtitlesInContentScript("", `[启动失败: ${userError}]`); // Show error in subtitles
    return { success: false, error: userError };
  }
}

function stopProcessing() {
  if (!isRunning) {
    console.log("Not running.");
    return { success: false, error: "Not running" };
  }

  console.log("Stopping processing...");

  // 1. Stop AWS Transcribe WebSocket
  stopTranscribeWebSocket();

  // 2. Inform content script to remove subtitles and stop audio capture
  if (currentTabId) {
      chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
        .catch(e => console.error("Error sending stopContentScript message:", e));
      console.log("Sent stop signal to content script.");
  } else {
      console.warn("No active tab ID to send stop signal.");
  }


  // 3. Reset state
  isRunning = false;
  awsConfig = null; // Clear credentials from memory (best effort)
  translateClient = null; // Clear client instance
  currentTabId = null; // Clear the active tab ID
  console.log("Processing stopped.");
  return { success: true };
}


// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background received message:", request.action, sender.tab ? "from content script in tab " + sender.tab.id : "from popup/other");

  // Handle messages from popup or content script
  if (request.action === "start") {
    // Start the whole process (triggered by popup)
    startProcessing().then(sendResponse);
    return true; // Indicate async response
  } else if (request.action === "stop") {
    // Stop the whole process (triggered by popup)
    sendResponse(stopProcessing());
  } else if (request.action === "getStatus") {
    // Report current running status (used by popup)
    sendResponse({ isRunning: isRunning });
  } else if (request.action === "audioChunk") {
    // Received audio data from content script (from tabCapture processing)
    // Ensure message comes from the tab we expect
    if (sender.tab && sender.tab.id === currentTabId && request.chunk) {
        // console.log("Received audio chunk from content script. Size:", request.chunk.byteLength);
        // Send the audio chunk to the Transcribe WebSocket
        sendAudioChunkToTranscribe(request.chunk); // Call the function to send to WS
        sendResponse({ success: true }); // Acknowledge receipt
        // return true; // Uncomment if sendAudioChunkToTranscribe is async
    } else {
         console.warn("Received audioChunk message from unexpected sender or without data.");
         sendResponse({ success: false, error: "Invalid audioChunk message" });
    }
  } else if (request.action === "audioCaptureError") {
     // Received error message from content script regarding audio capture
     console.error("Audio capture failed in content script:", request.error);
     // Optionally stop processing or show a notification
     // It's often best to stop the whole process if audio capture fails.
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`); // Inform user via subtitles
     stopProcessing(); // Stop the entire process
     sendResponse({ success: true }); // Acknowledge receipt
  } else if (request.action === "audioProcessingStarted") {
      // Optional: Content script confirms Web Audio processing started
      console.log("Content script reports audio processing started.");
      sendResponse({ success: true });
  }
  // Add other message handlers if needed
});

// --- Initial state check (optional) ---
console.log("Background service worker initialized. State: Idle.");
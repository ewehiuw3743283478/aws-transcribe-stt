/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
// background.js

// --- AWS SDK Imports (Conceptual - requires bundling or importScripts) ---
// To use AWS SDK v3 in a Chrome Extension Service Worker (Manifest V3),
// you typically need to bundle your code using tools like Webpack or Parcel.
// Install necessary packages:
// npm install @aws-sdk/client-transcribe @aws-sdk/client-translate @aws-sdk/signature-v4 @aws-crypto/sha256-js @aws-sdk/url-parser @aws-sdk/protocol-http @aws-sdk/eventstream-marshaller @aws-sdk/util-utf8-node --save
// (Note: @aws-sdk/util-utf8-node might need browser-compatible polyfills or alternatives depending on your bundler config)

// import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe";
// import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
// import { SignatureV4 } from "@aws-sdk/signature-v4";
// import { Sha256 } from "@aws-crypto/sha256-js";
// import { parseUrl } from "@aws-sdk/url-parser";
// import { buildHttpRequest, HttpRequest } from "@aws-sdk/protocol-http";
// import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
// import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node"; // Or browser equivalent

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeWebSocket = null;
let translateClient = null; // AWS Translate Client instance

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP"; // Japanese for STT
const TRANSLATE_SOURCE_LANGUAGE = "ja"; // Japanese for Translate
const TRANSLATE_TARGET_LANGUAGE = "zh"; // Chinese for Translate
// IMPORTANT: Sample rate MUST match the audio source's sample rate.
// Common rates are 8000, 16000, 44100. 16000 is good for speech.
const TRANSCRIBE_SAMPLE_RATE = 16000; // Example sample rate

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
  const url = new URL(endpoint);

  // --- SigV4 Signing (Requires AWS SDK v3 SigV4, protocol-http, url-parser, sha256) ---
  // This is the most complex part of setting up the WebSocket connection.
  // You need to sign the initial HTTP GET request that initiates the WebSocket handshake.
  // The signed request's headers (like Authorization, x-amz-date, x-amz-security-token)
  // are typically included as query parameters in the final WebSocket URL.

  /* Example conceptual signing process:
  const signer = new SignatureV4({
    credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        sessionToken: config.sessionToken, // If using temporary credentials
    },
    region: config.region,
    service: 'transcribe',
    sha256: Sha256, // Requires @aws-crypto/sha256-js
  });

  const request = new HttpRequest({
      method: 'GET',
      hostname: url.hostname,
      path: url.pathname,
      query: {
          'language-code': TRANSCRIBE_LANGUAGE_CODE,
          'media-encoding': 'pcm', // Or 'ogg-opus', 'flac' - Must match audio source format
          'sample-rate': TRANSCRIBE_SAMPLE_RATE.toString(),
          // Add other transcribe parameters as needed, e.g., show-speaker-label, enable-partial-results-stabilization
      },
      protocol: url.protocol,
  });

  const signedRequest = await signer.sign(request, { signingDate: new Date(), expiresIn: 300 }); // expiresIn in seconds

  // Build the WebSocket URL with signed headers as query parameters
  let signedUrl = `wss://${signedRequest.hostname}${signedRequest.path}?${new URLSearchParams(signedRequest.query).toString()}`;
  // Add signed headers to query params for WebSocket handshake
  Object.entries(signedRequest.headers).forEach(([key, value]) => {
       // Keys like 'Authorization', 'x-amz-date', 'x-amz-security-token'
       signedUrl += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });
  console.log("Signed WebSocket URL constructed (conceptual):", signedUrl);

  transcribeWebSocket = new WebSocket(signedUrl);
  */

  // --- Placeholder WebSocket Setup (WITHOUT REAL SIGV4 SIGNING) ---
  // This WILL NOT authenticate correctly with AWS Transcribe.
  // It's here just to show the WebSocket event handlers.
  const placeholderUrl = `${endpoint}/?language-code=${TRANSCRIBE_LANGUAGE_CODE}&media-encoding=pcm&sample-rate=${TRANSCRIBE_SAMPLE_RATE}`;
  console.warn("Using placeholder WebSocket URL without real SigV4 signing. Connection will likely fail.");
  transcribeWebSocket = new WebSocket(placeholderUrl);
  // --- End Placeholder ---


  // const eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8); // Requires @aws-sdk/eventstream-marshaller, util-utf8-node

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened.");
    // Send initial settings message (required by Transcribe event stream protocol)
    // This message format is specific to Transcribe event stream.
    // Example (conceptual, requires eventstream-marshaller):
    /*
    const greetingMessage = {
        headers: {
            ':message-type': { type: 'string', value: 'event' },
            ':event-type': { type: 'string', value: 'configuration-event' },
        },
        body: JSON.stringify({
            LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
            MediaEncoding: 'pcm',
            SampleRate: TRANSCRIBE_SAMPLE_RATE,
            // Add other configuration options here
        }),
    };
    const binaryMessage = eventMarshaller.marshall(greetingMessage);
    transcribeWebSocket.send(binaryMessage);
    */
     console.log("WebSocket opened. Ready to receive audio data (and send config if implemented).");
     // Inform content script that AWS is ready to receive audio (optional)
     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
       if (tabs[0]) {
         chrome.tabs.sendMessage(tabs[0].id, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e));
       }
     });
  };

  transcribeWebSocket.onmessage = (event) => {
    // *** Parse the incoming event stream message from Transcribe ***
    // event.data will be a binary Blob or ArrayBuffer.
    // You need to unmarshall it using EventStreamMarshaller.
    // Example (conceptual, requires eventstream-marshaller, util-utf8-node):
    /*
    try {
        const blob = event.data;
        // Read blob as ArrayBuffer
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const message = eventMarshaller.unmarshall(new Uint8Array(arrayBuffer)); // Use Uint8Array or Buffer

            const messageType = message.headers[':message-type']?.value;
            const eventType = message.headers[':event-type']?.value;

            if (messageType === 'event' && eventType === 'transcript-event') {
                const messageBody = JSON.parse(message.body); // Message body is JSON
                const results = messageBody.Transcript?.Results;

                if (results && results.length > 0) {
                    // Process results. Transcribe can return multiple results/alternatives.
                    // We usually care about the first result and its first alternative.
                    const result = results[0];
                    const alternative = result.Alternatives?.[0];

                    if (alternative && alternative.Transcript && alternative.Transcript.trim().length > 0) {
                        const transcript = alternative.Transcript;
                        // result.IsPartial tells you if this is a final segment or an intermediate one
                        const isPartial = result.IsPartial;

                        if (!isPartial) {
                            // Got a final transcript segment
                            console.log("Final Japanese:", transcript);
                            // *** CALL TRANSLATE HERE ***
                            translateText(transcript);
                        } else {
                            // Got a partial transcript (optional to display)
                            // console.log("Partial Japanese:", transcript);
                            // You could send partial results to content script for real-time display as user speaks
                            // updateSubtitlesInContentScript(transcript, "..."); // Show partial JP, pending translation
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const messageBody = JSON.parse(message.body);
                 console.error("Transcribe Exception:", messageBody.Message);
                 updateSubtitlesInContentScript("", `[STT出错: ${messageBody.Message}]`);
                 stopProcessing(); // Stop on error
            } else {
                 console.log("Received unknown WebSocket message type:", messageType, eventType);
            }
        };
        reader.readAsArrayBuffer(blob);

    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        stopProcessing(); // Stop on error
    }
    */

    // --- Placeholder: Simulate receiving a final transcript after a delay ---
    console.log("Received WebSocket message (placeholder). Simulating transcript result.");
    // In a real scenario, parse event.data and call translateText(parsedJapaneseText);
    // For now, let's simulate receiving text and triggering translation after a short delay.
    // This simulation replaces the actual message parsing logic above.
    setTimeout(() => {
       const simulatedJapaneseText = "こんにちは、これはテストです。リアルタイムで翻訳されます。"; // Example Japanese text
       console.log("Simulated Final Japanese:", simulatedJapaneseText);
       translateText(simulatedJapaneseText); // Call translate
    }, 500); // Simulate processing delay
    // --- End Placeholder Simulation ---
  };

  transcribeWebSocket.onerror = (event) => {
    console.error("Transcribe WebSocket error:", event);
    const errorMessage = event?.message || 'Unknown WebSocket error';
    updateSubtitlesInContentScript("", `[STT连接出错: ${errorMessage}]`);
    stopProcessing(); // Ensure state is reset
    // Inform content script/popup about the error
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

  // Return the WebSocket instance so the caller knows it was created (even if not fully open yet)
  return transcribeWebSocket;
}

function stopTranscribeWebSocket() {
  if (transcribeWebSocket) {
    console.log("Closing Transcribe WebSocket...");
    // Use code 1000 for normal closure
    transcribeWebSocket.close(1000, "Client stopping");
    transcribeWebSocket = null;
  }
}

// Function to send audio chunks (called by content script or audio source)
// The chunk should be an ArrayBuffer containing raw audio data (e.g., PCM, 16-bit, mono)
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
                body: chunk, // ArrayBuffer or Buffer containing audio data
            };
            const binaryMessage = eventMarshaller.marshall(audioEventMessage);
            transcribeWebSocket.send(binaryMessage);
            // console.log("Sent audio chunk. Size:", chunk.byteLength);
        } catch (error) {
            console.error("Error marshalling/sending audio chunk:", error);
            // Decide how to handle send errors - maybe stop or log
        }
        */
        // console.log("Received and would send audio chunk (processing disabled in example). Size:", chunk.byteLength);
        // In a real scenario, uncomment the try/catch block above.
    } else {
        // console.warn("WebSocket not open, cannot send audio chunk.");
        // Handle case where WS is not ready - buffer chunks? Drop them?
    }
}


// --- AWS Translate Logic ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    // Even if translation fails, try to display the Japanese text
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }

  if (!japaneseText || japaneseText.trim().length === 0) {
      console.log("No meaningful text to translate.");
      // If Transcribe sends empty or whitespace result, maybe clear subtitles or show only previous?
      // updateSubtitlesInContentScript("", ""); // Example: Clear subtitles
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
    // Inform content script/user about the translation error, display Japanese text if possible
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// Helper to send subtitle update message to active tab
function updateSubtitlesInContentScript(japaneseText, chineseText) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "updateSubtitles",
          japanese: japaneseText,
          chinese: chineseText
        }).catch(e => console.error("Error sending updateSubtitles message:", e));
      } else {
          console.warn("Could not find active tab to send subtitle update.");
      }
    });
}


// --- Main Control Functions ---
async function startProcessing() {
  if (isRunning) {
    console.log("Already running.");
    return { success: false, error: "Already running" };
  }

  console.log("Attempting to start processing...");

  try {
    // 1. Get AWS Credentials
    awsConfig = await getAwsCredentials();
    console.log("AWS Config loaded successfully.");

    // 2. Initialize AWS Translate Client
    // This should be initialized once when starting.
    // translateClient = new TranslateClient({ // Requires @aws-sdk/client-translate
    //    region: awsConfig.region,
    //    credentials: {
    //        accessKeyId: awsConfig.accessKeyId,
    //        secretAccessKey: awsConfig.secretAccessKey,
    //        // sessionToken: awsConfig.sessionToken, // If using temporary credentials
    //    }
    // });
    console.warn("TranslateClient initialization placeholder."); // Placeholder

    // 3. Start AWS Transcribe WebSocket connection
    // This is async and needs to handle connection lifecycle.
    // The function returns the WS instance, but we mainly rely on its event handlers.
    await startTranscribeWebSocket(awsConfig);
    console.log("Transcribe WebSocket setup initiated.");


    // 4. Inform content script to start subtitle display and (attempt) audio capture
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (tab && tab.id) {
        // Use chrome.scripting.executeScript to ensure content script is injected and ready
        // This is the standard Manifest V3 way to interact with content scripts
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js'], // Inject content.js if not already there
        });
         await chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ['subtitle.css'], // Inject CSS if not already there
        });

        // Send the start signal to the content script *after* ensuring it's injected
        await chrome.tabs.sendMessage(tab.id, { action: "startContentScript" });
        console.log("Sent start signal to content script.");

    } else {
        console.error("No active tab found or tab ID is invalid.");
        stopProcessing(); // Clean up if no tab
        return { success: false, error: "No active tab found" };
    }

    isRunning = true;
    console.log("Processing started successfully.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    // Ensure cleanup happens if start fails
    stopProcessing();
    // Provide a user-friendly error message
    let userError = "Unknown error during start.";
    if (typeof error === 'string') {
        userError = error; // E.g., "Credentials not configured"
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
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs[0] && tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "stopContentScript" })
        .catch(e => console.error("Error sending stopContentScript message:", e));
      console.log("Sent stop signal to content script.");
    } else {
        console.warn("Could not find active tab to send stop signal.");
    }
  });

  // 3. Reset state
  isRunning = false;
  awsConfig = null; // Clear credentials from memory (best effort)
  translateClient = null; // Clear client instance
  console.log("Processing stopped.");
  return { success: true };
}


// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background received message:", request.action, sender.tab ? "from content script in tab " + sender.tab.id : "from popup/other");

  // Handle messages from popup or content script
  if (request.action === "start") {
    // Start the whole process
    startProcessing().then(sendResponse);
    return true; // Indicate async response
  } else if (request.action === "stop") {
    // Stop the whole process
    sendResponse(stopProcessing());
  } else if (request.action === "getStatus") {
    // Report current running status (used by popup)
    sendResponse({ isRunning: isRunning });
  } else if (request.action === "audioChunk") {
    // Received audio data from content script (if audio capture is implemented there)
    // This chunk needs to be sent to the Transcribe WebSocket
    // console.log("Received audio chunk from content script. Size:", request.chunk?.byteLength);
    if (request.chunk) {
        // Note: request.chunk is likely an ArrayBuffer or Blob depending on how content script sends it.
        // sendAudioChunkToTranscribe(request.chunk); // Call the function to send to WS
        // Placeholder: Just acknowledge receipt without sending
        sendResponse({ success: true }); // Acknowledge receipt
        // return true; // Uncomment if sendAudioChunkToTranscribe is async
    } else {
         console.warn("Received audioChunk message with no chunk data.");
         sendResponse({ success: false, error: "No audio data received" });
    }
  } else if (request.action === "audioCaptureError") {
     // Received error message from content script regarding audio capture
     console.error("Audio capture failed in content script:", request.error);
     // Optionally stop processing or show a notification
     // stopProcessing();
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`); // Inform user via subtitles
     sendResponse({ success: true }); // Acknowledge receipt
  }
  // Add other message handlers if needed (e.g., for errors from content script)
});

// --- Initial state check (optional) ---
// Service workers are event-driven and can be terminated when idle.
// State like `isRunning` is not automatically persistent.
// When the service worker starts, `isRunning` is false.
// If you need to restore state (e.g., restart processing if it was active),
// you would need to save state to chrome.storage and check it on startup.
// For this example, we start fresh when the popup button is clicked.
console.log("Background service worker initialized. State: Idle.");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q047QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsTUFBTTtBQUNOO0FBQ0E7QUFDQSxpREFBaUQsVUFBVSxLQUFLO0FBQ2hFLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RDtBQUNBLDRDQUE0Qyw2QkFBNkI7QUFDekU7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQjtBQUNBLFdBQVc7QUFDWDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLHVCQUF1QixlQUFlLEdBQUc7QUFDekMsd0JBQXdCO0FBQ3hCLE1BQU07QUFDTjtBQUNBLHdCQUF3QixpREFBaUQ7QUFDekU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYyxLQUFLO0FBQ3ZFLG9CQUFvQixlQUFlLEdBQUc7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFja2dyb3VuZC5qc1xuXG4vLyAtLS0gQVdTIFNESyBJbXBvcnRzIChDb25jZXB0dWFsIC0gcmVxdWlyZXMgYnVuZGxpbmcgb3IgaW1wb3J0U2NyaXB0cykgLS0tXG4vLyBUbyB1c2UgQVdTIFNESyB2MyBpbiBhIENocm9tZSBFeHRlbnNpb24gU2VydmljZSBXb3JrZXIgKE1hbmlmZXN0IFYzKSxcbi8vIHlvdSB0eXBpY2FsbHkgbmVlZCB0byBidW5kbGUgeW91ciBjb2RlIHVzaW5nIHRvb2xzIGxpa2UgV2VicGFjayBvciBQYXJjZWwuXG4vLyBJbnN0YWxsIG5lY2Vzc2FyeSBwYWNrYWdlczpcbi8vIG5wbSBpbnN0YWxsIEBhd3Mtc2RrL2NsaWVudC10cmFuc2NyaWJlIEBhd3Mtc2RrL2NsaWVudC10cmFuc2xhdGUgQGF3cy1zZGsvc2lnbmF0dXJlLXY0IEBhd3MtY3J5cHRvL3NoYTI1Ni1qcyBAYXdzLXNkay91cmwtcGFyc2VyIEBhd3Mtc2RrL3Byb3RvY29sLWh0dHAgQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlciBAYXdzLXNkay91dGlsLXV0Zjgtbm9kZSAtLXNhdmVcbi8vIChOb3RlOiBAYXdzLXNkay91dGlsLXV0Zjgtbm9kZSBtaWdodCBuZWVkIGJyb3dzZXItY29tcGF0aWJsZSBwb2x5ZmlsbHMgb3IgYWx0ZXJuYXRpdmVzIGRlcGVuZGluZyBvbiB5b3VyIGJ1bmRsZXIgY29uZmlnKVxuXG4vLyBpbXBvcnQgeyBUcmFuc2NyaWJlU3RyZWFtaW5nQ2xpZW50LCBTdGFydFN0cmVhbVRyYW5zY3JpcHRpb25Db21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC10cmFuc2NyaWJlXCI7XG4vLyBpbXBvcnQgeyBUcmFuc2xhdGVDbGllbnQsIFRyYW5zbGF0ZVRleHRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC10cmFuc2xhdGVcIjtcbi8vIGltcG9ydCB7IFNpZ25hdHVyZVY0IH0gZnJvbSBcIkBhd3Mtc2RrL3NpZ25hdHVyZS12NFwiO1xuLy8gaW1wb3J0IHsgU2hhMjU2IH0gZnJvbSBcIkBhd3MtY3J5cHRvL3NoYTI1Ni1qc1wiO1xuLy8gaW1wb3J0IHsgcGFyc2VVcmwgfSBmcm9tIFwiQGF3cy1zZGsvdXJsLXBhcnNlclwiO1xuLy8gaW1wb3J0IHsgYnVpbGRIdHRwUmVxdWVzdCwgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuLy8gaW1wb3J0IHsgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIH0gZnJvbSBcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXJcIjtcbi8vIGltcG9ydCB7IGZyb21VdGY4LCB0b1V0ZjggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11dGY4LW5vZGVcIjsgLy8gT3IgYnJvd3NlciBlcXVpdmFsZW50XG5cbmNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzZXJ2aWNlIHdvcmtlciBzdGFydGluZy4uLlwiKTtcblxuLy8gLS0tIFN0YXRlIC0tLVxubGV0IGlzUnVubmluZyA9IGZhbHNlO1xubGV0IGF3c0NvbmZpZyA9IG51bGw7XG5sZXQgdHJhbnNjcmliZVdlYlNvY2tldCA9IG51bGw7XG5sZXQgdHJhbnNsYXRlQ2xpZW50ID0gbnVsbDsgLy8gQVdTIFRyYW5zbGF0ZSBDbGllbnQgaW5zdGFuY2VcblxuLy8gLS0tIENvbmZpZ3VyYXRpb24gLS0tXG5jb25zdCBUUkFOU0NSSUJFX0xBTkdVQUdFX0NPREUgPSBcImphLUpQXCI7IC8vIEphcGFuZXNlIGZvciBTVFRcbmNvbnN0IFRSQU5TTEFURV9TT1VSQ0VfTEFOR1VBR0UgPSBcImphXCI7IC8vIEphcGFuZXNlIGZvciBUcmFuc2xhdGVcbmNvbnN0IFRSQU5TTEFURV9UQVJHRVRfTEFOR1VBR0UgPSBcInpoXCI7IC8vIENoaW5lc2UgZm9yIFRyYW5zbGF0ZVxuLy8gSU1QT1JUQU5UOiBTYW1wbGUgcmF0ZSBNVVNUIG1hdGNoIHRoZSBhdWRpbyBzb3VyY2UncyBzYW1wbGUgcmF0ZS5cbi8vIENvbW1vbiByYXRlcyBhcmUgODAwMCwgMTYwMDAsIDQ0MTAwLiAxNjAwMCBpcyBnb29kIGZvciBzcGVlY2guXG5jb25zdCBUUkFOU0NSSUJFX1NBTVBMRV9SQVRFID0gMTYwMDA7IC8vIEV4YW1wbGUgc2FtcGxlIHJhdGVcblxuLy8gLS0tIEhlbHBlcjogR2V0IEFXUyBDcmVkZW50aWFscyAtLS1cbmFzeW5jIGZ1bmN0aW9uIGdldEF3c0NyZWRlbnRpYWxzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsnYXdzQWNjZXNzS2V5SWQnLCAnYXdzU2VjcmV0QWNjZXNzS2V5JywgJ2F3c1JlZ2lvbiddLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5hd3NBY2Nlc3NLZXlJZCAmJiBkYXRhLmF3c1NlY3JldEFjY2Vzc0tleSAmJiBkYXRhLmF3c1JlZ2lvbikge1xuICAgICAgICBhd3NDb25maWcgPSB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IGRhdGEuYXdzQWNjZXNzS2V5SWQsXG4gICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBkYXRhLmF3c1NlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgICByZWdpb246IGRhdGEuYXdzUmVnaW9uXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVdTIENyZWRlbnRpYWxzIGxvYWRlZCBmcm9tIHN0b3JhZ2UuXCIpO1xuICAgICAgICByZXNvbHZlKGF3c0NvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJBV1MgQ3JlZGVudGlhbHMgbm90IGZvdW5kIGluIHN0b3JhZ2UuXCIpO1xuICAgICAgICByZWplY3QoXCJDcmVkZW50aWFscyBub3QgY29uZmlndXJlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIC0tLSBBV1MgVHJhbnNjcmliZSBSZWFsLXRpbWUgV2ViU29ja2V0IExvZ2ljIC0tLVxuYXN5bmMgZnVuY3Rpb24gc3RhcnRUcmFuc2NyaWJlV2ViU29ja2V0KGNvbmZpZykge1xuICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29ubmVjdCB0byBBV1MgVHJhbnNjcmliZS4uLlwiKTtcblxuICBjb25zdCBlbmRwb2ludCA9IGB3c3M6Ly90cmFuc2NyaWJlc3RyZWFtaW5nLiR7Y29uZmlnLnJlZ2lvbn0uYW1hem9uYXdzLmNvbTo4NDQzYDtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmRwb2ludCk7XG5cbiAgLy8gLS0tIFNpZ1Y0IFNpZ25pbmcgKFJlcXVpcmVzIEFXUyBTREsgdjMgU2lnVjQsIHByb3RvY29sLWh0dHAsIHVybC1wYXJzZXIsIHNoYTI1NikgLS0tXG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tcGxleCBwYXJ0IG9mIHNldHRpbmcgdXAgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAvLyBZb3UgbmVlZCB0byBzaWduIHRoZSBpbml0aWFsIEhUVFAgR0VUIHJlcXVlc3QgdGhhdCBpbml0aWF0ZXMgdGhlIFdlYlNvY2tldCBoYW5kc2hha2UuXG4gIC8vIFRoZSBzaWduZWQgcmVxdWVzdCdzIGhlYWRlcnMgKGxpa2UgQXV0aG9yaXphdGlvbiwgeC1hbXotZGF0ZSwgeC1hbXotc2VjdXJpdHktdG9rZW4pXG4gIC8vIGFyZSB0eXBpY2FsbHkgaW5jbHVkZWQgYXMgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZmluYWwgV2ViU29ja2V0IFVSTC5cblxuICAvKiBFeGFtcGxlIGNvbmNlcHR1YWwgc2lnbmluZyBwcm9jZXNzOlxuICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmF0dXJlVjQoe1xuICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLnNlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgc2Vzc2lvblRva2VuOiBjb25maWcuc2Vzc2lvblRva2VuLCAvLyBJZiB1c2luZyB0ZW1wb3JhcnkgY3JlZGVudGlhbHNcbiAgICB9LFxuICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbixcbiAgICBzZXJ2aWNlOiAndHJhbnNjcmliZScsXG4gICAgc2hhMjU2OiBTaGEyNTYsIC8vIFJlcXVpcmVzIEBhd3MtY3J5cHRvL3NoYTI1Ni1qc1xuICB9KTtcblxuICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxuICAgICAgcGF0aDogdXJsLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAnbGFuZ3VhZ2UtY29kZSc6IFRSQU5TQ1JJQkVfTEFOR1VBR0VfQ09ERSxcbiAgICAgICAgICAnbWVkaWEtZW5jb2RpbmcnOiAncGNtJywgLy8gT3IgJ29nZy1vcHVzJywgJ2ZsYWMnIC0gTXVzdCBtYXRjaCBhdWRpbyBzb3VyY2UgZm9ybWF0XG4gICAgICAgICAgJ3NhbXBsZS1yYXRlJzogVFJBTlNDUklCRV9TQU1QTEVfUkFURS50b1N0cmluZygpLFxuICAgICAgICAgIC8vIEFkZCBvdGhlciB0cmFuc2NyaWJlIHBhcmFtZXRlcnMgYXMgbmVlZGVkLCBlLmcuLCBzaG93LXNwZWFrZXItbGFiZWwsIGVuYWJsZS1wYXJ0aWFsLXJlc3VsdHMtc3RhYmlsaXphdGlvblxuICAgICAgfSxcbiAgICAgIHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG4gIH0pO1xuXG4gIGNvbnN0IHNpZ25lZFJlcXVlc3QgPSBhd2FpdCBzaWduZXIuc2lnbihyZXF1ZXN0LCB7IHNpZ25pbmdEYXRlOiBuZXcgRGF0ZSgpLCBleHBpcmVzSW46IDMwMCB9KTsgLy8gZXhwaXJlc0luIGluIHNlY29uZHNcblxuICAvLyBCdWlsZCB0aGUgV2ViU29ja2V0IFVSTCB3aXRoIHNpZ25lZCBoZWFkZXJzIGFzIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgbGV0IHNpZ25lZFVybCA9IGB3c3M6Ly8ke3NpZ25lZFJlcXVlc3QuaG9zdG5hbWV9JHtzaWduZWRSZXF1ZXN0LnBhdGh9PyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhzaWduZWRSZXF1ZXN0LnF1ZXJ5KS50b1N0cmluZygpfWA7XG4gIC8vIEFkZCBzaWduZWQgaGVhZGVycyB0byBxdWVyeSBwYXJhbXMgZm9yIFdlYlNvY2tldCBoYW5kc2hha2VcbiAgT2JqZWN0LmVudHJpZXMoc2lnbmVkUmVxdWVzdC5oZWFkZXJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAvLyBLZXlzIGxpa2UgJ0F1dGhvcml6YXRpb24nLCAneC1hbXotZGF0ZScsICd4LWFtei1zZWN1cml0eS10b2tlbidcbiAgICAgICBzaWduZWRVcmwgKz0gYCYke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YDtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiU2lnbmVkIFdlYlNvY2tldCBVUkwgY29uc3RydWN0ZWQgKGNvbmNlcHR1YWwpOlwiLCBzaWduZWRVcmwpO1xuXG4gIHRyYW5zY3JpYmVXZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KHNpZ25lZFVybCk7XG4gICovXG5cbiAgLy8gLS0tIFBsYWNlaG9sZGVyIFdlYlNvY2tldCBTZXR1cCAoV0lUSE9VVCBSRUFMIFNJR1Y0IFNJR05JTkcpIC0tLVxuICAvLyBUaGlzIFdJTEwgTk9UIGF1dGhlbnRpY2F0ZSBjb3JyZWN0bHkgd2l0aCBBV1MgVHJhbnNjcmliZS5cbiAgLy8gSXQncyBoZXJlIGp1c3QgdG8gc2hvdyB0aGUgV2ViU29ja2V0IGV2ZW50IGhhbmRsZXJzLlxuICBjb25zdCBwbGFjZWhvbGRlclVybCA9IGAke2VuZHBvaW50fS8/bGFuZ3VhZ2UtY29kZT0ke1RSQU5TQ1JJQkVfTEFOR1VBR0VfQ09ERX0mbWVkaWEtZW5jb2Rpbmc9cGNtJnNhbXBsZS1yYXRlPSR7VFJBTlNDUklCRV9TQU1QTEVfUkFURX1gO1xuICBjb25zb2xlLndhcm4oXCJVc2luZyBwbGFjZWhvbGRlciBXZWJTb2NrZXQgVVJMIHdpdGhvdXQgcmVhbCBTaWdWNCBzaWduaW5nLiBDb25uZWN0aW9uIHdpbGwgbGlrZWx5IGZhaWwuXCIpO1xuICB0cmFuc2NyaWJlV2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChwbGFjZWhvbGRlclVybCk7XG4gIC8vIC0tLSBFbmQgUGxhY2Vob2xkZXIgLS0tXG5cblxuICAvLyBjb25zdCBldmVudE1hcnNoYWxsZXIgPSBuZXcgRXZlbnRTdHJlYW1NYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpOyAvLyBSZXF1aXJlcyBAYXdzLXNkay9ldmVudHN0cmVhbS1tYXJzaGFsbGVyLCB1dGlsLXV0Zjgtbm9kZVxuXG4gIHRyYW5zY3JpYmVXZWJTb2NrZXQub25vcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUcmFuc2NyaWJlIFdlYlNvY2tldCBvcGVuZWQuXCIpO1xuICAgIC8vIFNlbmQgaW5pdGlhbCBzZXR0aW5ncyBtZXNzYWdlIChyZXF1aXJlZCBieSBUcmFuc2NyaWJlIGV2ZW50IHN0cmVhbSBwcm90b2NvbClcbiAgICAvLyBUaGlzIG1lc3NhZ2UgZm9ybWF0IGlzIHNwZWNpZmljIHRvIFRyYW5zY3JpYmUgZXZlbnQgc3RyZWFtLlxuICAgIC8vIEV4YW1wbGUgKGNvbmNlcHR1YWwsIHJlcXVpcmVzIGV2ZW50c3RyZWFtLW1hcnNoYWxsZXIpOlxuICAgIC8qXG4gICAgY29uc3QgZ3JlZXRpbmdNZXNzYWdlID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnOm1lc3NhZ2UtdHlwZSc6IHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiAnZXZlbnQnIH0sXG4gICAgICAgICAgICAnOmV2ZW50LXR5cGUnOiB7IHR5cGU6ICdzdHJpbmcnLCB2YWx1ZTogJ2NvbmZpZ3VyYXRpb24tZXZlbnQnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIExhbmd1YWdlQ29kZTogVFJBTlNDUklCRV9MQU5HVUFHRV9DT0RFLFxuICAgICAgICAgICAgTWVkaWFFbmNvZGluZzogJ3BjbScsXG4gICAgICAgICAgICBTYW1wbGVSYXRlOiBUUkFOU0NSSUJFX1NBTVBMRV9SQVRFLFxuICAgICAgICAgICAgLy8gQWRkIG90aGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBoZXJlXG4gICAgICAgIH0pLFxuICAgIH07XG4gICAgY29uc3QgYmluYXJ5TWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci5tYXJzaGFsbChncmVldGluZ01lc3NhZ2UpO1xuICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuc2VuZChiaW5hcnlNZXNzYWdlKTtcbiAgICAqL1xuICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBvcGVuZWQuIFJlYWR5IHRvIHJlY2VpdmUgYXVkaW8gZGF0YSAoYW5kIHNlbmQgY29uZmlnIGlmIGltcGxlbWVudGVkKS5cIik7XG4gICAgIC8vIEluZm9ybSBjb250ZW50IHNjcmlwdCB0aGF0IEFXUyBpcyByZWFkeSB0byByZWNlaXZlIGF1ZGlvIChvcHRpb25hbClcbiAgICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzKSA9PiB7XG4gICAgICAgaWYgKHRhYnNbMF0pIHtcbiAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHsgYWN0aW9uOiBcImF3c1JlYWR5XCIgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBhd3NSZWFkeSB0byB0YWI6XCIsIGUpKTtcbiAgICAgICB9XG4gICAgIH0pO1xuICB9O1xuXG4gIHRyYW5zY3JpYmVXZWJTb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gKioqIFBhcnNlIHRoZSBpbmNvbWluZyBldmVudCBzdHJlYW0gbWVzc2FnZSBmcm9tIFRyYW5zY3JpYmUgKioqXG4gICAgLy8gZXZlbnQuZGF0YSB3aWxsIGJlIGEgYmluYXJ5IEJsb2Igb3IgQXJyYXlCdWZmZXIuXG4gICAgLy8gWW91IG5lZWQgdG8gdW5tYXJzaGFsbCBpdCB1c2luZyBFdmVudFN0cmVhbU1hcnNoYWxsZXIuXG4gICAgLy8gRXhhbXBsZSAoY29uY2VwdHVhbCwgcmVxdWlyZXMgZXZlbnRzdHJlYW0tbWFyc2hhbGxlciwgdXRpbC11dGY4LW5vZGUpOlxuICAgIC8qXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmxvYiA9IGV2ZW50LmRhdGE7XG4gICAgICAgIC8vIFJlYWQgYmxvYiBhcyBBcnJheUJ1ZmZlclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci51bm1hcnNoYWxsKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7IC8vIFVzZSBVaW50OEFycmF5IG9yIEJ1ZmZlclxuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IG1lc3NhZ2UuaGVhZGVyc1snOm1lc3NhZ2UtdHlwZSddPy52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IG1lc3NhZ2UuaGVhZGVyc1snOmV2ZW50LXR5cGUnXT8udmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gJ2V2ZW50JyAmJiBldmVudFR5cGUgPT09ICd0cmFuc2NyaXB0LWV2ZW50Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VCb2R5ID0gSlNPTi5wYXJzZShtZXNzYWdlLmJvZHkpOyAvLyBNZXNzYWdlIGJvZHkgaXMgSlNPTlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBtZXNzYWdlQm9keS5UcmFuc2NyaXB0Py5SZXN1bHRzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgcmVzdWx0cy4gVHJhbnNjcmliZSBjYW4gcmV0dXJuIG11bHRpcGxlIHJlc3VsdHMvYWx0ZXJuYXRpdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBXZSB1c3VhbGx5IGNhcmUgYWJvdXQgdGhlIGZpcnN0IHJlc3VsdCBhbmQgaXRzIGZpcnN0IGFsdGVybmF0aXZlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZSA9IHJlc3VsdC5BbHRlcm5hdGl2ZXM/LlswXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpdmUgJiYgYWx0ZXJuYXRpdmUuVHJhbnNjcmlwdCAmJiBhbHRlcm5hdGl2ZS5UcmFuc2NyaXB0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gYWx0ZXJuYXRpdmUuVHJhbnNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3VsdC5Jc1BhcnRpYWwgdGVsbHMgeW91IGlmIHRoaXMgaXMgYSBmaW5hbCBzZWdtZW50IG9yIGFuIGludGVybWVkaWF0ZSBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFydGlhbCA9IHJlc3VsdC5Jc1BhcnRpYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNQYXJ0aWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR290IGEgZmluYWwgdHJhbnNjcmlwdCBzZWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaW5hbCBKYXBhbmVzZTpcIiwgdHJhbnNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqIENBTEwgVFJBTlNMQVRFIEhFUkUgKioqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlVGV4dCh0cmFuc2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR290IGEgcGFydGlhbCB0cmFuc2NyaXB0IChvcHRpb25hbCB0byBkaXNwbGF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGFydGlhbCBKYXBhbmVzZTpcIiwgdHJhbnNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNvdWxkIHNlbmQgcGFydGlhbCByZXN1bHRzIHRvIGNvbnRlbnQgc2NyaXB0IGZvciByZWFsLXRpbWUgZGlzcGxheSBhcyB1c2VyIHNwZWFrc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdCh0cmFuc2NyaXB0LCBcIi4uLlwiKTsgLy8gU2hvdyBwYXJ0aWFsIEpQLCBwZW5kaW5nIHRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VUeXBlID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlQm9keSA9IEpTT04ucGFyc2UobWVzc2FnZS5ib2R5KTtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRyYW5zY3JpYmUgRXhjZXB0aW9uOlwiLCBtZXNzYWdlQm9keS5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KFwiXCIsIGBbU1RU5Ye66ZSZOiAke21lc3NhZ2VCb2R5Lk1lc3NhZ2V9XWApO1xuICAgICAgICAgICAgICAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBTdG9wIG9uIGVycm9yXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHVua25vd24gV2ViU29ja2V0IG1lc3NhZ2UgdHlwZTpcIiwgbWVzc2FnZVR5cGUsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIFRyYW5zY3JpYmUgV2ViU29ja2V0IG1lc3NhZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KFwiXCIsIGBb5aSE55CGU1RU57uT5p6c5Ye66ZSZOiAke2Vycm9yLm1lc3NhZ2V9XWApO1xuICAgICAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBTdG9wIG9uIGVycm9yXG4gICAgfVxuICAgICovXG5cbiAgICAvLyAtLS0gUGxhY2Vob2xkZXI6IFNpbXVsYXRlIHJlY2VpdmluZyBhIGZpbmFsIHRyYW5zY3JpcHQgYWZ0ZXIgYSBkZWxheSAtLS1cbiAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIFdlYlNvY2tldCBtZXNzYWdlIChwbGFjZWhvbGRlcikuIFNpbXVsYXRpbmcgdHJhbnNjcmlwdCByZXN1bHQuXCIpO1xuICAgIC8vIEluIGEgcmVhbCBzY2VuYXJpbywgcGFyc2UgZXZlbnQuZGF0YSBhbmQgY2FsbCB0cmFuc2xhdGVUZXh0KHBhcnNlZEphcGFuZXNlVGV4dCk7XG4gICAgLy8gRm9yIG5vdywgbGV0J3Mgc2ltdWxhdGUgcmVjZWl2aW5nIHRleHQgYW5kIHRyaWdnZXJpbmcgdHJhbnNsYXRpb24gYWZ0ZXIgYSBzaG9ydCBkZWxheS5cbiAgICAvLyBUaGlzIHNpbXVsYXRpb24gcmVwbGFjZXMgdGhlIGFjdHVhbCBtZXNzYWdlIHBhcnNpbmcgbG9naWMgYWJvdmUuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgY29uc3Qgc2ltdWxhdGVkSmFwYW5lc2VUZXh0ID0gXCLjgZPjgpPjgavjgaHjga/jgIHjgZPjgozjga/jg4bjgrnjg4jjgafjgZnjgILjg6rjgqLjg6vjgr/jgqTjg6Djgafnv7voqLPjgZXjgozjgb7jgZnjgIJcIjsgLy8gRXhhbXBsZSBKYXBhbmVzZSB0ZXh0XG4gICAgICAgY29uc29sZS5sb2coXCJTaW11bGF0ZWQgRmluYWwgSmFwYW5lc2U6XCIsIHNpbXVsYXRlZEphcGFuZXNlVGV4dCk7XG4gICAgICAgdHJhbnNsYXRlVGV4dChzaW11bGF0ZWRKYXBhbmVzZVRleHQpOyAvLyBDYWxsIHRyYW5zbGF0ZVxuICAgIH0sIDUwMCk7IC8vIFNpbXVsYXRlIHByb2Nlc3NpbmcgZGVsYXlcbiAgICAvLyAtLS0gRW5kIFBsYWNlaG9sZGVyIFNpbXVsYXRpb24gLS0tXG4gIH07XG5cbiAgdHJhbnNjcmliZVdlYlNvY2tldC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIlRyYW5zY3JpYmUgV2ViU29ja2V0IGVycm9yOlwiLCBldmVudCk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXZlbnQ/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gV2ViU29ja2V0IGVycm9yJztcbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgYFtTVFTov57mjqXlh7rplJk6ICR7ZXJyb3JNZXNzYWdlfV1gKTtcbiAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBFbnN1cmUgc3RhdGUgaXMgcmVzZXRcbiAgICAvLyBJbmZvcm0gY29udGVudCBzY3JpcHQvcG9wdXAgYWJvdXQgdGhlIGVycm9yXG4gIH07XG5cbiAgdHJhbnNjcmliZVdlYlNvY2tldC5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUcmFuc2NyaWJlIFdlYlNvY2tldCBjbG9zZWQ6XCIsIGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbik7XG4gICAgaWYgKGlzUnVubmluZykgeyAvLyBJZiBpdCBjbG9zZWQgdW5leHBlY3RlZGx5IHdoaWxlIHJ1bm5pbmdcbiAgICAgICBjb25zb2xlLmVycm9yKFwiV2ViU29ja2V0IGNsb3NlZCB1bmV4cGVjdGVkbHksIGF0dGVtcHRpbmcgdG8gc3RvcC5cIik7XG4gICAgICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KFwiXCIsIFwiW1NUVOi/nuaOpeaEj+WkluWFs+mXrV1cIik7XG4gICAgICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gRW5zdXJlIHN0YXRlIGlzIHJlc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBjbG9zZWQgZ3JhY2VmdWxseS5cIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgV2ViU29ja2V0IGluc3RhbmNlIHNvIHRoZSBjYWxsZXIga25vd3MgaXQgd2FzIGNyZWF0ZWQgKGV2ZW4gaWYgbm90IGZ1bGx5IG9wZW4geWV0KVxuICByZXR1cm4gdHJhbnNjcmliZVdlYlNvY2tldDtcbn1cblxuZnVuY3Rpb24gc3RvcFRyYW5zY3JpYmVXZWJTb2NrZXQoKSB7XG4gIGlmICh0cmFuc2NyaWJlV2ViU29ja2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJDbG9zaW5nIFRyYW5zY3JpYmUgV2ViU29ja2V0Li4uXCIpO1xuICAgIC8vIFVzZSBjb2RlIDEwMDAgZm9yIG5vcm1hbCBjbG9zdXJlXG4gICAgdHJhbnNjcmliZVdlYlNvY2tldC5jbG9zZSgxMDAwLCBcIkNsaWVudCBzdG9wcGluZ1wiKTtcbiAgICB0cmFuc2NyaWJlV2ViU29ja2V0ID0gbnVsbDtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBzZW5kIGF1ZGlvIGNodW5rcyAoY2FsbGVkIGJ5IGNvbnRlbnQgc2NyaXB0IG9yIGF1ZGlvIHNvdXJjZSlcbi8vIFRoZSBjaHVuayBzaG91bGQgYmUgYW4gQXJyYXlCdWZmZXIgY29udGFpbmluZyByYXcgYXVkaW8gZGF0YSAoZS5nLiwgUENNLCAxNi1iaXQsIG1vbm8pXG5mdW5jdGlvbiBzZW5kQXVkaW9DaHVua1RvVHJhbnNjcmliZShjaHVuaykge1xuICAgIGlmICh0cmFuc2NyaWJlV2ViU29ja2V0ICYmIHRyYW5zY3JpYmVXZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgLy8gKioqIFNlbmQgdGhlIGF1ZGlvIGNodW5rIGFzIGEgYmluYXJ5IG1lc3NhZ2UgKioqXG4gICAgICAgIC8vIFRoaXMgaW52b2x2ZXMgY3JlYXRpbmcgYW4gRXZlbnRTdHJlYW0gbWVzc2FnZSBvZiB0eXBlICdBdWRpb0V2ZW50J1xuICAgICAgICAvLyB3aXRoIHRoZSBjaHVuayBhcyB0aGUgYm9keSwgYW5kIG1hcnNoYWxsaW5nIGl0IGludG8gYSBiaW5hcnkgZnJhbWUuXG4gICAgICAgIC8vIFJlcXVpcmVzIGV2ZW50c3RyZWFtLW1hcnNoYWxsZXIuXG4gICAgICAgIC8qXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0V2ZW50TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICc6bWVzc2FnZS10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdldmVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJzpldmVudC10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdBdWRpb0V2ZW50JyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogY2h1bmssIC8vIEFycmF5QnVmZmVyIG9yIEJ1ZmZlciBjb250YWluaW5nIGF1ZGlvIGRhdGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBiaW5hcnlNZXNzYWdlID0gZXZlbnRNYXJzaGFsbGVyLm1hcnNoYWxsKGF1ZGlvRXZlbnRNZXNzYWdlKTtcbiAgICAgICAgICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuc2VuZChiaW5hcnlNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VudCBhdWRpbyBjaHVuay4gU2l6ZTpcIiwgY2h1bmsuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFyc2hhbGxpbmcvc2VuZGluZyBhdWRpbyBjaHVuazpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgLy8gRGVjaWRlIGhvdyB0byBoYW5kbGUgc2VuZCBlcnJvcnMgLSBtYXliZSBzdG9wIG9yIGxvZ1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgYW5kIHdvdWxkIHNlbmQgYXVkaW8gY2h1bmsgKHByb2Nlc3NpbmcgZGlzYWJsZWQgaW4gZXhhbXBsZSkuIFNpemU6XCIsIGNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICAvLyBJbiBhIHJlYWwgc2NlbmFyaW8sIHVuY29tbWVudCB0aGUgdHJ5L2NhdGNoIGJsb2NrIGFib3ZlLlxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihcIldlYlNvY2tldCBub3Qgb3BlbiwgY2Fubm90IHNlbmQgYXVkaW8gY2h1bmsuXCIpO1xuICAgICAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBXUyBpcyBub3QgcmVhZHkgLSBidWZmZXIgY2h1bmtzPyBEcm9wIHRoZW0/XG4gICAgfVxufVxuXG5cbi8vIC0tLSBBV1MgVHJhbnNsYXRlIExvZ2ljIC0tLVxuYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dChqYXBhbmVzZVRleHQpIHtcbiAgaWYgKCFhd3NDb25maWcgfHwgIXRyYW5zbGF0ZUNsaWVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBV1MgY29uZmlnIG9yIFRyYW5zbGF0ZUNsaWVudCBub3QgbG9hZGVkIGZvciB0cmFuc2xhdGlvbi5cIik7XG4gICAgLy8gRXZlbiBpZiB0cmFuc2xhdGlvbiBmYWlscywgdHJ5IHRvIGRpc3BsYXkgdGhlIEphcGFuZXNlIHRleHRcbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoamFwYW5lc2VUZXh0LCBcIlvnv7vor5HmnI3liqHmnKrlkK/liqjmiJblh7rplJldXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghamFwYW5lc2VUZXh0IHx8IGphcGFuZXNlVGV4dC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIG1lYW5pbmdmdWwgdGV4dCB0byB0cmFuc2xhdGUuXCIpO1xuICAgICAgLy8gSWYgVHJhbnNjcmliZSBzZW5kcyBlbXB0eSBvciB3aGl0ZXNwYWNlIHJlc3VsdCwgbWF5YmUgY2xlYXIgc3VidGl0bGVzIG9yIHNob3cgb25seSBwcmV2aW91cz9cbiAgICAgIC8vIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBcIlwiKTsgLy8gRXhhbXBsZTogQ2xlYXIgc3VidGl0bGVzXG4gICAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIlRyYW5zbGF0aW5nOlwiLCBqYXBhbmVzZVRleHQpO1xuXG4gIHRyeSB7XG4gICAgLy8gKioqIENhbGwgVHJhbnNsYXRlIEFQSSAoUmVxdWlyZXMgQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZSkgKioqXG4gICAgLypcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IFRyYW5zbGF0ZVRleHRDb21tYW5kKHtcbiAgICAgIFRleHQ6IGphcGFuZXNlVGV4dCxcbiAgICAgIFNvdXJjZUxhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1NPVVJDRV9MQU5HVUFHRSxcbiAgICAgIFRhcmdldExhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1RBUkdFVF9MQU5HVUFHRSxcbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRyYW5zbGF0ZUNsaWVudC5zZW5kKGNvbW1hbmQpO1xuICAgIGNvbnN0IGNoaW5lc2VUZXh0ID0gcmVzcG9uc2UuVHJhbnNsYXRlZFRleHQ7XG4gICAgKi9cblxuICAgIC8vIC0tLSBQbGFjZWhvbGRlcjogU2ltdWxhdGUgdHJhbnNsYXRpb24gZGVsYXkgYW5kIHJlc3VsdCAtLS1cbiAgICBjb25zdCBjaGluZXNlVGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoYFvnv7vor5E6ICR7amFwYW5lc2VUZXh0fV1gKTsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCB0cmFuc2xhdGlvbiByZXN1bHQgZnJvbSBBV1NcbiAgICAgICAgfSwgMjAwKTsgLy8gU2ltdWxhdGUgbmV0d29yayBsYXRlbmN5IGZvciB0cmFuc2xhdGlvblxuICAgIH0pO1xuICAgIC8vIC0tLSBFbmQgUGxhY2Vob2xkZXIgLS0tXG5cblxuICAgIGNvbnNvbGUubG9nKFwiVHJhbnNsYXRlZDpcIiwgY2hpbmVzZVRleHQpO1xuXG4gICAgLy8gU2VuZCBib3RoIG9yaWdpbmFsIGFuZCB0cmFuc2xhdGVkIHRleHQgdG8gY29udGVudCBzY3JpcHRcbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoamFwYW5lc2VUZXh0LCBjaGluZXNlVGV4dCk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHJhbnNsYXRpbmcgdGV4dDpcIiwgZXJyb3IpO1xuICAgIC8vIEluZm9ybSBjb250ZW50IHNjcmlwdC91c2VyIGFib3V0IHRoZSB0cmFuc2xhdGlvbiBlcnJvciwgZGlzcGxheSBKYXBhbmVzZSB0ZXh0IGlmIHBvc3NpYmxlXG4gICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgYFvnv7vor5Hlh7rplJk6ICR7ZXJyb3IubWVzc2FnZX1dYCk7XG4gIH1cbn1cblxuLy8gSGVscGVyIHRvIHNlbmQgc3VidGl0bGUgdXBkYXRlIG1lc3NhZ2UgdG8gYWN0aXZlIHRhYlxuZnVuY3Rpb24gdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgY2hpbmVzZVRleHQpIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICAgIGlmICh0YWJzWzBdICYmIHRhYnNbMF0uaWQpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgICAgICAgIGFjdGlvbjogXCJ1cGRhdGVTdWJ0aXRsZXNcIixcbiAgICAgICAgICBqYXBhbmVzZTogamFwYW5lc2VUZXh0LFxuICAgICAgICAgIGNoaW5lc2U6IGNoaW5lc2VUZXh0XG4gICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgdXBkYXRlU3VidGl0bGVzIG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgYWN0aXZlIHRhYiB0byBzZW5kIHN1YnRpdGxlIHVwZGF0ZS5cIik7XG4gICAgICB9XG4gICAgfSk7XG59XG5cblxuLy8gLS0tIE1haW4gQ29udHJvbCBGdW5jdGlvbnMgLS0tXG5hc3luYyBmdW5jdGlvbiBzdGFydFByb2Nlc3NpbmcoKSB7XG4gIGlmIChpc1J1bm5pbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgcnVubmluZy5cIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFscmVhZHkgcnVubmluZ1wiIH07XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gc3RhcnQgcHJvY2Vzc2luZy4uLlwiKTtcblxuICB0cnkge1xuICAgIC8vIDEuIEdldCBBV1MgQ3JlZGVudGlhbHNcbiAgICBhd3NDb25maWcgPSBhd2FpdCBnZXRBd3NDcmVkZW50aWFscygpO1xuICAgIGNvbnNvbGUubG9nKFwiQVdTIENvbmZpZyBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcblxuICAgIC8vIDIuIEluaXRpYWxpemUgQVdTIFRyYW5zbGF0ZSBDbGllbnRcbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbml0aWFsaXplZCBvbmNlIHdoZW4gc3RhcnRpbmcuXG4gICAgLy8gdHJhbnNsYXRlQ2xpZW50ID0gbmV3IFRyYW5zbGF0ZUNsaWVudCh7IC8vIFJlcXVpcmVzIEBhd3Mtc2RrL2NsaWVudC10cmFuc2xhdGVcbiAgICAvLyAgICByZWdpb246IGF3c0NvbmZpZy5yZWdpb24sXG4gICAgLy8gICAgY3JlZGVudGlhbHM6IHtcbiAgICAvLyAgICAgICAgYWNjZXNzS2V5SWQ6IGF3c0NvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAvLyAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBhd3NDb25maWcuc2VjcmV0QWNjZXNzS2V5LFxuICAgIC8vICAgICAgICAvLyBzZXNzaW9uVG9rZW46IGF3c0NvbmZpZy5zZXNzaW9uVG9rZW4sIC8vIElmIHVzaW5nIHRlbXBvcmFyeSBjcmVkZW50aWFsc1xuICAgIC8vICAgIH1cbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLndhcm4oXCJUcmFuc2xhdGVDbGllbnQgaW5pdGlhbGl6YXRpb24gcGxhY2Vob2xkZXIuXCIpOyAvLyBQbGFjZWhvbGRlclxuXG4gICAgLy8gMy4gU3RhcnQgQVdTIFRyYW5zY3JpYmUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAvLyBUaGlzIGlzIGFzeW5jIGFuZCBuZWVkcyB0byBoYW5kbGUgY29ubmVjdGlvbiBsaWZlY3ljbGUuXG4gICAgLy8gVGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIFdTIGluc3RhbmNlLCBidXQgd2UgbWFpbmx5IHJlbHkgb24gaXRzIGV2ZW50IGhhbmRsZXJzLlxuICAgIGF3YWl0IHN0YXJ0VHJhbnNjcmliZVdlYlNvY2tldChhd3NDb25maWcpO1xuICAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmliZSBXZWJTb2NrZXQgc2V0dXAgaW5pdGlhdGVkLlwiKTtcblxuXG4gICAgLy8gNC4gSW5mb3JtIGNvbnRlbnQgc2NyaXB0IHRvIHN0YXJ0IHN1YnRpdGxlIGRpc3BsYXkgYW5kIChhdHRlbXB0KSBhdWRpbyBjYXB0dXJlXG4gICAgY29uc3QgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSk7XG4gICAgaWYgKHRhYiAmJiB0YWIuaWQpIHtcbiAgICAgICAgLy8gVXNlIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCB0byBlbnN1cmUgY29udGVudCBzY3JpcHQgaXMgaW5qZWN0ZWQgYW5kIHJlYWR5XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHN0YW5kYXJkIE1hbmlmZXN0IFYzIHdheSB0byBpbnRlcmFjdCB3aXRoIGNvbnRlbnQgc2NyaXB0c1xuICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgICAgICAgIGZpbGVzOiBbJ2NvbnRlbnQuanMnXSwgLy8gSW5qZWN0IGNvbnRlbnQuanMgaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICAgICAgfSk7XG4gICAgICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYi5pZCB9LFxuICAgICAgICAgICAgZmlsZXM6IFsnc3VidGl0bGUuY3NzJ10sIC8vIEluamVjdCBDU1MgaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2VuZCB0aGUgc3RhcnQgc2lnbmFsIHRvIHRoZSBjb250ZW50IHNjcmlwdCAqYWZ0ZXIqIGVuc3VyaW5nIGl0J3MgaW5qZWN0ZWRcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7IGFjdGlvbjogXCJzdGFydENvbnRlbnRTY3JpcHRcIiB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW50IHN0YXJ0IHNpZ25hbCB0byBjb250ZW50IHNjcmlwdC5cIik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gYWN0aXZlIHRhYiBmb3VuZCBvciB0YWIgSUQgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIHN0b3BQcm9jZXNzaW5nKCk7IC8vIENsZWFuIHVwIGlmIG5vIHRhYlxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiTm8gYWN0aXZlIHRhYiBmb3VuZFwiIH07XG4gICAgfVxuXG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3Npbmcgc3RhcnRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc3RhcnQgcHJvY2Vzc2luZzpcIiwgZXJyb3IpO1xuICAgIC8vIEVuc3VyZSBjbGVhbnVwIGhhcHBlbnMgaWYgc3RhcnQgZmFpbHNcbiAgICBzdG9wUHJvY2Vzc2luZygpO1xuICAgIC8vIFByb3ZpZGUgYSB1c2VyLWZyaWVuZGx5IGVycm9yIG1lc3NhZ2VcbiAgICBsZXQgdXNlckVycm9yID0gXCJVbmtub3duIGVycm9yIGR1cmluZyBzdGFydC5cIjtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB1c2VyRXJyb3IgPSBlcnJvcjsgLy8gRS5nLiwgXCJDcmVkZW50aWFscyBub3QgY29uZmlndXJlZFwiXG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHVzZXJFcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfVxuICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WQr+WKqOWksei0pTogJHt1c2VyRXJyb3J9XWApOyAvLyBTaG93IGVycm9yIGluIHN1YnRpdGxlc1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXNlckVycm9yIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb2Nlc3NpbmcoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJOb3QgcnVubmluZy5cIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk5vdCBydW5uaW5nXCIgfTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiU3RvcHBpbmcgcHJvY2Vzc2luZy4uLlwiKTtcblxuICAvLyAxLiBTdG9wIEFXUyBUcmFuc2NyaWJlIFdlYlNvY2tldFxuICBzdG9wVHJhbnNjcmliZVdlYlNvY2tldCgpO1xuXG4gIC8vIDIuIEluZm9ybSBjb250ZW50IHNjcmlwdCB0byByZW1vdmUgc3VidGl0bGVzIGFuZCBzdG9wIGF1ZGlvIGNhcHR1cmVcbiAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzKSA9PiB7XG4gICAgaWYgKHRhYnNbMF0gJiYgdGFic1swXS5pZCkge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwgeyBhY3Rpb246IFwic3RvcENvbnRlbnRTY3JpcHRcIiB9KVxuICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBzdG9wQ29udGVudFNjcmlwdCBtZXNzYWdlOlwiLCBlKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlbnQgc3RvcCBzaWduYWwgdG8gY29udGVudCBzY3JpcHQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGFjdGl2ZSB0YWIgdG8gc2VuZCBzdG9wIHNpZ25hbC5cIik7XG4gICAgfVxuICB9KTtcblxuICAvLyAzLiBSZXNldCBzdGF0ZVxuICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgYXdzQ29uZmlnID0gbnVsbDsgLy8gQ2xlYXIgY3JlZGVudGlhbHMgZnJvbSBtZW1vcnkgKGJlc3QgZWZmb3J0KVxuICB0cmFuc2xhdGVDbGllbnQgPSBudWxsOyAvLyBDbGVhciBjbGllbnQgaW5zdGFuY2VcbiAgY29uc29sZS5sb2coXCJQcm9jZXNzaW5nIHN0b3BwZWQuXCIpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLy8gLS0tIE1lc3NhZ2UgTGlzdGVuZXIgZnJvbSBQb3B1cC9Db250ZW50IFNjcmlwdCAtLS1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIHJlY2VpdmVkIG1lc3NhZ2U6XCIsIHJlcXVlc3QuYWN0aW9uLCBzZW5kZXIudGFiID8gXCJmcm9tIGNvbnRlbnQgc2NyaXB0IGluIHRhYiBcIiArIHNlbmRlci50YWIuaWQgOiBcImZyb20gcG9wdXAvb3RoZXJcIik7XG5cbiAgLy8gSGFuZGxlIG1lc3NhZ2VzIGZyb20gcG9wdXAgb3IgY29udGVudCBzY3JpcHRcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcInN0YXJ0XCIpIHtcbiAgICAvLyBTdGFydCB0aGUgd2hvbGUgcHJvY2Vzc1xuICAgIHN0YXJ0UHJvY2Vzc2luZygpLnRoZW4oc2VuZFJlc3BvbnNlKTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGUgYXN5bmMgcmVzcG9uc2VcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdG9wXCIpIHtcbiAgICAvLyBTdG9wIHRoZSB3aG9sZSBwcm9jZXNzXG4gICAgc2VuZFJlc3BvbnNlKHN0b3BQcm9jZXNzaW5nKCkpO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImdldFN0YXR1c1wiKSB7XG4gICAgLy8gUmVwb3J0IGN1cnJlbnQgcnVubmluZyBzdGF0dXMgKHVzZWQgYnkgcG9wdXApXG4gICAgc2VuZFJlc3BvbnNlKHsgaXNSdW5uaW5nOiBpc1J1bm5pbmcgfSk7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiYXVkaW9DaHVua1wiKSB7XG4gICAgLy8gUmVjZWl2ZWQgYXVkaW8gZGF0YSBmcm9tIGNvbnRlbnQgc2NyaXB0IChpZiBhdWRpbyBjYXB0dXJlIGlzIGltcGxlbWVudGVkIHRoZXJlKVxuICAgIC8vIFRoaXMgY2h1bmsgbmVlZHMgdG8gYmUgc2VudCB0byB0aGUgVHJhbnNjcmliZSBXZWJTb2NrZXRcbiAgICAvLyBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGF1ZGlvIGNodW5rIGZyb20gY29udGVudCBzY3JpcHQuIFNpemU6XCIsIHJlcXVlc3QuY2h1bms/LmJ5dGVMZW5ndGgpO1xuICAgIGlmIChyZXF1ZXN0LmNodW5rKSB7XG4gICAgICAgIC8vIE5vdGU6IHJlcXVlc3QuY2h1bmsgaXMgbGlrZWx5IGFuIEFycmF5QnVmZmVyIG9yIEJsb2IgZGVwZW5kaW5nIG9uIGhvdyBjb250ZW50IHNjcmlwdCBzZW5kcyBpdC5cbiAgICAgICAgLy8gc2VuZEF1ZGlvQ2h1bmtUb1RyYW5zY3JpYmUocmVxdWVzdC5jaHVuayk7IC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIHNlbmQgdG8gV1NcbiAgICAgICAgLy8gUGxhY2Vob2xkZXI6IEp1c3QgYWNrbm93bGVkZ2UgcmVjZWlwdCB3aXRob3V0IHNlbmRpbmdcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTsgLy8gVW5jb21tZW50IGlmIHNlbmRBdWRpb0NodW5rVG9UcmFuc2NyaWJlIGlzIGFzeW5jXG4gICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIGF1ZGlvQ2h1bmsgbWVzc2FnZSB3aXRoIG5vIGNodW5rIGRhdGEuXCIpO1xuICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk5vIGF1ZGlvIGRhdGEgcmVjZWl2ZWRcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiYXVkaW9DYXB0dXJlRXJyb3JcIikge1xuICAgICAvLyBSZWNlaXZlZCBlcnJvciBtZXNzYWdlIGZyb20gY29udGVudCBzY3JpcHQgcmVnYXJkaW5nIGF1ZGlvIGNhcHR1cmVcbiAgICAgY29uc29sZS5lcnJvcihcIkF1ZGlvIGNhcHR1cmUgZmFpbGVkIGluIGNvbnRlbnQgc2NyaXB0OlwiLCByZXF1ZXN0LmVycm9yKTtcbiAgICAgLy8gT3B0aW9uYWxseSBzdG9wIHByb2Nlc3Npbmcgb3Igc2hvdyBhIG5vdGlmaWNhdGlvblxuICAgICAvLyBzdG9wUHJvY2Vzc2luZygpO1xuICAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgYFvpn7PpopHmjZXojrflpLHotKU6ICR7cmVxdWVzdC5lcnJvcn1dYCk7IC8vIEluZm9ybSB1c2VyIHZpYSBzdWJ0aXRsZXNcbiAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICB9XG4gIC8vIEFkZCBvdGhlciBtZXNzYWdlIGhhbmRsZXJzIGlmIG5lZWRlZCAoZS5nLiwgZm9yIGVycm9ycyBmcm9tIGNvbnRlbnQgc2NyaXB0KVxufSk7XG5cbi8vIC0tLSBJbml0aWFsIHN0YXRlIGNoZWNrIChvcHRpb25hbCkgLS0tXG4vLyBTZXJ2aWNlIHdvcmtlcnMgYXJlIGV2ZW50LWRyaXZlbiBhbmQgY2FuIGJlIHRlcm1pbmF0ZWQgd2hlbiBpZGxlLlxuLy8gU3RhdGUgbGlrZSBgaXNSdW5uaW5nYCBpcyBub3QgYXV0b21hdGljYWxseSBwZXJzaXN0ZW50LlxuLy8gV2hlbiB0aGUgc2VydmljZSB3b3JrZXIgc3RhcnRzLCBgaXNSdW5uaW5nYCBpcyBmYWxzZS5cbi8vIElmIHlvdSBuZWVkIHRvIHJlc3RvcmUgc3RhdGUgKGUuZy4sIHJlc3RhcnQgcHJvY2Vzc2luZyBpZiBpdCB3YXMgYWN0aXZlKSxcbi8vIHlvdSB3b3VsZCBuZWVkIHRvIHNhdmUgc3RhdGUgdG8gY2hyb21lLnN0b3JhZ2UgYW5kIGNoZWNrIGl0IG9uIHN0YXJ0dXAuXG4vLyBGb3IgdGhpcyBleGFtcGxlLCB3ZSBzdGFydCBmcmVzaCB3aGVuIHRoZSBwb3B1cCBidXR0b24gaXMgY2xpY2tlZC5cbmNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzZXJ2aWNlIHdvcmtlciBpbml0aWFsaXplZC4gU3RhdGU6IElkbGUuXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
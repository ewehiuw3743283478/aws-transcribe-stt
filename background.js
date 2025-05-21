// background.js

// --- AWS SDK Imports ---
// These imports are necessary for SigV4 signing, Event Stream marshalling/unmarshalling,
// and the Translate Client. Ensure your bundler (Webpack) resolves these correctly.
import { TranscribeStreamingClient } from "@aws-sdk/client-transcribe"; // Keep for potential type hints or future use
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser";
import { HttpRequest } from "@aws-sdk/protocol-http"; // Ensure HttpRequest is imported correctly
import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node"; // Provided by polyfill/bundler

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeWebSocket = null;
let translateClient = null; // AWS Translate Client instance
let currentTabId = null; // Keep track of the tab where processing is active
let eventMarshaller = null; // Declare eventMarshaller here to be accessible in start and send functions

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP"; // Japanese for STT
const TRANSLATE_SOURCE_LANGUAGE = "ja"; // Japanese for Translate
const TRANSLATE_TARGET_LANGUAGE = "zh"; // Chinese for Translate
const AUDIO_CHUNK_SAMPLE_RATE = 16000;
const TRANSCRIBE_SERVICE_NAME = 'transcribe';

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
    },
    region: config.region,
    service: TRANSCRIBE_SERVICE_NAME,
    sha256: Sha256,
  });

  const requestToSign = new HttpRequest({
      method: 'GET',
      hostname: parsedEndpointUrl.hostname,
      path: '/stream-transcription-websocket',
      protocol: parsedEndpointUrl.protocol,
      headers: {
          'Host': parsedEndpointUrl.hostname
      },
      query: {
          'language-code': TRANSCRIBE_LANGUAGE_CODE,
          'media-encoding': 'pcm',
          'sample-rate': AUDIO_CHUNK_SAMPLE_RATE.toString(),
      }
  });

  // Use signer.presign() for generating presigned URL query parameters
  const signedRequest = await signer.presign(requestToSign, {
       expiresIn: 300, // Expires in 5 minutes
  });

  const queryString = new URLSearchParams(signedRequest.query).toString();
  const signedUrl = `wss://${signedRequest.hostname}${signedRequest.path}?${queryString}`;

  console.log("Signed WebSocket URL constructed using presign():");
  console.log("Full Signed URL (for debugging):", signedUrl);
  // console.log("Signed Request Query Parameters:", signedRequest.query);
  // console.log("Signed Request Headers:", signedRequest.headers);


  transcribeWebSocket = new WebSocket(signedUrl);

  // Initialize eventMarshaller here
  eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened successfully.");
    try {
        const greetingMessage = {
            headers: {
                ':message-type': { type: 'string', value: 'event' },
                ':event-type': { type: 'string', value: 'configuration-event' },
            },
            body: JSON.stringify({
                LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
                MediaEncoding: 'pcm',
                SampleRate: AUDIO_CHUNK_SAMPLE_RATE,
            }),
        };
        const binaryMessage = eventMarshaller.marshall(greetingMessage);
        transcribeWebSocket.send(binaryMessage);
        console.log("Sent Transcribe configuration message.");
    } catch (error) {
        console.error("Error sending Transcribe configuration message:", error);
        updateSubtitlesInContentScript("", `[STT配置出错: ${error.message}]`);
        if (isRunning) stopProcessing(); // Ensure stopProcessing is called if it's running
    }
     if (currentTabId) {
         chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e));
     }
  };

  transcribeWebSocket.onmessage = (event) => {
    try {
        const blob = event.data;
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            if (!eventMarshaller) {
                console.error("eventMarshaller not initialized for onmessage.");
                return;
            }
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
                        if (!result.IsPartial) {
                            console.log("Final Japanese:", transcript);
                            translateText(transcript);
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const messageBody = JSON.parse(message.body);
                 console.error("Transcribe Exception:", messageBody.Message);
                 updateSubtitlesInContentScript("", `[STT出错: ${messageBody.Message}]`);
                 if (isRunning) stopProcessing();
            } else {
                 console.log("Received unknown WebSocket message type:", messageType, eventType);
            }
        };
        reader.readAsArrayBuffer(blob);
    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        if (isRunning) stopProcessing();
    }
  };

   transcribeWebSocket.onerror = (event) => {
    console.error("Transcribe WebSocket error:", event);
    let detailedError = 'Unknown WebSocket error';
    if (event && typeof event === 'object' && 'message' in event) {
        detailedError = event.message;
    }
    updateSubtitlesInContentScript("", `[STT连接出错: ${detailedError}]`);
    if (isRunning) stopProcessing();
  };

  transcribeWebSocket.onclose = (event) => {
    console.log("Transcribe WebSocket closed:", event.code, event.reason);
    const unexpectedClose = isRunning && event.code !== 1000 && event.code !== 1001;
    if (unexpectedClose || (isRunning && event.code === 1001)) { // Also treat 'going away' as unexpected if running
       console.error("WebSocket closed unexpectedly, attempting to stop.");
       updateSubtitlesInContentScript("", `[STT连接意外关闭: ${event.code}]`);
       // isRunning will be set to false by stopProcessing, so this check is important
       if (isRunning) stopProcessing();
    }
    transcribeWebSocket = null; // Ensure it's cleared
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

function sendAudioChunkToTranscribe(chunk) {
    if (transcribeWebSocket && transcribeWebSocket.readyState === WebSocket.OPEN) {
        if (!eventMarshaller) {
            console.error("eventMarshaller not initialized for sendAudioChunkToTranscribe.");
            return;
        }
        try {
            const audioEventMessage = {
                headers: {
                    ':message-type': { type: 'string', value: 'event' },
                    ':event-type': { type: 'string', value: 'AudioEvent' },
                },
                body: new Uint8Array(chunk),
            };
            const binaryMessage = eventMarshaller.marshall(audioEventMessage);
            transcribeWebSocket.send(binaryMessage);
        } catch (error) {
            console.error("Error marshalling/sending audio chunk:", error);
            updateSubtitlesInContentScript("", `[发送音频出错: ${error.message}]`);
        }
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
      console.log("No meaningful text to translate.");
      return;
  }
  console.log("Translating:", japaneseText);
  try {
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    console.log("Translated:", chineseText);
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
        }).catch(e => console.warn("Error sending updateSubtitles message (tab might be closed):", e.message));
    } else {
        // console.warn("No active tab ID to send subtitle update.");
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

    await getAwsCredentials(); // awsConfig is set globally
    console.log("AWS Config loaded successfully.");

    translateClient = new TranslateClient({
       region: awsConfig.region,
       credentials: {
           accessKeyId: awsConfig.accessKeyId,
           secretAccessKey: awsConfig.secretAccessKey,
       }
    });
    console.log("TranslateClient initialized.");

    await startTranscribeWebSocket(awsConfig); // WebSocket connection initiated
    console.log("Transcribe WebSocket setup initiated.");

    // Ensure content script is ready
    try {
        await chrome.scripting.executeScript({ target: { tabId: currentTabId }, files: ['content.js']});
        await chrome.scripting.insertCSS({ target: { tabId: currentTabId }, files: ['subtitle.css']});
        await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
        console.log("Sent startContentScript signal to content script.");
    } catch (scriptError) {
        console.error("Error setting up content script:", scriptError);
        throw new Error(`Content script setup failed: ${scriptError.message}`);
    }
    
    // Tell content script to initiate tab capture
    // This needs to happen after AWS WebSocket is at least trying to connect,
    // and ideally after onopen, but for simplicity, we do it here.
    // The content script will wait for "awsReady" or handle audio buffering if needed.
    try {
        await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
        console.log("Sent initiateTabCapture signal to content script.");
    } catch (captureError) {
        console.error("Error sending initiateTabCapture to content script:", captureError);
        throw new Error(`Failed to signal tab capture: ${captureError.message}`);
    }

    isRunning = true;
    console.log("Processing started successfully.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    // Ensure cleanup happens if start fails, even if stopProcessing was called internally
    if (isRunning) stopProcessing(); // Redundant if error came from a function that already calls stopProcessing
    else { // If stopProcessing wasn't called because isRunning was false during the error
        awsConfig = null;
        translateClient = null;
        if(transcribeWebSocket) stopTranscribeWebSocket(); // Ensure WS is closed
        if(currentTabId) updateSubtitlesInContentScript("", `[启动严重失败: ${error.message}]`);
        currentTabId = null;
    }
    let userError = (typeof error === 'string') ? error : (error instanceof Error ? error.message : "Unknown error during start.");
    return { success: false, error: userError };
  }
}

function stopProcessing() {
  if (!isRunning && !transcribeWebSocket && !currentTabId) { // Check if already effectively stopped
    console.log("Not running or already cleaned up.");
    return { success: true, message: "Already stopped or not running." }; // Return success as it's in the desired state
  }
  console.log("Stopping processing...");

  stopTranscribeWebSocket();

  if (currentTabId) {
      chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
        .catch(e => console.warn("Error sending stopContentScript (tab might be closed):", e.message))
        .finally(() => {
            currentTabId = null; // Clear tab ID after attempting to send message
        });
      console.log("Sent stop signal to content script (if tab was reachable).");
  }

  isRunning = false;
  awsConfig = null;
  translateClient = null;
  eventMarshaller = null; // Clear marshaller
  console.log("Processing stopped and resources reset.");
  return { success: true };
}

// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background received message:", request.action, sender.tab ? `from content script in tab ${sender.tab.id}` : "from popup/other");

  if (request.action === "start") {
    startProcessing().then(sendResponse);
    return true; // Indicate async response
  } else if (request.action === "stop") {
    sendResponse(stopProcessing());
  } else if (request.action === "getStatus") {
    sendResponse({ isRunning: isRunning });
  } else if (request.action === "audioChunk") {
    if (sender.tab && sender.tab.id === currentTabId && request.chunk && isRunning) {
        sendAudioChunkToTranscribe(request.chunk);
        // Not sending response for audio chunks to reduce overhead unless needed
        // sendResponse({ success: true });
    } else {
         // console.warn("Received audioChunk from unexpected sender, without data, or while not running.");
         // sendResponse({ success: false, error: "Invalid audioChunk message or state" });
    }
  } else if (request.action === "audioCaptureError") {
     console.error("Audio capture failed in content script:", request.error);
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`);
     if (isRunning) stopProcessing();
     sendResponse({ success: true });
  } else if (request.action === "audioProcessingStarted") {
      console.log("Content script reports audio processing started.");
      sendResponse({ success: true });
  }
  // Consider returning false explicitly if not handling async response and not sending a response
  // return false; // if no sendResponse is called and not async
});

console.log("Background service worker initialized. State: Idle.");
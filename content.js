// content.js
// This script is injected into the active tab.
// It handles displaying subtitles and initiating/processing tab audio capture.

console.log("Content script loaded.");

// --- Subtitle Display Elements ---
let subtitleContainer = null;
let japaneseSubtitleElement = null;
let chineseSubtitleElement = null;

// --- Audio Capture Variables (using chrome.tabCapture and Web Audio API) ---
let audioContext = null;
let mediaStreamSource = null;
// Use ScriptProcessorNode (deprecated but simpler) or AudioWorkletNode (preferred)
// ScriptProcessorNode is used here for demonstration simplicity.
let audioProcessor = null;
let audioStream = null; // The MediaStream object from tabCapture

// IMPORTANT: Sample rate MUST match the sample rate expected by AWS Transcribe (e.g., 16000 Hz)
// and ideally match the AudioContext's sample rate to avoid resampling complexity.
// chrome.tabCapture streams often have sample rates around 44100 or 48000 Hz.
// Resampling logic is not included here and is a significant challenge.
const TARGET_SAMPLE_RATE = 16000; // AWS Transcribe common rate

// --- Subtitle Display Logic (Same as before) ---
function createSubtitleElements() {
  if (subtitleContainer) {
    console.log("Subtitle elements already exist.");
    return;
  }
  console.log("Creating subtitle elements.");
  subtitleContainer = document.createElement('div');
  subtitleContainer.classList.add('stt-translate-subtitle-container');
  subtitleContainer.id = 'chrome-stt-translate-subtitle-container';

  japaneseSubtitleElement = document.createElement('div');
  japaneseSubtitleElement.classList.add('stt-translate-subtitle-japanese');
  subtitleContainer.appendChild(japaneseSubtitleElement);

  chineseSubtitleElement = document.createElement('div');
  chineseSubtitleElement.classList.add('stt-translate-subtitle-chinese');
  subtitleContainer.appendChild(chineseSubtitleElement);

  if (!document.getElementById(subtitleContainer.id)) {
     document.body.appendChild(subtitleContainer);
     console.log("Subtitle container added to body.");
  } else {
     console.warn("Subtitle container with ID already exists, reusing.");
     subtitleContainer = document.getElementById(subtitleContainer.id);
     japaneseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-japanese');
     chineseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-chinese');
  }
}

function updateSubtitles(japaneseText, chineseText) {
  if (!subtitleContainer) {
    createSubtitleElements();
  }
  japaneseSubtitleElement.textContent = japaneseText || '';
  chineseSubtitleElement.textContent = chineseText || '';
}

function removeSubtitleElements() {
  if (subtitleContainer && subtitleContainer.parentNode) {
    console.log("Removing subtitle elements.");
    subtitleContainer.parentNode.removeChild(subtitleContainer);
  }
  subtitleContainer = null;
  japaneseSubtitleElement = null;
  chineseSubtitleElement = null;
  console.log("Subtitle elements removed.");
}

// --- Audio Capture and Processing Logic (using chrome.tabCapture) ---

// Initiates the tab capture process
function initiateTabCapture() {
    console.log("Initiating tab capture...");

    // Stop any existing capture first
    stopAudioCapture();

    // Use chrome.tabCapture.capture. This requires a user gesture
    // and the 'tabCapture' permission in manifest.json.
    // The browser will show a permission dialog to the user.
    chrome.tabCapture.capture({ audio: true }, (stream) => {
        // This callback is executed AFTER the user interacts with the permission dialog
        // and the stream is available or an error occurred.

        if (chrome.runtime.lastError) {
            // Handle errors like user denied, tab not capturable, etc.
            const errorMsg = chrome.runtime.lastError.message || "Unknown tab capture error";
            console.error("chrome.tabCapture.capture failed:", errorMsg);
            // Report the error back to the background script
            chrome.runtime.sendMessage({ action: "audioCaptureError", error: `Tab capture failed: ${errorMsg}` })
                .catch(e => console.error("Error sending audioCaptureError message:", e));
            stopAudioCapture(); // Ensure cleanup
            return;
        }

        if (!stream) {
            // Stream is null if capture failed for reasons without a specific runtime error
             console.error("chrome.tabCapture.capture returned no stream.");
             chrome.runtime.sendMessage({ action: "audioCaptureError", error: "Tab capture returned no stream." })
                .catch(e => console.error("Error sending audioCaptureError message:", e));
             stopAudioCapture(); // Ensure cleanup
             return;
        }

        // If we got a stream, proceed to process it
        console.log("Tab capture successful. Stream received.");
        audioStream = stream; // Store the stream to stop it later

        // Process the MediaStream using Web Audio API
        processAudioStream(audioStream);
    });
}

// Processes the obtained MediaStream using Web Audio API
function processAudioStream(stream) {
    console.log("Processing audio stream with Web Audio API...");
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        mediaStreamSource = audioContext.createMediaStreamSource(stream);

        // IMPORTANT: Check the stream's sample rate vs. the target sample rate for AWS
        const contextSampleRate = audioContext.sampleRate;
        console.log(`AudioContext sample rate: ${contextSampleRate} Hz`);
        console.log(`Target sample rate for AWS: ${TARGET_SAMPLE_RATE} Hz`);

        if (contextSampleRate !== TARGET_SAMPLE_RATE) {
             console.warn(`Sample rate mismatch. Resampling from ${contextSampleRate} Hz to ${TARGET_SAMPLE_RATE} Hz is needed but not implemented.`);
             // *** RESAMPLING LOGIC GOES HERE ***
             // This is complex. You would need to insert a resampling step in the audio graph
             // or perform resampling in the onaudioprocess callback before sending.
             // For simplicity in this example, we'll proceed but acknowledge the issue.
             // If Transcribe supports the context's sample rate, you could use that instead.
        }


        // Use ScriptProcessorNode (deprecated but simpler) or AudioWorkletNode (preferred)
        // ScriptProcessorNode: bufferSize (e.g., 4096), numInputChannels (1 for mono), numOutputChannels (1 for mono)
        // A buffer size of 4096 is common. Input/output channels set to 1 for mono.
        audioProcessor = audioContext.createScriptProcessor(4096, 1, 1);

        // Set the onaudioprocess callback to receive audio data chunks
        audioProcessor.onaudioprocess = function(event) {
            const inputBuffer = event.inputBuffer;
            const audioData = inputBuffer.getChannelData(0); // Get Float32Array from the first channel

            // Convert Float32Array to Int16Array (AWS Transcribe typically expects 16-bit PCM)
            const int16Data = convertFloat32ToInt16(audioData);

            // Send audio chunk as ArrayBuffer to background script
            // The background script will then send it to AWS Transcribe via WebSocket
            // Use ArrayBuffer directly for efficiency
            // console.log("Sending audio chunk. Size:", int16Data.buffer.byteLength);
            chrome.runtime.sendMessage({ action: "audioChunk", chunk: int16Data.buffer })
                .catch(e => console.error("Error sending audio chunk message:", e));
        };

        // Connect the nodes: source -> processor -> destination
        // Connecting to destination keeps the processor active. Use context.destination
        // or a dummy GainNode connected to destination.
        mediaStreamSource.connect(audioProcessor);
        audioProcessor.connect(audioContext.destination); // Connect to output

        console.log("Audio processing graph connected. Sending audio chunks...");

        // Optional: Inform background script that processing has started
        chrome.runtime.sendMessage({ action: "audioProcessingStarted" }).catch(e => console.error("Error sending audioProcessingStarted message:", e));


    } catch (error) {
        console.error("Error setting up audio processing:", error);
        // Report the error back to the background script
        chrome.runtime.sendMessage({ action: "audioCaptureError", error: `Audio processing setup failed: ${error.message}` })
            .catch(e => console.error("Error sending audioCaptureError message:", e));
        stopAudioCapture(); // Clean up resources
    }
}


// Stops the audio capture and processing process and cleans up resources
function stopAudioCapture() {
  console.log("Stopping audio capture and processing...");
  if (audioProcessor) {
    audioProcessor.disconnect();
    audioProcessor = null;
    console.log("Audio processor disconnected.");
  }
  if (mediaStreamSource) {
    mediaStreamSource.disconnect();
    mediaStreamSource = null;
     console.log("Media stream source disconnected.");
  }
  if (audioContext) {
    // It's good practice to close the context when done
    audioContext.close().then(() => {
        console.log("AudioContext closed.");
        audioContext = null;
    }).catch(e => console.error("Error closing AudioContext:", e));
  }
  if (audioStream) {
    // Stop all tracks in the stream to release the capture resource
    audioStream.getTracks().forEach(track => track.stop());
    console.log("Audio stream tracks stopped.");
    audioStream = null;
  }
  console.log("Audio capture and processing stopped.");
}

// Helper function to convert Float32Array (Web Audio API format)
// to Int16Array (common raw audio format, 16-bit PCM)
function convertFloat32ToInt16(buffer) {
    let l = buffer.length;
    let buf = new Int16Array(l);
    // Values are in range [-1, 1]. Convert to [-32768, 32767]
    const multiplier = 0x7FFF; // 32767
    while (l--) {
        // Clamp value to [-1, 1] before multiplying
        const s = Math.max(-1, Math.min(1, buffer[l]));
        buf[l] = s * multiplier;
    }
    return buf;
}


// --- Message Handling from Background Script ---

// Listen for messages from the background service worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request.action);

  if (request.action === "startContentScript") {
    // Received initial signal to set up subtitles
    console.log("Received start signal. Setting up subtitles.");
    createSubtitleElements();
    // We no longer initiate capture immediately here.
    // Capture will be initiated by a separate message (initiateTabCapture).
    sendResponse({ success: true }); // Acknowledge message

  } else if (request.action === "initiateTabCapture") {
      // Received signal from background to actually start tab capture
      console.log("Received initiateTabCapture signal.");
      initiateTabCapture(); // Call the function to start capture
      sendResponse({ success: true }); // Acknowledge message

  } else if (request.action === "stopContentScript") {
    // Received signal to stop the process
    console.log("Received stop signal. Removing subtitles and stopping capture.");
    removeSubtitleElements();
    stopAudioCapture(); // Stop capture and processing
    sendResponse({ success: true }); // Acknowledge message

  } else if (request.action === "updateSubtitles") {
    // Received transcribed Japanese and translated Chinese text
    // console.log("Received subtitle update:", request.japanese, request.chinese); // Log can be noisy
    updateSubtitles(request.japanese, request.chinese);
    sendResponse({ success: true }); // Acknowledge message

  } else if (request.action === "sttError" || request.action === "translateError" || request.action === "audioCaptureError") {
      // Received an error message from the background script or self-reported capture error
      console.error(`Received error from background/self (${request.action}):`, request.error);
      // Display the error using the subtitle area
      updateSubtitles("", `[服务出错: ${request.error}]`);
      // Optionally stop processing automatically on persistent errors
      // stopAudioCapture(); // Might already be called by initiateTabCapture error handler
      sendResponse({ success: true }); // Acknowledge message
  }
  // Add other message handlers if needed
});

// Optional: Initial setup check - Less critical with explicit start/stop
// chrome.runtime.sendMessage({ action: "getStatus" }, function(response) {
//   if (response && response.isRunning) {
//     console.log("Background reports running on load. Setting up content script.");
//     createSubtitleElements();
//     // Note: Capture is NOT automatically started here. It's initiated by a separate message.
//   } else {
//       console.log("Background reports idle on load.");
//   }
// });

console.log("Content script finished execution.");
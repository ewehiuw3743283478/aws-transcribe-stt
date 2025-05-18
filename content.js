// content.js
// This script is injected into the active tab.
// It handles displaying subtitles and initiating/processing tab audio capture.

console.log("Content script loaded.");

// --- Subtitle Display Elements ---
// Changed from 'let' to 'var' to avoid SyntaxError on potential script re-injection
var subtitleContainer = null;
var japaneseSubtitleElement = null;
var chineseSubtitleElement = null;

// --- Audio Capture Variables (using chrome.tabCapture and Web Audio API) ---
// Changed from 'let' to 'var' for the same reason
var audioContext = null;
var mediaStreamSource = null;
// Using ScriptProcessorNode (deprecated) for simplicity in this example.
// AudioWorkletNode is preferred for production.
var audioProcessor = null;
var audioStream = null; // The MediaStream object from tabCapture

// IMPORTANT: Sample rate MUST match the sample rate expected by AWS Transcribe (e.g., 16000 Hz)
// and ideally match the AudioContext's sample rate to avoid resampling complexity.
// chrome.tabCapture streams often have sample rates around 44100 or 48000 Hz.
// Resampling logic is NOT included here and is a significant challenge (Task 2.4).
const TARGET_SAMPLE_RATE = 16000; // AWS Transcribe common rate

// --- Subtitle Display Logic (Same as before) ---
function createSubtitleElements() {
  // Check if elements already exist (more robust check using ID)
  if (document.getElementById('chrome-stt-translate-subtitle-container')) {
     subtitleContainer = document.getElementById('chrome-stt-translate-subtitle-container');
     japaneseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-japanese');
     chineseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-chinese');
     console.log("Subtitle elements already exist, reusing.");
     return;
  }

  console.log("Creating subtitle elements.");
  subtitleContainer = document.createElement('div');
  subtitleContainer.classList.add('stt-translate-subtitle-container');
  subtitleContainer.id = 'chrome-stt-translate-subtitle-container'; // Add a unique ID

  japaneseSubtitleElement = document.createElement('div');
  japaneseSubtitleElement.classList.add('stt-translate-subtitle-japanese');
  subtitleContainer.appendChild(japaneseSubtitleElement);

  chineseSubtitleElement = document.createElement('div');
  chineseSubtitleElement.classList.add('stt-translate-subtitle-chinese');
  subtitleContainer.appendChild(chineseSubtitleElement);

  document.body.appendChild(subtitleContainer);
  console.log("Subtitle container added to body.");
}

function updateSubtitles(japaneseText, chineseText) {
  // Ensure elements exist before updating
  if (!subtitleContainer) {
    createSubtitleElements(); // Should ideally be created by startContentScript message
    if (!subtitleContainer) { // If creation still fails for some reason
         console.error("Failed to create subtitle elements.");
         return;
    }
  }
  // Update text content, handle null/undefined gracefully
  japaneseSubtitleElement.textContent = japaneseText || '';
  chineseSubtitleElement.textContent = chineseText || '';
}

function removeSubtitleElements() {
  const existingContainer = document.getElementById('chrome-stt-translate-subtitle-container');
  if (existingContainer && existingContainer.parentNode) {
    console.log("Removing subtitle elements.");
    existingContainer.parentNode.removeChild(existingContainer);
  }
  // Reset variables regardless of whether element was found/removed
  subtitleContainer = null;
  japaneseSubtitleElement = null;
  chineseSubtitleElement = null;
  console.log("Subtitle elements removed (if they existed).");
}

// --- Audio Capture and Processing Logic (using chrome.tabCapture - Task 2.2) ---

// Initiates the tab capture process using chrome.tabCapture API
function initiateTabCapture() {
    console.log("Initiating tab capture...");

    // Stop any existing capture first
    stopAudioCapture();

    // Use chrome.tabCapture.capture. This requires a user gesture (from popup click)
    // and the 'tabCapture' permission in manifest.json.
    // The browser will show a permission dialog to the user.
    // The callback is executed AFTER the user interacts with the permission dialog.
    chrome.tabCapture.capture({ audio: true }, (stream) => {
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

        // Process the MediaStream using Web Audio API (Task 2.3)
        processAudioStream(audioStream);
    });
}

// Processes the obtained MediaStream using Web Audio API
function processAudioStream(stream) {
    console.log("Processing audio stream with Web Audio API...");
    try {
        // Create an AudioContext
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log(`AudioContext sample rate: ${audioContext.sampleRate} Hz`);
        console.log(`Target sample rate for AWS: ${TARGET_SAMPLE_RATE} Hz`);

        // Create a MediaStreamSourceNode from the stream
        mediaStreamSource = audioContext.createMediaStreamSource(stream);

        // --- Audio Resampling (Task 2.4 - NOT IMPLEMENTED) ---
        // If audioContext.sampleRate !== TARGET_SAMPLE_RATE, resampling is needed here.
        // This is a complex task requiring a resampler implementation.
        // For now, we proceed assuming sample rates match or Transcribe can handle the context rate.
        if (audioContext.sampleRate !== TARGET_SAMPLE_RATE) {
             console.warn(`Sample rate mismatch (${audioContext.sampleRate}Hz vs ${TARGET_SAMPLE_RATE}Hz). Resampling is needed but not implemented.`);
             // You would insert a resampler node here or resample in onaudioprocess
             // mediaStreamSource.connect(resamplerNode);
             // resamplerNode.connect(audioProcessor);
        }
        // --- End Resampling Placeholder ---


        // Use ScriptProcessorNode (deprecated but simpler for example)
        // bufferSize (e.g., 4096), numInputChannels (1 for mono), numOutputChannels (1 for mono)
        // The bufferSize affects latency and chunk size. Must be power of 2 between 256 and 16384.
        // Connecting to audioContext.destination is often necessary to keep the processor active.
        const bufferSize = 4096; // Standard buffer size
        audioProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);

        // Set the onaudioprocess callback to receive audio data chunks
        audioProcessor.onaudioprocess = function(event) {
            // This function is called when a buffer of audio data is ready
            const inputBuffer = event.inputBuffer;
            const audioData = inputBuffer.getChannelData(0); // Get Float32Array from the first channel

            // Convert Float32Array to Int16Array (AWS Transcribe typically expects 16-bit PCM)
            // Resampling should happen BEFORE or DURING this step if needed.
            const int16Data = convertFloat32ToInt16(audioData);

            // Send audio chunk as ArrayBuffer to background script (Task 2.5)
            // The background script will then send it to AWS Transcribe via WebSocket (Task 1.3)
            // Use ArrayBuffer directly for efficiency
            // console.log("Sending audio chunk. Size:", int16Data.buffer.byteLength); // Can be noisy
            chrome.runtime.sendMessage({ action: "audioChunk", chunk: int16Data.buffer })
                .catch(e => console.error("Error sending audio chunk message:", e));
        };

        // Connect the nodes: source -> processor -> destination
        // If resampling was implemented, it would be: source -> resampler -> processor -> destination
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
// Resampling should be done before or during this step if needed (Task 2.4)
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
  console.log("Content script received message:", request.action, sender.tab ? "from background script for tab " + sender.tab.id : "from popup/other");

  // Handle messages from the background script
  if (request.action === "startContentScript") {
    // Received initial signal to set up subtitles
    console.log("Received startContentScript signal. Setting up subtitles.");
    createSubtitleElements();
    // We no longer initiate capture immediately here.
    // Capture will be initiated by a separate message (initiateTabCapture).
    sendResponse({ success: true }); // Acknowledge message

  } else if (request.action === "initiateTabCapture") {
      // Received signal from background to actually start tab capture (Task 2.2)
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

  } else if (request.action === "awsReady") {
      // Optional: Received signal that AWS WebSocket is open and ready
      console.log("Background script reports AWS WebSocket is ready.");
      // If you delayed audio capture until AWS was ready, start it here:
      // initiateTabCapture(); // Uncomment this line if you want to wait for AWS readiness
      sendResponse({ success: true });
  } else if (request.action === "sttError" || request.action === "translateError" || request.action === "audioCaptureError") {
      // Received an error message from the background script or self-reported capture error
      console.error(`Received error from background/self (${request.action}):`, request.error);
      // Display the error using the subtitle area
      updateSubtitles("", `[服务出错: ${request.error}]`);
      // Optionally stop processing automatically on persistent errors
      // stopAudioCapture(); // Might already be called by initiateTabCapture error handler or background script
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
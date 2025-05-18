// content.js
// This script is injected into the active tab.
// It handles displaying subtitles and attempting audio capture.

console.log("Content script loaded.");

// --- Subtitle Display Elements ---
let subtitleContainer = null;
let japaneseSubtitleElement = null;
let chineseSubtitleElement = null;

// --- Audio Capture Variables (Conceptual) ---
// Capturing arbitrary tab audio is complex and often restricted.
// These variables are part of a placeholder implementation.
let audioContext = null;
let mediaStreamSource = null;
// Using ScriptProcessorNode (deprecated) or AudioWorkletNode (preferred)
// ScriptProcessorNode is simpler for demonstration but has limitations.
// AudioWorkletNode is more complex but runs off the main thread.
let audioProcessor = null;
let audioStream = null; // The MediaStream object from capture


// --- Subtitle Display Logic ---

// Creates or ensures subtitle elements exist in the DOM
function createSubtitleElements() {
  if (subtitleContainer) {
    console.log("Subtitle elements already exist.");
    return; // Already created
  }

  console.log("Creating subtitle elements.");
  subtitleContainer = document.createElement('div');
  subtitleContainer.classList.add('stt-translate-subtitle-container');
  // Add a unique ID for easier identification/removal if needed
  subtitleContainer.id = 'chrome-stt-translate-subtitle-container';

  japaneseSubtitleElement = document.createElement('div');
  japaneseSubtitleElement.classList.add('stt-translate-subtitle-japanese');
  subtitleContainer.appendChild(japaneseSubtitleElement);

  chineseSubtitleElement = document.createElement('div');
  chineseSubtitleElement.classList.add('stt-translate-subtitle-chinese');
  subtitleContainer.appendChild(chineseSubtitleElement);

  // Append to body. Using shadow DOM could prevent conflicts, but adds complexity.
  // Ensure we only append once.
  if (!document.getElementById(subtitleContainer.id)) {
     document.body.appendChild(subtitleContainer);
     console.log("Subtitle container added to body.");
  } else {
     // This case might happen if script runs again but container wasn't fully removed
     console.warn("Subtitle container with ID already exists, reusing.");
     subtitleContainer = document.getElementById(subtitleContainer.id);
     japaneseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-japanese');
     chineseSubtitleElement = subtitleContainer.querySelector('.stt-translate-subtitle-chinese');
  }
}

// Updates the text content of the subtitle elements
function updateSubtitles(japaneseText, chineseText) {
  // Ensure elements exist before updating
  if (!subtitleContainer) {
    createSubtitleElements();
  }
  // Update text content, handle null/undefined gracefully
  japaneseSubtitleElement.textContent = japaneseText || '';
  chineseSubtitleElement.textContent = chineseText || '';

  // Optional: Add logic here to handle timing if Transcribe provides it
  // (e.g., hide previous subtitle, show new one at correct time)
  // For now, we just display the latest received text.
}

// Removes subtitle elements from the DOM
function removeSubtitleElements() {
  if (subtitleContainer && subtitleContainer.parentNode) {
    console.log("Removing subtitle elements.");
    subtitleContainer.parentNode.removeChild(subtitleContainer);
  }
  // Reset variables
  subtitleContainer = null;
  japaneseSubtitleElement = null;
  chineseSubtitleElement = null;
  console.log("Subtitle elements removed.");
}


// --- Audio Capture Logic (Highly Conceptual and Problematic) ---
// READ THIS CAREFULLY:
// Directly capturing audio from arbitrary browser tabs for real-time processing
// is severely restricted by browser security and privacy models.
//
// Possible approaches (all have limitations for the goal of "any tab audio"):
// 1. navigator.mediaDevices.getUserMedia({ audio: true }): Captures MICROPHONE audio.
//    Easiest to implement, but gets the wrong audio source (user's voice, not the page).
// 2. chrome.tabCapture.capture({ audio: true }): Can capture tab audio, but:
//    - Requires "tabCapture" permission.
//    - Requires a user gesture (e.g., clicking the extension's action button *while* on the target tab).
//    - Provides a MediaStream. Processing this stream in real-time can be tricky.
//    - May not work on all content (e.g., DRM-protected video).
// 3. Web Audio API on <audio>/<video> elements: If you can get a reference to the
//    HTMLAudioElement or HTMLVideoElement, you can create a MediaElementAudioSourceNode.
//    - Only works if the audio/video is played via these standard elements.
//    - Subject to CORS restrictions for cross-origin content.
//    - Doesn't capture *all* page audio (e.g., audio from Web Audio API itself, Flash, etc.).
// 4. chrome.desktopCapture: Can capture system audio, but requires user selection
//    of the entire screen/application and has high permission requirements. Not suitable for per-tab audio.
//
// THE CODE BELOW IS A PLACEHOLDER SHOWING THE *STRUCTURE* OF PROCESSING A MEDIASTREAM.
// YOU NEED TO REPLACE THE PART THAT ACQUIRES THE `stream` OBJECT WITH A WORKING METHOD,
// WHICH IS THE MAIN TECHNICAL HURDLE.
// A common (though incorrect for the goal) approach is using getUserMedia for mic input
// as a starting point for testing the audio processing pipeline.

async function startAudioCapture() {
    console.log("Attempting to start audio capture...");

    // Stop any existing capture first
    stopAudioCapture();

    try {
        // --- 1. Acquire the MediaStream ---
        // *** REPLACE THIS SECTION ***
        // This is the part that needs a robust implementation based on how you
        // can actually get the audio stream from the Japanese content.

        // Example using getUserMedia (CAPTURES MICROPHONE - NOT PAGE AUDIO)
        // This is useful for testing the audio processing pipeline but is NOT
        // the correct source for translating page audio.
        // console.warn("Using getUserMedia for audio capture (captures microphone, NOT page audio).");
        // audioStream = await navigator.mediaDevices.getUserMedia({
        //     audio: {
        //         echoCancellation: false, // Disable processing that might distort speech
        //         noiseSuppression: false,
        //         autoGainControl: false,
        //     }
        // });

        // Example attempting tabCapture (requires "tabCapture" permission, user gesture, and potentially complex setup)
        // You would likely trigger this from the background script after a user action
        // and the background script would get the stream and send it back via message,
        // or the content script would request it after receiving a start signal.
        // This is significantly harder to implement correctly in a content script context.
        // A common pattern is: User clicks popup -> background requests tabCapture -> browser shows dialog -> user selects tab -> background gets stream -> background processes/sends to AWS.
        // Or: User clicks popup -> background sends message to content script -> content script requests tabCapture *if possible* -> content script gets stream -> content script processes/sends to background.
        // The latter is tricky because content scripts have limited access to chrome.* APIs.

        // Example using Web Audio API on a specific element (requires finding the element)
        // const videoElement = document.querySelector('video'); // Find the video element
        // if (videoElement) {
        //     audioContext = new (window.AudioContext || window.webkitAudioContext)();
        //     mediaStreamSource = audioContext.createMediaElementSource(videoElement);
        //     audioStream = mediaStreamSource.mediaStream; // Get the underlying stream (may not be accessible depending on CORS)
        // } else {
        //     console.warn("No video element found to capture audio from.");
        //     // Handle no element found
        //     throw new Error("No audio/video element found on page.");
        // }


        // *** For this example, we will proceed as if `audioStream` was successfully acquired. ***
        // In a real implementation, if stream acquisition fails, you should report the error
        // back to the background script and stop the process.
        console.warn("Audio stream acquisition placeholder. Replace this with actual capture logic.");
        // Simulate getting a stream (THIS PART IS NOT REAL)
        // audioStream = await getHypotheticalTabAudioStream(); // This function doesn't exist


        // --- 2. Process the MediaStream using Web Audio API ---
        // If you successfully got a `audioStream` object:
        if (!audioStream) {
             // This branch will be hit by default because audioStream is not acquired in the placeholder
             console.warn("Audio stream not acquired. Skipping audio processing setup.");
             // Optionally send an error to background if stream acquisition was intended here
             // chrome.runtime.sendMessage({ action: "audioCaptureError", error: "Failed to acquire audio stream" });
             return; // Exit if no stream
        }


        console.log("Audio stream acquired (simulated). Setting up processing graph.");
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        mediaStreamSource = audioContext.createMediaStreamSource(audioStream);

        // Use ScriptProcessorNode (deprecated but simpler) or AudioWorkletNode (preferred)
        // ScriptProcessorNode: bufferSize (e.g., 4096), numInputChannels (1 for mono), numOutputChannels (1 for mono)
        // The bufferSize affects latency and chunk size. Must be power of 2 between 256 and 16384.
        // The sample rate of the context will be audioContext.sampleRate. AWS Transcribe expects specific rates (e.g., 16000).
        // You might need resampling here or in the background script.
        audioProcessor = audioContext.createScriptProcessor(4096, 1, 1); // Example: 4096 buffer, mono input/output

        // Set the sample rate you intend to send to AWS (e.g., 16000 Hz)
        const targetSampleRate = 16000;
        const contextSampleRate = audioContext.sampleRate;
        const needsResampling = contextSampleRate !== targetSampleRate;
        if (needsResampling) {
             console.warn(`AudioContext sample rate (${contextSampleRate}) does not match target (${targetSampleRate}). Resampling might be needed.`);
             // Resampling logic is complex and not included here.
             // You'd need a resampler library or implementation.
             // Alternatively, configure Transcribe for the context's sample rate if supported.
        }


        audioProcessor.onaudioprocess = function(event) {
            // This function is called when a buffer of audio data is ready
            const inputBuffer = event.inputBuffer;
            const audioData = inputBuffer.getChannelData(0); // Get Float32Array from the first channel

            // Convert Float32Array to Int16Array (common format for raw audio sent to APIs)
            // AWS Transcribe typically expects 16-bit PCM.
            const int16Data = convertFloat32ToInt16(audioData);

            // Send audio chunk as ArrayBuffer to background script
            // The background script will then send it to AWS Transcribe via WebSocket
            // Use ArrayBuffer directly for efficiency
            chrome.runtime.sendMessage({ action: "audioChunk", chunk: int16Data.buffer })
                .catch(e => console.error("Error sending audio chunk message:", e));
        };

        // Connect the nodes: source -> processor -> destination
        // Connecting to destination is sometimes necessary to keep the processor active,
        // but it might result in hearing the processed audio (feedback).
        // A better approach is often using an AudioWorkletNode or connecting to a dummy destination.
        mediaStreamSource.connect(audioProcessor);
        audioProcessor.connect(audioContext.destination); // Connect to output to keep it alive

        console.log("Audio capture setup complete (placeholder). Processing audio...");

    } catch (error) {
        console.error("Error setting up audio capture:", error);
        // Report the error back to the background script
        chrome.runtime.sendMessage({ action: "audioCaptureError", error: error.message })
            .catch(e => console.error("Error sending audioCaptureError message:", e));
        stopAudioCapture(); // Clean up resources
    }
}

// Stops the audio capture process and cleans up resources
function stopAudioCapture() {
  console.log("Stopping audio capture...");
  if (audioProcessor) {
    audioProcessor.disconnect();
    audioProcessor = null;
  }
  if (mediaStreamSource) {
    mediaStreamSource.disconnect();
    mediaStreamSource = null;
  }
  if (audioContext) {
    // It's good practice to close the context when done
    audioContext.close().then(() => {
        console.log("AudioContext closed.");
        audioContext = null;
    }).catch(e => console.error("Error closing AudioContext:", e));
  }
  if (audioStream) {
    // Stop all tracks in the stream to release the microphone/device
    audioStream.getTracks().forEach(track => track.stop());
    console.log("Audio stream tracks stopped.");
    audioStream = null;
  }
  console.log("Audio capture stopped.");
}

// Helper function to convert Float32Array (Web Audio API format)
// to Int16Array (common raw audio format)
function convertFloat32ToInt16(buffer) {
    let l = buffer.length;
    let buf = new Int16Array(l);
    // Values are in range [-1, 1]. Convert to [-32768, 32767]
    while (l--) {
        buf[l] = Math.min(1, buffer[l]) * 0x7FFF; // 32767
    }
    return buf;
}


// --- Message Handling from Background Script ---

// Listen for messages from the background service worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request.action);

  if (request.action === "startContentScript") {
    // Received signal to start the process in the content script
    console.log("Received start signal. Setting up subtitles and capture.");
    createSubtitleElements();
    // Attempt to start audio capture (this is the placeholder call)
    // startAudioCapture(); // Uncomment this line to try the placeholder capture logic
    sendResponse({ success: true }); // Acknowledge message
  } else if (request.action === "stopContentScript") {
    // Received signal to stop the process
    console.log("Received stop signal. Removing subtitles and stopping capture.");
    removeSubtitleElements();
    stopAudioCapture(); // Stop capture placeholder
    sendResponse({ success: true }); // Acknowledge message
  } else if (request.action === "updateSubtitles") {
    // Received transcribed Japanese and translated Chinese text
    console.log("Received subtitle update:", request.japanese, request.chinese);
    updateSubtitles(request.japanese, request.chinese);
    sendResponse({ success: true }); // Acknowledge message
  } else if (request.action === "awsReady") {
      // Optional: Received signal that AWS WebSocket is open and ready
      console.log("Background script reports AWS WebSocket is ready.");
      // If you delayed audio capture until AWS was ready, start it here:
      // startAudioCapture(); // Uncomment this line if you want to wait for AWS readiness
      sendResponse({ success: true });
  } else if (request.action === "sttError" || request.action === "translateError") {
      // Received an error from the background script
      console.error(`Received error from background (${request.action}):`, request.error);
      // Display the error using the subtitle area
      updateSubtitles("", `[服务出错: ${request.error}]`);
      // Optionally stop processing automatically on error
      // stopAudioCapture();
      // removeSubtitleElements(); // Or keep them to show the error
      sendResponse({ success: true });
  }
  // Add other message handlers if needed
});

// Optional: Check if the extension is already running when the content script loads
// This handles cases where the user navigates to a new page while the extension is active.
// However, managing state persistence across pages for real-time streams is complex.
// For simplicity, this example assumes the process starts/stops per page load
// based on user interaction with the popup.
/*
chrome.runtime.sendMessage({ action: "getStatus" }, function(response) {
  if (response && response.isRunning) {
    console.log("Background reports running on load. Setting up content script.");
    createSubtitleElements();
    // Decide if you want to attempt audio capture automatically on page load if running
    // startAudioCapture(); // Uncomment if needed
  } else {
      console.log("Background reports idle on load.");
  }
});
*/

console.log("Content script finished execution.");
// popup.js
// Handles the logic for the extension popup window.

document.addEventListener('DOMContentLoaded', function() {
  console.log("Popup script loaded.");

  // Get references to the HTML elements
  const startButton = document.getElementById('startBtn');
  const stopButton = document.getElementById('stopBtn');
  const statusDiv = document.getElementById('status');

  // Function to update button states (disabled/enabled)
  // based on whether the process is currently running.
  function updateButtonState(isRunning) {
    startButton.disabled = isRunning;
    stopButton.disabled = !isRunning;
    console.log(`Button state updated: Start disabled=${isRunning}, Stop disabled=${!isRunning}`);
  }

  // Function to update status text and apply state classes for styling.
  // stateClass can be 'running', 'error', or empty for default/idle.
  function updateStatus(text, stateClass = '') {
      // Always prefix with "Status: " for clarity in the UI
      statusDiv.textContent = `Status: ${text}`;
      // Reset classes first to remove any previous state classes
      statusDiv.className = 'status-area'; // Resets to the base class defined in popup.css
      // Add the new state class if provided
      if (stateClass) {
          statusDiv.classList.add(stateClass);
      }
      console.log(`Status updated: "${text}" with class "${stateClass}"`);
  }

  // --- Initial State Check ---
  // When the popup opens, ask the background script for the current running status
  console.log("Requesting initial status from background script...");
  chrome.runtime.sendMessage({ action: "getStatus" }, function(response) {
    // Check if there was an error sending the message (e.g., background script not running)
    if (chrome.runtime.lastError) {
        console.error("Error getting initial status from background:", chrome.runtime.lastError.message);
        // Assume idle state and show an error message in the status
        updateButtonState(false);
        updateStatus(`Error: ${chrome.runtime.lastError.message}`, 'error');
        return;
    }

    // Update the UI based on the received status
    const isRunning = response && response.isRunning; // Ensure response is valid
    updateButtonState(isRunning);
    updateStatus(isRunning ? "Running" : "Idle", isRunning ? 'running' : '');
    console.log(`Initial status received: isRunning = ${isRunning}`);
  });

  // --- Event Listeners ---

  // Start button click handler
  startButton.addEventListener('click', function() {
    console.log("Start button clicked.");
    // Immediately update UI to reflect pending action
    updateButtonState(true); // Disable Start, Enable Stop
    updateStatus("Starting..."); // Indicate that the process is starting
     // Clear previous error message/link if any by resetting innerHTML
    statusDiv.innerHTML = statusDiv.textContent;

    // Send a message to the background script to start the process
    chrome.runtime.sendMessage({ action: "start" }, function(response) {
      // Check for errors sending the message
      if (chrome.runtime.lastError) {
          console.error("Error sending start message to background:", chrome.runtime.lastError.message);
          // If message send fails, revert buttons and show error
          updateButtonState(false);
          updateStatus(`Error: ${chrome.runtime.lastError.message}`, 'error');
          return;
      }

      // Process the response from the background script
      if (response && response.success) {
        // Process started successfully (background script confirms)
        // updateButtonState(true); // Button state is already set above
        updateStatus("Running", 'running'); // Set final success status
        console.log("Start process confirmed by background script.");
      } else {
        // Process failed to start (background script reported an error)
        updateButtonState(false); // Revert buttons to idle state
        let errorMessage = response && response.error ? response.error : "Unknown error";
        updateStatus(`Error - ${errorMessage}`, 'error'); // Set error status
        console.error("Background script failed to start:", errorMessage);

        // Special case: If credentials error, add a link to the options page
        if (errorMessage.includes("Credentials not configured")) {
             // Use innerHTML to add the link, preserving existing text
             statusDiv.innerHTML = `Status: Error - ${errorMessage}<br><a href="${chrome.runtime.getURL('options.html')}" target="_blank">Configure AWS Credentials</a>`;
        }
      }
    });
  });

  // Stop button click handler
  stopButton.addEventListener('click', function() {
    console.log("Stop button clicked.");
    // Immediately update UI to reflect pending action
    updateButtonState(false); // Disable Stop, Enable Start
    updateStatus("Stopping..."); // Indicate that the process is stopping
     // Clear previous error message/link if any
    statusDiv.innerHTML = statusDiv.textContent;

    // Send a message to the background script to stop the process
    chrome.runtime.sendMessage({ action: "stop" }, function(response) {
       // Check for errors sending the message
       if (chrome.runtime.lastError) {
           console.error("Error sending stop message to background:", chrome.runtime.lastError.message);
           // If message send fails, status is uncertain, but buttons should be idle
           updateButtonState(false);
           updateStatus(`Error: ${chrome.runtime.lastError.message}`, 'error');
           return;
       }

       // Process the response from the background script
       if (response && response.success) {
         // Process stopped successfully (background script confirms)
         // updateButtonState(false); // Button state is already set above
         updateStatus("Idle"); // Set final success status (no special class for idle)
         console.log("Stop process confirmed by background script.");
       } else {
         // Process failed to stop (less common, but handle it)
         // Stay in idle button state, but show an error message
         updateButtonState(false); // Ensure buttons are in idle state
         let errorMessage = response && response.error ? response.error : "Unknown error during stop";
         updateStatus(`Error stopping: ${errorMessage}`, 'error'); // Set error status
         console.error("Background script failed to stop:", errorMessage);
       }
    });
  });
});
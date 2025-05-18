// options.js

document.addEventListener('DOMContentLoaded', function() {
  const accessKeyInput = document.getElementById('awsAccessKeyId');
  const secretKeyInput = document.getElementById('awsSecretAccessKey');
  const regionInput = document.getElementById('awsRegion');
  const saveButton = document.getElementById('saveButton');
  const statusDiv = document.getElementById('status');

  // Function to update status text and apply state classes
  function updateStatus(text, stateClass = '') {
      statusDiv.textContent = text;
      statusDiv.className = 'status-area'; // Reset classes to base status class
      if (stateClass) {
          statusDiv.classList.add(stateClass);
      }
  }

  // Load saved credentials when the options page opens
  chrome.storage.sync.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], function(data) {
    accessKeyInput.value = data.awsAccessKeyId || '';
    secretKeyInput.value = data.awsSecretAccessKey || '';
    regionInput.value = data.awsRegion || 'ap-northeast-1'; // Default region if none saved
    console.log("Loaded AWS credentials from storage.");
    if (data.awsAccessKeyId && data.awsSecretAccessKey && data.awsRegion) {
         updateStatus("Credentials loaded.", "success");
    } else {
         updateStatus("Please configure AWS credentials.", "warning"); // Use warning class if you add one
    }
  });

  // Save credentials when the button is clicked
  saveButton.addEventListener('click', function() {
    const awsAccessKeyId = accessKeyInput.value.trim(); // Trim whitespace
    const awsSecretAccessKey = secretKeyInput.value.trim();
    const awsRegion = regionInput.value.trim();

    if (!awsAccessKeyId || !awsSecretAccessKey || !awsRegion) {
      updateStatus('Please fill in all fields.', 'error');
      console.warn("Attempted to save empty AWS credentials.");
      return;
    }

    // Use chrome.storage.sync to save credentials
    chrome.storage.sync.set({ awsAccessKeyId, awsSecretAccessKey, awsRegion }, function() {
      // Check for runtime errors during save
      if (chrome.runtime.lastError) {
          console.error("Error saving credentials:", chrome.runtime.lastError.message);
          updateStatus(`Error saving: ${chrome.runtime.lastError.message}`, 'error');
      } else {
          updateStatus('Credentials saved successfully!', 'success');
          console.log('AWS credentials saved.');
      }
    });
  });
});
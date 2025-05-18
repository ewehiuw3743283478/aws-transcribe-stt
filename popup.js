/* popup.css */

/* Define Material You inspired color palette using CSS variables */
:root {
  /* Example tones, you can adjust these */
  --md-primary: #6750a4; /* Primary purple */
  --md-on-primary: #ffffff; /* Text color on primary */
  --md-secondary: #625b71; /* Secondary grey-purple */
  --md-on-secondary: #ffffff; /* Text color on secondary */
  --md-surface: #fffbfe; /* Light background surface */
  --md-on-surface: #1c1b1f; /* Dark text on light surface */
  --md-error: #b3261e; /* Error red */
  --md-on-error: #ffffff; /* Text color on error */
  --md-success: #4CAF50; /* Standard success green */
  --md-warning: #FF9800; /* Standard warning orange */
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0;
  margin: 0;
  min-width: 250px; /* Give the popup a reasonable minimum width */
  background-color: var(--md-surface);
  color: var(--md-on-surface);
  /* Prevent text selection in popup */
  user-select: none;
}

.popup-container {
  padding: 16px; /* Consistent padding around content */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  gap: 12px; /* Space between child elements */
}

.popup-title {
  font-size: 1.2em;
  font-weight: 500; /* Medium weight */
  margin: 0 0 8px 0; /* Margin below title */
  text-align: center;
  color: var(--md-on-surface);
}

.action-button {
  display: block; /* Make buttons take full width */
  width: 100%;
  padding: 10px 16px; /* Vertical and horizontal padding */
  margin: 0; /* Gap handled by container */
  border: none;
  border-radius: 20px; /* Significant rounding for M3 feel */
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  /* Subtle elevation shadow */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
}

.action-button:hover {
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.1); /* Increased shadow on hover */
}

.action-button:active {
   box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15); /* Inset shadow for pressed state */
   opacity: 0.95; /* Slightly reduce opacity when pressed */
}


.action-button.primary {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
}

.action-button.secondary {
  background-color: var(--md-secondary);
  color: var(--md-on-secondary);
}

.action-button:disabled {
  opacity: 0.5; /* Dim disabled buttons */
  cursor: not-allowed;
  box-shadow: none; /* Disabled buttons typically have no shadow */
}

.status-area {
  margin-top: 8px; /* Space above status */
  text-align: center;
  font-size: 0.9em;
  color: var(--md-on-surface); /* Default status color */
  min-height: 1.2em; /* Give it some height even when empty */
  word-break: break-word; /* Prevent long text from overflowing */
}

/* Status colors handled by JS adding/removing classes */
.status-area.running {
    color: var(--md-success);
    font-weight: bold;
}

.status-area.error {
    color: var(--md-error);
    font-weight: bold;
}

.status-area a {
    color: var(--md-primary); /* Link color matching primary button */
    text-decoration: none;
    font-weight: normal; /* Don't make links bold if parent is bold */
}

.status-area a:hover {
    text-decoration: underline;
}
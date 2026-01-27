// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById("generateBtn");
  const settingsBtn = document.getElementById("settingsBtn");

  if (generateBtn) {
    generateBtn.addEventListener("click", async () => {
      updateStatus("Checking page type...");

      // Get current tab
      try {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tabs[0]) {
          const currentUrl = tabs[0].url;

          if (currentUrl.includes('/edit')) {
            // On edit page - generate description
            updateStatus("Sending generate request...");
            chrome.tabs.sendMessage(tabs[0].id, { type: 'GENERATE_DESCRIPTION' }, (response) => {
              if (chrome.runtime.lastError) {
                updateStatus("Error: " + chrome.runtime.lastError.message);
              } else {
                updateStatus("Descriptions generated!");
              }
            });
          } else if (currentUrl.includes('/shop/products/') &&
            !currentUrl.includes('/new') &&
            /\/shop\/products\/\d+$/.test(currentUrl)) {
            // On show page - copy prompt
            updateStatus("Copying prompt...");
            chrome.tabs.sendMessage(tabs[0].id, { type: 'COPY_PROMPT' }, (response) => {
              if (chrome.runtime.lastError) {
                updateStatus("Error: " + chrome.runtime.lastError.message);
              } else {
                updateStatus("Prompt copied!");
              }
            });
          } else {
            updateStatus("Not on a product page");
          }
        }
      } catch (error) {
        updateStatus("Error: " + error.message);
      }
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      chrome.runtime.openOptionsPage();
    });
  }

  // Update button text based on current page
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && generateBtn) {
      const currentUrl = tabs[0].url;

      if (currentUrl.includes('/edit')) {
        generateBtn.textContent = "✨ Generate Description";
      } else if (currentUrl.includes('/shop/products/') &&
        !currentUrl.includes('/new') &&
        /\/shop\/products\/\d+$/.test(currentUrl)) {
        generateBtn.textContent = "📝 Copy Prompt";
      } else {
        generateBtn.textContent = "✨ Generate Description";
        generateBtn.disabled = true;
        updateStatus("Open a product page first");
      }
    }
  });
});

function updateStatus(message) {
  const statusEl = document.getElementById("status");
  if (statusEl) {
    statusEl.textContent = message;
  }
}
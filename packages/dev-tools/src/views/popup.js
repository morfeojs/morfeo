function onSuccess() {
  const title = document.getElementById('title');
  const text = document.getElementById('text');

  title.innerHTML = '✅ This page is using @morfeo.';
  text.innerHTML = 'Check the morfeo tab to see the design system';
}

function setDefaultTitle() {
  const title = document.getElementById('title');

  title.innerHTML = "😢 This page doesn't appear to use @morfeo";
}

setDefaultTitle();

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  if (tabs && tabs[0]) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'GET_THEME' }, response => {
      if (response) {
        onSuccess();
      }
    });
  }
});

chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === 'MORFEO_DEVTOOLS') {
    port.onMessage.addListener(function (message) {
      if (message.theme) {
        onSuccess();
      }
    });
  }
});

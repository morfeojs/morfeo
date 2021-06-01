function onSuccess() {
  const title = document.getElementById('title');
  const text = document.getElementById('text');
  const shortcut = document.createElement('div');

  if (navigator && navigator.platform.indexOf('Mac') >= 0) {
    shortcut.classList.add('mac-shortcut');
  } else {
    shortcut.classList.add('default-shortcut');
  }

  shortcut.classList.add('shortcut');

  title.innerHTML = '✅ This page is using @morfeo.';
  text.innerHTML = 'Check the morfeo tab to see the design system:';
  text.appendChild(shortcut);
}

function setDefaultTitle() {
  const title = document.getElementById('title');

  title.innerHTML = "😢 This page doesn't appear to use @morfeo";
}

function setResult(response) {
  if (response && response.IS_MORFEO) {
    onSuccess();
    return;
  }
  setDefaultTitle();
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  if (tabs && tabs[0]) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'GET_THEME' }, setResult);
  }
});

chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === 'MORFEO_DEVTOOLS') {
    port.onMessage.addListener(setResult);
  }
});

setDefaultTitle();

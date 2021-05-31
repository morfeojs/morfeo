let theme = {};

window.addEventListener(
  'message',
  event => {
    if (event.data.type && event.data.type === 'MORFEO_DEVTOOLS') {
      theme = event.data.theme;

      const port = chrome.runtime.connect({ name: 'MORFEO_DEVTOOLS' });
      port.postMessage({ action: 'SET_THEME', theme: event.data.theme });
    }
  },
  false,
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'GET_THEME') {
    sendResponse({ theme });
  }
});

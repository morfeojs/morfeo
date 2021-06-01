let theme = {};

window.addEventListener(
  'message',
  event => {
    if (event.data.type && event.data.type === 'MORFEO_DEVTOOLS') {
      theme = event.data.theme;

      const port = chrome.runtime.connect({ name: 'MORFEO_DEVTOOLS' });
      port.postMessage({
        action: 'SET_THEME_ACTION',
        theme: event.data.theme,
        IS_MORFEO: true,
      });
    }
  },
  false,
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const IS_MORFEO = Object.keys(theme).length > 0;
  if (request.action === 'GET_THEME_ACTION') {
    sendResponse({ theme, IS_MORFEO });
  }
});

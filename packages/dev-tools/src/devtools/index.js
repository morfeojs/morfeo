import { theme } from '@morfeo/web';
import { GET_THEME_ACTION, MORFEO_DEVTOOLS } from '../constants';
import { makeSlices } from './utils';

theme.subscribe(makeSlices);

function onPanelCreate() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs[0]) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: GET_THEME_ACTION },
        response => {
          if (response && response.theme) {
            theme.set(response.theme);
          }
        },
      );
    }
  });

  chrome.runtime.onConnect.addListener(function (port) {
    if (port.name === MORFEO_DEVTOOLS) {
      port.onMessage.addListener(function (message) {
        if (message.theme) {
          theme.set(message.theme);
        }
      });
    }
  });
}

function createPanel() {
  chrome.devtools.panels.create(
    `Ⓜ️ Morfeo`,
    'images/logo.png',
    'views/index.html',
    onPanelCreate,
  );
}

createPanel();

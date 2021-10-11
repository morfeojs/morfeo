import { Theme } from '@morfeo/react';
import browser from 'webextension-polyfill';
import { MORFEO_DEVTOOLS } from '../_shared/constants';
import { ActionType } from '../_shared/types';

function sendTheme(theme: Theme) {
  browser.runtime
    .sendMessage({
      type: ActionType.SET,
      theme,
    })
    .then(() => undefined)
    .catch(() => undefined);
}

window.addEventListener(
  'message',
  event => {
    if (event.data && event.data.type === MORFEO_DEVTOOLS) {
      const theme = event.data.theme;

      sendTheme(event.data.theme);

      browser.runtime.onMessage.addListener(request => {
        if (request && request.type === ActionType.GET) {
          sendTheme(theme);
        }
      });
    }
  },
  false,
);

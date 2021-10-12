import browser from 'webextension-polyfill';
import { MORFEO_DEVTOOLS } from '../_shared/constants';
import { ActionType, MorfeoDevToolAction } from '../_shared/types';

function sendTheme({ current, themes }: MorfeoDevToolAction) {
  browser.runtime
    .sendMessage({
      type: ActionType.SET,
      themes,
      current,
    })
    .then(() => undefined)
    .catch(() => undefined);
}

window.addEventListener(
  'message',
  event => {
    if (event.data && event.data.type === MORFEO_DEVTOOLS) {
      const { themes, current } = event.data;
      sendTheme(event.data);

      browser.runtime.onMessage.addListener(request => {
        if (request && request.type === ActionType.GET) {
          sendTheme({ themes, current } as MorfeoDevToolAction);
        }
      });
    }
  },
  false,
);

import browser from 'webextension-polyfill';
import { MORFEO_DEVTOOLS } from '../_shared/constants';
import { ActionType, MorfeoDevToolAction } from '../_shared/types';

function sendTheme({ current, themes, fonts }: MorfeoDevToolAction) {
  browser.runtime
    .sendMessage({
      type: ActionType.SET,
      fonts,
      themes,
      current,
    })
    .then(() => undefined)
    .catch(() => undefined);
}

function getFonts() {
  const fonts = document.querySelectorAll('.morfeo-font');
  let style = '';
  fonts.forEach(font => {
    style += font.innerHTML;
  });

  return style;
}

window.addEventListener(
  'message',
  event => {
    if (event.data && event.data.type === MORFEO_DEVTOOLS) {
      const { themes, current } = event.data;
      const fonts = getFonts();

      sendTheme({ ...event.data, fonts });

      browser.runtime.onMessage.addListener(request => {
        if (request && request.type === ActionType.GET) {
          const fonts = getFonts();
          sendTheme({ themes, current, fonts } as MorfeoDevToolAction);
        }
      });
    }
  },
  false,
);

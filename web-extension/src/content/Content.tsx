import browser from 'webextension-polyfill';
import { MORFEO_DEVTOOLS } from '../_shared/constants';
import { ActionType, MorfeoDevToolAction } from '../_shared/types';

function sendTheme({ theme, fonts }: MorfeoDevToolAction) {
  browser.runtime
    .sendMessage({
      type: ActionType.SET,
      fonts,
      theme,
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

function onMessage(event: MessageEvent) {
  if (event.data && event.data.type === MORFEO_DEVTOOLS) {
    const { theme } = event.data;
    const fonts = getFonts();

    sendTheme({ ...event.data, fonts });

    browser.runtime.onMessage.addListener(request => {
      if (request && request.type === ActionType.GET) {
        const fonts = getFonts();
        sendTheme({ theme, fonts } as MorfeoDevToolAction);
      }
    });
  }
}

window.addEventListener('message', onMessage, false);

export function Content() {
  return null;
}

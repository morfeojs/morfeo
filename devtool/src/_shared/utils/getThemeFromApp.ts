import browser from 'webextension-polyfill';
import { morfeo } from '@morfeo/react';
import { ActionType, MorfeoDevToolAction } from '../types';

function onMessageReceived(message: MorfeoDevToolAction) {
  if (message && message.type === ActionType.SET) {
    morfeo.setTheme('default', message.theme);
    morfeo.useTheme('default');
  }
}

export function getThemeFromApp(): Promise<MorfeoDevToolAction> {
  return new Promise(resolve => {
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then(tabs => {
        const [first] = tabs;
        browser.tabs
          .sendMessage(first.id || 0, { type: ActionType.GET })
          .then(resolve)
          .catch(() => undefined);
      })
      .catch(() => undefined);
  });
}

export function getThemeFromAppAndInitMorfeo() {
  browser.runtime.onMessage.addListener(onMessageReceived);

  getThemeFromApp().then(onMessageReceived);
}

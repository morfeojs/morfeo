import browser from 'webextension-polyfill';
import { ActionType, MorfeoDevToolAction } from '../types';
import { Morfeo, createMorfeo } from '@morfeo/react';

function appendFonts({ fonts }: MorfeoDevToolAction) {
  if (fonts) {
    const style = document.createElement('style');
    style.innerHTML = fonts;
    const STYLE_ID = 'morfeo-imported-fonts';
    style.id = STYLE_ID;
    const oldStyle = document.getElementById(STYLE_ID);

    if (oldStyle) {
      document.head.removeChild(oldStyle);
    }

    document.head.appendChild(style);
  }
}

function onMessageReceived(morfeo: Morfeo, message: MorfeoDevToolAction) {
  if (message && message.type === ActionType.SET) {
    const { theme } = message;
    morfeo.theme.set(theme || {});
    appendFonts(message);
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

export async function getThemeFromAppAndInitMorfeo(
  callback?: (message: MorfeoDevToolAction) => void,
) {
  const morfeo = createMorfeo();

  browser.runtime.onMessage.addListener((message: MorfeoDevToolAction) => {
    if (callback) {
      callback(message);
    }
    onMessageReceived(morfeo, message);
  });

  getThemeFromApp().then((message: MorfeoDevToolAction) => {
    if (callback) {
      callback(message);
    }
    onMessageReceived(morfeo, message);
  });

  return morfeo;
}

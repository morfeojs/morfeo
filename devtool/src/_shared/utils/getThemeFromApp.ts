import browser from 'webextension-polyfill';
import { morfeo, ThemeName } from '@morfeo/react';
import { ActionType, MorfeoDevToolAction } from '../types';

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

function onMessageReceived(message: MorfeoDevToolAction) {
  if (message && message.type === ActionType.SET) {
    const { themes, current } = message;
    const themeNames = Object.keys(themes || {}) as ThemeName[];
    themeNames.forEach(themeName => {
      morfeo.setTheme(themeName, themes[themeName] || {});
    });
    morfeo.setCurrentTheme(current);

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
  browser.runtime.onMessage.addListener((message: MorfeoDevToolAction) => {
    if (callback) {
      callback(message);
    }
    onMessageReceived(message);
  });

  getThemeFromApp().then((message: MorfeoDevToolAction) => {
    if (callback) {
      callback(message);
    }
    onMessageReceived(message);
  });
}

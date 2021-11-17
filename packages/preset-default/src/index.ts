import { morfeo } from '@morfeo/web';
import { Theme } from '@morfeo/spec';
import { loadFontsParams } from './loadFontsParams';
import { darkTheme, lightTheme } from './base';

export function initPreset() {
  morfeo.setTheme('light', lightTheme);
  morfeo.setTheme('dark', darkTheme);
}

declare module '@morfeo/web' {
  export interface Themes {
    light: Theme;
    dark: Theme;
  }
}

export { darkTheme, lightTheme, loadFontsParams };

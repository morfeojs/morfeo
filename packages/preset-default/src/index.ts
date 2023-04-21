import { ThemeName, morfeo } from '@morfeo/web';
import { Theme } from '@morfeo/spec';
import { loadFontsParams } from './loadFontsParams';
import { darkTheme, lightTheme } from './base';

export function initPreset(defaultTheme: ThemeName = 'light') {
  morfeo.setTheme('light', lightTheme);
  morfeo.setTheme('dark', darkTheme);

  morfeo.setCurrentTheme(defaultTheme);
}

declare module '@morfeo/web' {
  export interface Themes {
    light: Theme;
    dark: Theme;
  }
}

export { darkTheme, lightTheme, loadFontsParams };

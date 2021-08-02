import { morfeo } from '@morfeo/core';
import { Theme } from '@morfeo/spec';
import { loadFontsParams } from './loadFontsParams';
import { darkTheme, lightTheme } from './base';

morfeo.setTheme('light', lightTheme);
morfeo.setTheme('dark', darkTheme);

declare module '@morfeo/core' {
  export interface Themes {
    light: Theme;
    dark: Theme;
  }
}

export { darkTheme, lightTheme, loadFontsParams };

import { morfeo, defaultTheme, Theme } from '@morfeo/web';
import { loadFontsParams } from './loadFontsParams';
import { components } from './components';

const theme = {
  ...defaultTheme,
  components: components,
};

export function initPreset() {
  morfeo.theme.set(theme);
}

declare module '@morfeo/web' {
  export interface Themes {
    light: Theme;
    dark: Theme;
  }
}

export { theme, loadFontsParams };

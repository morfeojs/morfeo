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

type LocalTheme = { components: typeof components };

declare module '@morfeo/web' {
  export interface Theme extends LocalTheme {}
}

export { theme, loadFontsParams };

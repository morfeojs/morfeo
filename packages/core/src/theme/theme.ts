import { createTheme } from './createTheme';

export type ThemeHandler = ReturnType<typeof createTheme>;
declare global {
  interface Window {
    __MORFEO_THEME: ThemeHandler;
  }
  module NodeJS {
    interface Global {
      __MORFEO_THEME: ThemeHandler;
    }
  }
}

const theme: ThemeHandler = globalThis.__MORFEO_THEME || createTheme();

Object.freeze(theme);

export default theme;

import {
  morfeo as morfeoCore,
  Morfeo,
  Property,
  Theme,
  ThemeMode,
} from '@morfeo/core';
import { gradientParsers } from './parsers';
import { css } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { deepMerge } from '@morfeo/utils';
import { defaultTheme } from './defaultTheme';

Object.keys(gradientParsers).forEach(property => {
  morfeoCore.parsers.add(
    property as Property,
    gradientParsers[property] as any,
  );
});

export const morfeo = {
  ...morfeoCore,
  css,
  global,
  theme: createThemeWrapper(),
  variables: undefined,
} as any as Morfeo;

function createThemeWrapper() {
  return {
    ...morfeoCore.theme,
    set(...args: Parameters<typeof morfeo.theme.set>) {
      const currentTheme = args[0];
      const { theme, light, dark } = extractCssVariables(
        deepMerge(defaultTheme, currentTheme) as Theme,
      );

      if (!morfeo.variables) {
        morfeo.variables = { light, dark };
      }

      return morfeoCore.theme.set(theme);
    },
  };
}

declare module '@morfeo/core' {
  export interface Morfeo {
    css: typeof css;
    global: typeof global;
    variables: Record<ThemeMode, Record<string, string>>;
  }
}

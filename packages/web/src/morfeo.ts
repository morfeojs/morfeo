import { morfeo, Property, ThemeMode } from '@morfeo/core';
import { gradientParsers } from './parsers';
import { css } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { deepMerge } from '@morfeo/utils';
import { defaultTheme } from './defaultTheme';

Object.keys(gradientParsers).forEach(property => {
  morfeo.parsers.add(property as Property, gradientParsers[property] as any);
});

const coreThemeSetter = morfeo.theme.set;

function themeSetter(...args: Parameters<typeof morfeo.theme.set>) {
  const currentTheme = args[0];
  const { theme, light, dark } = extractCssVariables(
    deepMerge(defaultTheme, currentTheme),
  );

  morfeo.variables = { light, dark };

  return coreThemeSetter(theme);
}

morfeo.css = css;
morfeo.global = global;
morfeo.theme.set = themeSetter;

declare module '@morfeo/core' {
  export interface Morfeo {
    css: typeof css;
    global: typeof global;
    variables: Record<ThemeMode, Record<string, string>>;
  }
}

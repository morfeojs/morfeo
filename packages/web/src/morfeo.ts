import { morfeo, Property, Theme, ThemeMetadata } from '@morfeo/core';
import { deepMerge, DeepPartial } from '@morfeo/utils';
import { gradientParsers } from './parsers';
import { css } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { defaultTheme } from './defaultTheme';
import { responsiveProperty } from './resolvers/responsiveProperty';
import { multiThemeProperty } from './resolvers/multiThemeProperty';
import { ColorScheme } from './types';

Object.keys(gradientParsers).forEach(property => {
  morfeo.parsers.add(property as Property, gradientParsers[property] as any);
});

function onSetTheme(currentTheme: DeepPartial<Theme>) {
  const { theme, variables } = extractCssVariables(
    deepMerge(defaultTheme, currentTheme),
  );

  morfeo.theme.setMetadata(variables as ThemeMetadata);

  return theme;
}

morfeo.css = css;
morfeo.global = global;

morfeo.theme.onSetTheme(onSetTheme);

morfeo.parsers.onResolveProperty(multiThemeProperty);
morfeo.parsers.onResolveProperty(responsiveProperty);

declare module '@morfeo/core' {
  export interface Morfeo {
    css: typeof css;
    global: typeof global;
  }

  export interface ThemeMetadata
    extends Record<ColorScheme, Record<string, string>> {}
}

import { morfeo, Property, Theme } from '@morfeo/core';
import { deepMerge, DeepPartial } from '@morfeo/utils';
import { gradientParsers } from './parsers';
import { css } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { defaultTheme } from './defaultTheme';
import { responsiveProperty } from './resolvers/responsiveProperty';
import { multiThemeProperty } from './resolvers/multiThemeProperty';
import { ColorSchema } from './types';

Object.keys(gradientParsers).forEach(property => {
  morfeo.parsers.add(property as Property, gradientParsers[property] as any);
});

function onSetTheme(currentTheme: DeepPartial<Theme>) {
  const { theme, light, dark } = extractCssVariables(
    deepMerge(defaultTheme, currentTheme),
  );

  morfeo.theme.setMetadata({ light, dark });

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
    extends Record<ColorSchema, Record<string, string>> {}
}

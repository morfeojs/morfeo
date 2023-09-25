import {
  Theme,
  Morfeo,
  Property,
  createMorfeo,
  ThemeMetadata,
} from '@morfeo/core';
import { deepMerge, DeepPartial } from '@morfeo/utils';
import { gradientParsers } from './parsers';
import { createCss } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { defaultTheme } from './defaultTheme';
import { responsiveProperty } from './resolvers/responsiveProperty';
import { multiThemeProperty } from './resolvers/multiThemeProperty';
import { ColorScheme } from './types';

export function createMorfeoWeb(
  initialTheme: DeepPartial<Theme> = defaultTheme,
): Morfeo {
  const instance = createMorfeo();

  function onSetTheme(currentTheme: DeepPartial<Theme>) {
    const { theme, variables } = extractCssVariables(
      deepMerge(defaultTheme, currentTheme),
    );

    instance.theme.setMetadata(variables as ThemeMetadata);

    return theme;
  }

  Object.keys(gradientParsers).forEach(property => {
    instance.parsers.add(
      property as Property,
      gradientParsers[property] as any,
    );
  });

  instance.theme.onSetTheme(onSetTheme);

  instance.parsers.onResolveProperty(multiThemeProperty);
  instance.parsers.onResolveProperty(responsiveProperty);

  instance.theme.set(initialTheme);

  return {
    ...instance,
    css: createCss(instance as Morfeo),
    global,
  };
}

declare module '@morfeo/core' {
  export interface Morfeo {
    css: ReturnType<typeof createCss>;
    global: typeof global;
  }

  export interface ThemeMetadata
    extends Record<ColorScheme, Record<string, string>> {}
}

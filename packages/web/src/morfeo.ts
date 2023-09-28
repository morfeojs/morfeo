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

export type CreateMorfeoOptions = {
  /**
   * Your custom theme that will be used to resolve the styles.
   *
   * @example
   *
   * ```typescript
   * export const morfeo = createMorfeo({ theme: myCustomTheme });
   * ```
   */
  theme?: DeepPartial<Theme>;
  /**
   * If specified all the classes and variables will be prefixed by this value
   *
   * @example
   *
   * ```typescript
   * export const morfeo = createMorfeo({ prefix: 'mrf-' });
   * ```
   *
   * Will generate:
   *
   * ```css
   * .mrf-bg-primary { background-color: var(--mrf-colors-primary) }
   * ```
   */
  prefix?: string;
  /**
   * Specify where the generated CSS will be placed.
   *
   * @default ./src/styles/morfeo.css
   *
   * @example
   *
   * ```typescript
   * export const morfeo = createMorfeo({ output: './src/styles/morfeo.css' });
   * ```
   */
  output?: string;
  /**
   * Specify where the CLI should look to collect styles.
   *
   * @default entryPoints: ["./src/**\/*.{ts,tsx,js,jsx"]
   *
   * @example
   *
   * ```typescript
   * export const morfeo = createMorfeo({ entryPoints: ["./src/**\/*.{ts,tsx,js,jsx"] });
   * ```
   */
  entryPoints?: string[];
};

export function createMorfeoWeb({
  theme: initialTheme,
  ...options
}: CreateMorfeoOptions = {}): Morfeo {
  const instance = createMorfeo();

  function onSetTheme(currentTheme: DeepPartial<Theme>) {
    const { theme, variables } = extractCssVariables(
      deepMerge(defaultTheme, currentTheme),
      options.prefix,
    );

    instance.theme.setMetadata({ ...options, variables } as ThemeMetadata);

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

  instance.theme.set(initialTheme || defaultTheme);

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

  export interface ThemeMetadata extends CreateMorfeoOptions {
    variables: Record<ColorScheme, Record<string, string>>;
  }
}

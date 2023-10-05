import {
  Theme,
  Morfeo,
  Property,
  createMorfeo,
  ThemeMetadata,
} from '@morfeo/core';
import { DeepPartial, deepMerge } from '@morfeo/utils';
import { gradientParsers } from './parsers';
import { createCss } from './css';
import { global } from './global';
import { extractCssVariables } from './utils/extractCssVariables';
import { defaultTheme } from './defaultTheme';
import { responsiveProperty } from './resolvers/responsiveProperty';
import { multiThemeProperty } from './resolvers/multiThemeProperty';
import { ColorScheme } from './types';

export type CreateMorfeoOptions<T extends Partial<Theme>> = {
  /**
   * Your custom theme that will be used to resolve the styles.
   *
   * @example
   *
   * ```typescript
   * export const morfeo = createMorfeo({ theme: myCustomTheme });
   * ```
   */
  theme?: DeepPartial<T>;
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

type WithDefaultTheme<T extends Partial<Theme>> = typeof defaultTheme & T;

export function createMorfeoWeb<T extends Partial<Theme>>({
  theme: initialTheme,
  ...options
}: CreateMorfeoOptions<T> = {}): Morfeo<WithDefaultTheme<T>> {
  type MergedTheme = WithDefaultTheme<T>;

  const instance = createMorfeo<MergedTheme>();

  function onSetTheme(currentTheme: Partial<MergedTheme>) {
    const { theme, variables } = extractCssVariables(
      deepMerge(defaultTheme, currentTheme) as MergedTheme,
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

  instance.theme.onSetTheme(onSetTheme as any);

  instance.parsers.onResolveProperty(multiThemeProperty);
  instance.parsers.onResolveProperty(responsiveProperty);

  instance.theme.set(initialTheme || (defaultTheme as any));

  return {
    ...instance,
    css: createCss<MergedTheme>(instance as any),
    global: global<MergedTheme>,
  };
}

declare module '@morfeo/core' {
  export interface Morfeo<T extends Partial<Theme>> {
    css: ReturnType<typeof createCss<T>>;
    global: typeof global<T>;
  }

  export interface ThemeMetadata
    extends Omit<CreateMorfeoOptions<Theme>, 'theme'> {
    variables: Record<ColorScheme, Record<string, string>>;
  }
}

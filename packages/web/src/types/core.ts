import { Theme, Property, MorfeoStyle, AllProperties } from '@morfeo/core';
import { Properties } from 'csstype';
import { BreakPoint, BreakPoints } from './breakpoints';

import { ColorScheme } from './schemes';
import { defaultTheme } from '../defaultTheme';

type MultiThemeableSlice<V> =
  | V
  | {
      [key in ColorScheme]?: V;
    };

export type ResponsiveValue<V> = {
  default?: V;
} & {
  [K in BreakPoint]?: V;
};

export type ColorSchemebleValue<V> = {
  [K in ColorScheme]?: V;
};

type CssTypeProperties = Omit<Properties<string | number>, Property>;

type AcceptRaw<V> = `raw:${string}` | V;

type WebPropertyValue<V> =
  | AcceptRaw<V>
  | ResponsiveValue<AcceptRaw<V>>
  | ColorSchemebleValue<AcceptRaw<V> | ResponsiveValue<AcceptRaw<V>>>;

type CssStyle = {
  [K in keyof CssTypeProperties]: WebPropertyValue<CssTypeProperties[K]>;
};

type BaseWebStyle<T extends Partial<Theme>> = CssStyle & {
  [K in Property]?: AllProperties[K] extends keyof T
    ? WebPropertyValue<keyof T[AllProperties[K]]>
    : WebPropertyValue<keyof Theme[AllProperties[K]]>;
};

type WebStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'] = keyof T['components'],
> = Omit<BaseWebStyle<T>, 'componentName' | 'variant' | 'state'> & {
  [key: `&${string}`]: MorfeoStyle<T, C>;
};

type WebTheme = typeof defaultTheme & {
  mediaQueries: { [K in keyof BreakPoints]?: string };
};

declare module '@morfeo/core' {
  export interface CustomStyle<
    T extends Partial<Theme>,
    C extends keyof T['components'] = keyof T['components'],
  > extends WebStyle<T, C> {}

  export interface ResolvedStyle extends Properties<string | number> {}

  export interface CustomTheme extends WebTheme {}
}

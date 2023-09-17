import {
  Theme,
  Colors,
  Shadows,
  Property,
  Gradients,
  AllProperties,
} from '@morfeo/core';
import { Properties } from 'csstype';
import { BreakPoint, BreakPoints } from './breakpoints';
import { MediaQueries } from './mediaQueries';
import { ColorSchema } from './schemas';

type MultiThemeableSlice<T> = {
  [K in keyof T]:
    | T[K]
    | {
        [key in ColorSchema]?: T[K];
      };
};

export type ResponsiveValue<V> = {
  default?: V;
} & {
  [K in BreakPoint]?: V;
};

type ColorSchemableValue<V> = {
  dark?: V;
  light?: V;
};

type CssTypeProperties = Omit<Properties<string | number>, Property>;

type AcceptRaw<V> = `raw:${string}` | V;

type WebPropertyValue<V> =
  | AcceptRaw<V>
  | ResponsiveValue<AcceptRaw<V>>
  | ColorSchemableValue<AcceptRaw<V> | ResponsiveValue<AcceptRaw<V>>>;

type CssStyle = {
  [K in keyof CssTypeProperties]: WebPropertyValue<CssTypeProperties[K]>;
};

type BaseWebStyle = CssStyle & {
  [K in Property]?: WebPropertyValue<keyof Theme[AllProperties[K]]>;
};

type WebStyle = Omit<BaseWebStyle, 'componentName' | 'variant' | 'state'> & {
  [key: `&:${string}`]: WebStyle;
};

type WebTheme = {
  colors: MultiThemeableSlice<Colors>;
  shadows: MultiThemeableSlice<Shadows>;
  gradients: MultiThemeableSlice<Gradients>;
  breakpoints: BreakPoints;
  mediaQueries: MediaQueries;
};

declare module '@morfeo/core' {
  export interface CustomStyle extends WebStyle {}
  export interface ResolvedStyle extends Properties<string | number> {}
  export interface Theme extends WebTheme {}
}

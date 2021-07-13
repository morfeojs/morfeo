import { Style, ResponsiveValue } from '@morfeo/core';
import { Properties, StandardProperties } from 'csstype';
import { PseudoProperty } from './pseudos';

type CssTypeProperties = Properties<string | number>;

type WebStyle = {
  [K in PseudoProperty]?: Style;
} &
  {
    [K in keyof CssTypeProperties]:
      | CssTypeProperties[K]
      | ResponsiveValue<CssTypeProperties[K]>;
  };

declare module '@morfeo/core' {
  export interface CustomStyle extends WebStyle {}
  export interface ResolvedStyle extends Properties<string | number> {}
}

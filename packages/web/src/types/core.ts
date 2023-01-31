import { Style, ResponsiveValue } from '@morfeo/core';
import { Properties } from 'csstype';

type CssTypeProperties = Properties<string | number>;

type WebStyle = {
  [K in keyof CssTypeProperties]:
    | CssTypeProperties[K]
    | ResponsiveValue<CssTypeProperties[K]>;
} & Record<`&${string}`, Style>;

declare module '@morfeo/core' {
  export interface CustomStyle extends WebStyle {}
  export interface ResolvedStyle extends Properties<string | number> {}
}

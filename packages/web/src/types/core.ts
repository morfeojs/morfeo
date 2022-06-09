import { Style, ResponsiveValue } from '@morfeo/core';
import { Properties } from 'csstype';
import { PseudoProperty } from './pseudos';
import {
  KeyFrames,
  Animations,
  Animation,
  AnimationProperty,
} from './animations';

type CssTypeProperties = Properties<string | number>;

type MorfeoWebStyle = {
  [K in PseudoProperty]?: Style;
} & {
  [K in AnimationProperty]?: Animation;
};

type WebStyle = MorfeoWebStyle &
  Omit<
    {
      [K in keyof CssTypeProperties]:
        | CssTypeProperties[K]
        | ResponsiveValue<CssTypeProperties[K]>;
    },
    keyof MorfeoWebStyle
  >;

declare module '@morfeo/core' {
  export interface CustomStyle extends WebStyle {}
  export interface ResolvedStyle extends Properties<string | number> {}
  export interface Theme {
    keyframes: KeyFrames;
    animations: Animations;
  }
}

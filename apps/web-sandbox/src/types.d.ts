import { Theme } from '@morfeo/core';
import { components } from './theme';

type LocalComponents = typeof components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
  export interface Themes {
    light: Theme;
    dark: Theme;
  }
}

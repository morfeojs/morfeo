import { Theme } from '@morfeo/react';
import { components } from './morfeo-components';

type LocalComponents = typeof components;
type LocalFonts = {
  mono: string;
};
type LocalThemes = {
  dark: Theme;
  light: Theme;
};
declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
  export interface Fonts extends LocalFonts {}
  export interface Themes extends LocalThemes {}
}

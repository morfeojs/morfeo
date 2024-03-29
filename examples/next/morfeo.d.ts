import '@morfeo/react';

import { theme as localTheme } from './src/morfeo';

type LocalTheme = typeof localTheme;

type LocalGradients = LocalTheme['gradients'];
type LocalFontSizes = LocalTheme['fontSizes'];
type LocalComponents = LocalTheme['components'];

declare module '@morfeo/react' {
  export interface Gradients extends LocalGradients {}
  export interface FontSizes extends LocalFontSizes {}
  export interface Components extends LocalComponents {}
}

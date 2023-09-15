/* eslint-disable @typescript-eslint/no-empty-interface */
import '@morfeo/web';

import localTheme from './morfeo.theme';

type LocalTheme = typeof localTheme;

type LocalGradients = LocalTheme['gradients'];
type LocalFontSizes = LocalTheme['fontSizes'];
type LocalComponents = LocalTheme['components'];

declare module '@morfeo/web' {
  export interface Gradients extends LocalGradients {}
  export interface FontSizes extends LocalFontSizes {}
  export interface Components extends LocalComponents {}
}

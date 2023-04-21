import '@morfeo/spec';

import localTheme from './morfeo.theme';

type LocalTheme = typeof localTheme;

type LocalGradients = LocalTheme['gradients'];
type LocalFontSizes = LocalTheme['fontSizes'];
type LocalComponents = LocalTheme['components'];

declare module '@morfeo/spec' {
  export interface Gradients extends LocalGradients {}
  export interface FontSizes extends LocalFontSizes {}
  export interface Components extends LocalComponents {}
}

import { colors } from './theme/colors';
import { defaultTheme } from './theme';

type LocalColors = typeof colors;
type LocalComponents = typeof defaultTheme.components;

declare module '@morfeo/native' {
  export interface Colors extends LocalColors {}

  export interface Components extends LocalComponents {}
}

import { colors } from './theme/colors';

type LocalColors = typeof colors;

declare module '@morfeo/native' {
  export interface Colors extends LocalColors {}
}

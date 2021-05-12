import { lightTheme } from './theme';

type LocalComponents = typeof lightTheme.components;

declare module '@morfeo/web' {
  export interface Components extends LocalComponents {}
}

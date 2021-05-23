import { lightTheme } from './theme';

type LocalComponents = typeof lightTheme.components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
}

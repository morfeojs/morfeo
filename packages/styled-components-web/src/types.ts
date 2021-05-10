import { Theme } from '@morfeo/web';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

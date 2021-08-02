import { components } from './theme';

type LocalComponents = typeof components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
}

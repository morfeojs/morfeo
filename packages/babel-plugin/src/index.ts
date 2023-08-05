import { MorfeoBabelResult } from './types';

export { default } from './plugin';
export * from './types';

declare module '@babel/core' {
  export interface BabelFileMetadata {
    morfeo?: MorfeoBabelResult;
  }
}

export { default } from './plugin';

declare module '@babel/core' {
  export interface BabelFileMetadata {
    morfeo?: string;
  }
}

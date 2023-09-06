import { morfeo } from '@morfeo/css';
import { component } from './component';
import '@morfeo/css';

// @ts-ignore
morfeo.component = component;
declare module '@morfeo/css' {
  export interface Morfeo {
    component: typeof component;
  }
}

export * from '@morfeo/web';
export * from '@morfeo/hooks';

export { useStyle, useStyles } from './hooks';

import * as MorfeoWeb from '@morfeo/web';
import { component } from './component';

declare module '@morfeo/web' {
  export interface Morfeo {
    component: typeof component;
  }
}

MorfeoWeb.morfeo.component = component;

export * from '@morfeo/web';
export * from '@morfeo/hooks';

export { useStyle, useStyles } from './hooks';

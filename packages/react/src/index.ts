import { Morfeo, createMorfeo } from '@morfeo/web';
import { createMorfeoComponent } from './component';

declare module '@morfeo/web' {
  export interface Morfeo {
    component: ReturnType<typeof createMorfeoComponent>;
  }
}

function createReactMorfeo(...args: Parameters<typeof createMorfeo>): Morfeo {
  const morfeo = createMorfeo(...args);
  const component = createMorfeoComponent(morfeo);

  return {
    ...morfeo,
    component,
  };
}

export * from '@morfeo/web';
export * from '@morfeo/hooks';

export { useStyle, useStyles } from './hooks';
export { createReactMorfeo as createMorfeo };

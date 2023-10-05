import { Morfeo, Theme, createMorfeo } from '@morfeo/web';
import { createMorfeoComponent } from './component';

declare module '@morfeo/web' {
  export interface Morfeo<T extends Partial<Theme>> {
    component: ReturnType<typeof createMorfeoComponent<T>>;
  }
}

function createReactMorfeo<T extends Partial<Theme>>(
  ...args: Parameters<typeof createMorfeo<T>>
): Morfeo<T> {
  const morfeo = createMorfeo(...args);
  const component = createMorfeoComponent<T>(morfeo as any);

  return {
    ...morfeo,
    component,
  } as any as Morfeo<T>;
}

export * from '@morfeo/web';
export * from '@morfeo/hooks';

export { useStyle, useStyles } from './hooks';
export { createReactMorfeo as createMorfeo };

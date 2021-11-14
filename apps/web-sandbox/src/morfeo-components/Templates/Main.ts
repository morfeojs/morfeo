import { ComponentConfig, Size } from '@morfeo/react';

export const Main: ComponentConfig = {
  tag: 'main',
  style: {
    componentName: 'Box',
    width: '100',
    minHeight: 'calc(100vh - 260px)' as Size,
  },
  variants: {},
  meta: {
    devtoolConfig: {
      hide: true,
    },
  },
};

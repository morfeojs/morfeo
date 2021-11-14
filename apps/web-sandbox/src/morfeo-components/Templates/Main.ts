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
      style: {
        size: '100',
        bg: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

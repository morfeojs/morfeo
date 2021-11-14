import { ComponentConfig } from '@morfeo/react';

export const Page: ComponentConfig = {
  tag: 'div',
  style: {
    componentName: 'Box',
    width: '100',
    minHeight: '100vh',
    bg: 'background',
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

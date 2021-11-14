import { ComponentConfig, Size } from '@morfeo/react';

export const Box: ComponentConfig = {
  tag: 'div',
  style: {
    position: 'relative',
    fontFamily: 'default',
    boxSizing: 'border-box',
  },
  variants: {
    block: {
      style: {
        display: 'block',
      },
    },
    column: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
    },
    row: {
      style: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
  },
  meta: {
    devtoolConfig: {
      style: {
        size: '80px' as Size,
        bg: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

import { ComponentConfig, Size } from '@morfeo/react';

export const Container: ComponentConfig = {
  tag: 'div',
  style: {
    componentName: 'Box',
    width: {
      xs: '100',
      sm: '100',
      md: '960px' as Size,
      lg: '960px' as Size,
    },
    px: {
      xs: 's',
      sm: 's',
      md: 'xs',
      lg: 'xs',
    },
    color: 'text',
  },
  variants: {
    fluid: {
      style: {
        width: '100',
      },
    },
    noGutter: {
      style: {
        px: 'none',
      },
    },
    gridGutter: {
      style: {
        px: {
          xs: '2xs',
          sm: '2xs',
          md: 'none',
          lg: 'none',
        },
      },
    },
  },
  meta: {
    devtoolConfig: {
      style: {
        bg: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

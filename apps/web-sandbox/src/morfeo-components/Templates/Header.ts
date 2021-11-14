import { ComponentConfig, Size } from '@morfeo/react';

type HeaderVariant = 'primary' | 'primary.fixed' | 'fixed';

export const Header: ComponentConfig<HeaderVariant> = {
  tag: 'header',
  style: {
    componentName: 'Box',
    display: 'flex',
    alignItems: 'center',
    px: {
      xs: 's',
      sm: 's',
      md: 'm',
      lg: 'm',
    },
    width: '100',
    minHeight: '60px' as Size,
    color: 'text',
  },
  variants: {
    primary: {
      style: {
        bg: 'primary',
        color: 'white',
      },
    },
    'primary.fixed': {
      style: {
        position: 'fixed',
        top: 'none',
        left: 'none',
        bg: 'primary',
        color: 'white',
        zIndex: 'highest',
      },
    },
    fixed: {
      style: {
        position: 'fixed',
        top: 'none',
        left: 'none',
        zIndex: 'highest',
      },
    },
  },
  meta: {
    devtoolConfig: {
      hide: true,
    },
  },
};

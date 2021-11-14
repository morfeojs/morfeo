import { ComponentConfig, Size } from '@morfeo/react';

type FooterVariant = 'primary';

export const Footer: ComponentConfig<FooterVariant> = {
  tag: 'footer',
  style: {
    componentName: 'Box',
    width: '100',
    py: '2xl',
    minHeight: '200px' as Size,
    px: {
      xs: 's',
      sm: 's',
      md: 'm',
      lg: 'm',
    },
    color: 'text',
  },
  variants: {
    primary: {
      style: {
        bg: 'primary',
        color: 'white',
      },
    },
  },
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

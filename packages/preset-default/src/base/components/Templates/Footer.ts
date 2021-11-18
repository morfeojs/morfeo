import { ComponentConfig, Size } from '@morfeo/spec';

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
      hide: true,
    },
  },
};

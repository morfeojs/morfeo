export const Footer = {
  tag: 'footer',
  states: {},
  style: {
    componentName: 'Box',
    width: '100',
    py: '2xl',
    minHeight: 'raw:200px',
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
      states: {},
    },
  },
  meta: {
    devtoolConfig: {
      hide: true,
    },
  },
};

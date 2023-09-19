export const Header = {
  tag: 'header',
  states: {},
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
    minHeight: 'raw:60px',
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
    'primary.fixed': {
      style: {
        position: 'fixed',
        top: 'none',
        left: 'none',
        bg: 'primary',
        color: 'white',
        zIndex: 'highest',
      },
      states: {},
    },
    fixed: {
      style: {
        position: 'fixed',
        top: 'none',
        left: 'none',
        zIndex: 'highest',
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

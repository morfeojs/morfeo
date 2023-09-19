export const Container = {
  tag: 'div',
  states: {},
  style: {
    componentName: 'Box',
    width: {
      xs: '100',
      sm: '100',
      md: 'raw:960px',
      lg: 'raw:960px',
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
      states: {},
    },
    noGutter: {
      style: {
        px: 'none',
      },
      states: {},
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
      states: {},
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

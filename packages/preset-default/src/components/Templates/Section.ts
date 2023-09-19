export const Section = {
  tag: 'section',
  style: {
    componentName: 'Box',
    width: '100',
    py: '2xl',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  states: {},
  variants: {
    quarter: {
      style: {
        height: '25vh',
      },
      states: {},
    },
    half: {
      style: {
        height: '50vh',
      },
      states: {},
    },
    full: {
      style: {
        height: '100vh',
      },
      states: {},
    },
    'quarter.primary': {
      style: {
        bg: 'primary',
        height: '25vh',
      },
      states: {},
    },
    'half.primary': {
      style: {
        bg: 'primary',
        height: '50vh',
      },
      states: {},
    },
    'full.primary': {
      style: {
        bg: 'primary',
        height: '100vh',
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

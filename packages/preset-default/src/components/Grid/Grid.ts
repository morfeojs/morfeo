export const Grid = {
  tag: 'div',
  style: {
    componentName: 'Box',
    variant: 'row',
  },
  states: {},
  variants: {
    item: {
      style: {
        p: 'xs',
        width: {
          xs: '100',
          sm: '50',
          md: '25',
          lg: '25',
        },
      },
      states: {},
    },
    'item.1': {
      style: {
        p: {
          xs: 'xs',
          sm: 'xs',
          md: 'xs',
          lg: 'xs',
        },
        width: 'raw:8.3%',
      },
      states: {},
    },
    'item.2': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: 'raw:16.6%',
      },
      states: {},
    },
    'item.3': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: 'raw:25%',
      },
      states: {},
    },
    'item.4': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: 'raw:33.3%',
      },
      states: {},
    },
    'item.5': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: 'raw:41.6%',
      },
      states: {},
    },
    'item.6': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: 'raw:50%',
      },
      states: {},
    },
    'item.7': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        p: '2xs',
        minWidth: 'raw:58.3%',
      },
      states: {},
    },
    'item.8': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: 'raw:66.6%',
      },
      states: {},
    },
    'item.9': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: '75',
      },
      states: {},
    },
    'item.10': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: 'raw:83.3%',
      },
      states: {},
    },
    'item.11': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: 'raw:91.6%',
      },
      states: {},
    },
    'item.12': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: 'raw:100%',
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

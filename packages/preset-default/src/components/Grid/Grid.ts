import { ComponentConfig, Size } from '@morfeo/web';

type GridVariant =
  | 'item'
  | 'item.1'
  | 'item.2'
  | 'item.3'
  | 'item.4'
  | 'item.5'
  | 'item.6'
  | 'item.7'
  | 'item.8'
  | 'item.9'
  | 'item.10'
  | 'item.11'
  | 'item.12';

export const Grid: ComponentConfig<GridVariant> = {
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
        width: '8.3%' as Size,
      },
      states: {},
    },
    'item.2': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: '16.6%' as Size,
      },
      states: {},
    },
    'item.3': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: '25%' as Size,
      },
      states: {},
    },
    'item.4': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: '33.3%' as Size,
      },
      states: {},
    },
    'item.5': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: '41.6%' as Size,
      },
      states: {},
    },
    'item.6': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        width: '50%' as Size,
      },
      states: {},
    },
    'item.7': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        p: '2xs',
        minWidth: '58.3%' as Size,
      },
      states: {},
    },
    'item.8': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: '66.6%' as Size,
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
        minWidth: '83.3%' as Size,
      },
      states: {},
    },
    'item.11': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: '91.6%' as Size,
      },
      states: {},
    },
    'item.12': {
      style: {
        componentName: 'Grid',
        variant: 'item.1',
        minWidth: '100%' as Size,
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

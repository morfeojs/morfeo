import { ComponentConfig, Size } from '@morfeo/spec';

type BoxVariant = 'block' | 'column' | 'row';

export const Box: ComponentConfig<BoxVariant> = {
  tag: 'div',
  style: {
    position: 'relative',
    fontFamily: 'default',
    boxSizing: 'border-box',
  },
  variants: {
    block: {
      style: {
        display: 'block',
      },
    },
    column: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
    },
    row: {
      style: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
  },
  meta: {
    devtoolConfig: {
      style: {
        size: '80px' as Size,
        bg: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

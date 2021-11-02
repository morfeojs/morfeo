import { ComponentConfig } from '@morfeo/react';

export const Box: ComponentConfig = {
  tag: 'div',
  style: {
    fontFamily: 'regular'
  },
  variants: {
    flexRow: {
      style: {
        display: 'flex',
        flexDirection: 'row'
      }
    },
    flexColumn: {
      style: {
        flexDirection: 'column'
      }
    }
  },
  meta: {
    description: 'a simple div',
    devtoolConfig: {
      background: 'background',
      style: {
        width: '80px',
        height: '80px',
        backgroundColor: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  }
} as ComponentConfig;

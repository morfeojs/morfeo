export const Box = {
  tag: 'div',
  style: {
    position: 'relative',
    fontFamily: 'default',
    boxSizing: 'border-box',
  },
  states: {},
  variants: {
    block: {
      style: {
        display: 'block',
      },
      states: {},
    },
    column: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
      states: {},
    },
    row: {
      style: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      states: {},
    },
  },
  meta: {
    devtoolConfig: {
      style: {
        size: 'raw:80px',
        bg: 'gray.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

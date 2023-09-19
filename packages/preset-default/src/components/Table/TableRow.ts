export const TableRow = {
  tag: 'tr',
  states: {},
  style: {
    '&:nth-child(even)': {
      bg: 'raw:rgba(100,100,100,0.1)',
    },
    '&:last-child': {
      borderBottom: 'strong',
    },
  },
  variants: {},
};

export const TableRowDark = {
  tag: 'tr',
  states: {},
  style: {
    '&:nth-child(even)': {
      bg: 'raw:rgba(255,255,255,0.1)',
    },
    '&:last-child': {
      borderBottom: 'strong',
    },
  },
  variants: {},
};

import { Color, ComponentConfig } from '@morfeo/spec';

export const TableRow: ComponentConfig = {
  tag: 'tr',
  states: {},
  style: {
    '&:nth-child(even)': {
      bg: 'rgba(100,100,100,0.1)' as Color,
    },
    '&:last-child': {
      borderBottom: 'strong',
    },
  },
  variants: {},
};

export const TableRowDark: ComponentConfig = {
  tag: 'tr',
  states: {},
  style: {
    '&:nth-child(even)': {
      bg: 'rgba(255,255,255,0.1)' as Color,
    },
    '&:last-child': {
      borderBottom: 'strong',
    },
  },
  variants: {},
};

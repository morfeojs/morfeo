import { ComponentConfig } from '@morfeo/react';

export const Hr: ComponentConfig = {
  tag: 'hr',
  style: {
    width: '100',
    border: 'thin',
    mb: 'l',
  },
  variants: {
    primary: {
      style: {
        borderColor: 'primary',
      },
    },
    reduced: {
      style: {
        mt: 'none',
        pt: 'none',
        mb: 'xs',
      },
    },
    'reduced.primary': {
      style: {
        borderColor: 'primary',
        mt: 'none',
        pt: 'none',
        mb: 'xs',
      },
    },
  },
};

import { ComponentConfig } from '@morfeo/spec';

type HrVariant = 'primary' | 'reduced' | 'reduced.primary';

export const Hr: ComponentConfig<HrVariant> = {
  tag: 'hr',
  style: {
    width: '100',
    border: 'thin',
    mb: 'l',
  },
  states: {},
  variants: {
    primary: {
      style: {
        borderColor: 'primary',
      },
      states: {},
    },
    reduced: {
      style: {
        mt: 'none',
        pt: 'none',
        mb: 'xs',
      },
      states: {},
    },
    'reduced.primary': {
      style: {
        borderColor: 'primary',
        mt: 'none',
        pt: 'none',
        mb: 'xs',
      },
      states: {},
    },
  },
};

import { ComponentConfig } from '@morfeo/react';

type SectionVariant =
  | 'quarter'
  | 'half'
  | 'full'
  | 'quarter.primary'
  | 'half.primary'
  | 'full.primary';

export const Section: ComponentConfig<SectionVariant> = {
  tag: 'section',
  style: {
    componentName: 'Box',
    width: '100',
    py: '2xl',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  variants: {
    quarter: {
      style: {
        height: '25vh',
      },
    },
    half: {
      style: {
        height: '50vh',
      },
    },
    full: {
      style: {
        height: '100vh',
      },
    },
    'quarter.primary': {
      style: {
        bg: 'primary',
        height: '25vh',
      },
    },
    'half.primary': {
      style: {
        bg: 'primary',
        height: '50vh',
      },
    },
    'full.primary': {
      style: {
        bg: 'primary',
        height: '100vh',
      },
    },
  },
  meta: {
    devtoolConfig: {
      hide: true,
    },
  },
};

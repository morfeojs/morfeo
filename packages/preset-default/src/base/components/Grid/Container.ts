import { ComponentConfig, Size } from '@morfeo/spec';

type ContainerVariant = 'fluid' | 'noGutter' | 'gridGutter';

export const Container: ComponentConfig<ContainerVariant> = {
  tag: 'div',
  states: {},
  style: {
    componentName: 'Box',
    width: {
      xs: '100',
      sm: '100',
      md: '960px' as Size,
      lg: '960px' as Size,
    },
    px: {
      xs: 's',
      sm: 's',
      md: 'xs',
      lg: 'xs',
    },
    color: 'text',
  },
  variants: {
    fluid: {
      style: {
        width: '100',
      },
      states: {},
    },
    noGutter: {
      style: {
        px: 'none',
      },
      states: {},
    },
    gridGutter: {
      style: {
        px: {
          xs: '2xs',
          sm: '2xs',
          md: 'none',
          lg: 'none',
        },
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

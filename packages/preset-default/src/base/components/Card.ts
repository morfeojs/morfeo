import { ComponentConfig, Size } from '@morfeo/spec';

type CardVariant =
  | 'hoverable'
  | 'primary'
  | 'warning'
  | 'error'
  | 'success'
  | 'basic'
  | 'outlined'
  | 'outlined.primary'
  | 'outlined.warning'
  | 'outlined.error'
  | 'outlined.success';

export const Card: ComponentConfig<CardVariant> = {
  tag: 'div',
  style: {
    componentName: 'Box',
    borderRadius: 'm',
    shadow: 'light',
    fontFamily: 'default',
    color: 'text',
    bg: 'background',
    overflow: 'hidden',
    border: 'none',
    position: 'relative',
  },
  variants: {
    hoverable: {
      style: {
        cursor: 'pointer',
        transition: 'medium',
        '&:hover': {
          transform: 'translateY(-5px)',
          shadow: 'strong',
        },
      },
    },
    primary: {
      style: {
        bg: 'primary',
        color: 'white',
      },
    },
    warning: {
      style: {
        bg: 'warning',
        color: 'white',
      },
    },
    error: {
      style: {
        bg: 'error',
        color: 'white',
      },
    },
    success: {
      style: {
        bg: 'success',
        color: 'white',
      },
    },
    basic: {
      style: {
        shadow: 'none',
      },
      meta: {
        devtoolConfig: {
          background: 'gray.lightest',
        },
      },
    },
    outlined: {
      style: {
        componentName: 'Card',
        variant: 'basic',
        border: 'thin',
        shadow: 'none',
      },
      meta: {
        devtoolConfig: {
          background: 'white',
        },
      },
    },
    'outlined.primary': {
      style: {
        componentName: 'Card',
        variant: 'outlined',
        borderColor: 'primary',
        shadow: 'none',
      },
    },
    'outlined.warning': {
      style: {
        componentName: 'Card',
        variant: 'outlined',
        borderColor: 'warning',
        shadow: 'none',
      },
    },
    'outlined.error': {
      style: {
        componentName: 'Card',
        variant: 'outlined',
        borderColor: 'error',
        shadow: 'none',
      },
    },
    'outlined.success': {
      style: {
        componentName: 'Card',
        variant: 'outlined',
        borderColor: 'success',
        shadow: 'none',
      },
    },
  },
  meta: {
    devtoolConfig: {
      style: {
        size: '80px' as Size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

const variantKeys = Object.keys(Card.variants) as CardVariant[];

export const CardDark: ComponentConfig<CardVariant> = {
  ...Card,
  style: {
    ...Card.style,
    shadow: 'none',
    border: 'thin',
    borderColor: 'text',
  },
  variants: {
    ...(variantKeys.reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          ...Card.variants[key],
          style: {
            ...Card.variants[key].style,
            ...(key.indexOf('outlined') === -1 && { border: 'none' }),
          },
        },
      }),
      {},
    ) as any),
    hoverable: {
      ...Card.variants.hoverable,
      style: {
        ...Card.variants.hoverable.style,
        border: 'thin',
        '&:hover': {
          shadow: 'none',
          borderColor: 'secondary',
        },
      },
    },
  },
};

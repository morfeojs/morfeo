import { ComponentConfig } from '@morfeo/react';

export const Button: ComponentConfig = {
  tag: 'button',
  style: {
    py: 'xxs',
    px: 'm',
    bg: 'primary',
    color: 'white',
    cursor: 'pointer',
    corner: 'xs',
    border: 'none',
    outline: 'none',
    fontSize: 'm',
    fontWeight: 'regular',
    boxSizing: 'border-box',
    '&:hover': {
      opacity: 'medium',
    },
  },
  variants: {
    inverted: {
      style: {
        bg: 'transparent',
        border: 'primary',
        borderColor: 'primary',
        color: 'textColor',
      },
    },
    disabled: {
      style: {
        bg: 'grey.light',
        color: 'light',
        pointerEvent: 'none',
        cursor: 'default',
        '&:hover': {
          opacity: 1,
        },
      },
    },
    error: {
      style: {
        bg: 'error',
        color: 'white',
      },
    },
    warning: {
      style: {
        bg: 'warning',
        color: 'white',
      },
    },
    success: {
      style: {
        bg: 'success',
      },
    },
    round: {
      style: {
        corner: 'round',
        px: 'none',
        py: 'none',
        size: 'xxl',
      },
      meta: {
        devtoolConfig: {
          label: 'B',
        },
      },
    },
    'round.inverted': {
      style: {
        bg: 'transparent',
        border: 'primary',
        borderColor: 'primary',
        color: 'textColor',
        corner: 'round',
        px: 'none',
        py: 'none',
        size: 'xxl',
      },
      meta: {
        devtoolConfig: {
          label: 'B',
        },
      },
    },
  },
  meta: {
    tags: ['ui', 'form'],
    description: 'Button component',
    devtoolConfig: {
      background: 'background',
    },
  },
} as ComponentConfig;

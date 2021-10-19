import { ComponentConfig } from '@morfeo/react';

export const Button: ComponentConfig = {
  tag: 'button',
  style: {
    py: 'xxs',
    px: 'xs',
    bg: 'primary',
    color: 'invertedTextColor',
    cursor: 'pointer',
    corner: 'xs',
    border: 'none',
    outline: 'none',
    fontSize: 'm',
    fontWeight: 'bold',
  },
  variants: {
    round: {
      style: {
        corner: 'round',
        px: 'none',
        py: 'none',
        size: 'xxl',
      },
    },
    side: {
      style: {
        borderTopRightRadius: 'round',
        borderBottomRightRadius: 'round',
        borderTopLeftRadius: 'none',
        borderBottomLeftRadius: 'none',
        px: 'none',
        py: 'none',
      },
    },
    error: {
      style: {
        bg: 'gray.lightest',
        color: 'error',
      },
    },
    success: {
      style: {
        bg: 'success',
      },
    },
  },
  meta: {
    tags: ['ui', 'form'],
    description: 'Button component',
  },
} as ComponentConfig;

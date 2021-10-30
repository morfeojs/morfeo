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
      opacity: 'medium'
    }
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

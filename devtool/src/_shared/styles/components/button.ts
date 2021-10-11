import { ComponentConfig } from '@morfeo/react';

export const Button: ComponentConfig = {
  tag: 'button',
  style: {
    py: 'xs',
    px: 's',
    bg: 'primary',
    color: 'invertedTextColor',
    cursor: 'pointer',
    corner: 'xs',
    border: 'none',
    fontSize: 'm',
    fontWeight: 'bold',
  },
  variants: {
    round: {
      style: {
        corner: 'round',
        px: 'none',
        py: 'none',
      },
    },
    error: {
      style: {
        bg: 'light',
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

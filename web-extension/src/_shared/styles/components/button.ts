import { ComponentConfig } from '@morfeo/react';

export const Button: ComponentConfig = {
  tag: 'button',
  style: {
    py: '2xs',
    px: 'xs',
    bg: 'primary',
    color: 'invertedText',
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

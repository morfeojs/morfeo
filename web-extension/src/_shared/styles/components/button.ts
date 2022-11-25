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
  states: {},
  variants: {
    round: {
      style: {
        corner: 'round',
        px: 'none',
        py: 'none',
      },
      states: {},
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
      states: {},
    },
    error: {
      style: {
        bg: 'light',
        color: 'error',
      },
      states: {},
    },
    success: {
      style: {
        bg: 'success',
      },
      states: {},
    },
  },
  meta: {
    tags: ['ui', 'form'],
    description: 'Button component',
  },
} as ComponentConfig;

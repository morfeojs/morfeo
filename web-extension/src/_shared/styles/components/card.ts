import { ComponentConfig } from '@morfeo/react';

export const Card: ComponentConfig = {
  tag: 'div',
  style: {
    cursor: 'pointer',
    color: 'text',
    corner: 's',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  states: {},
  variants: {
    primary: {
      style: {
        shadow: 'light',
      },
      states: {},
    },
    'primary.clickable': {
      style: {
        shadow: 'light',
        transition: 'fast',
        '&:hover': {
          shadow: 'medium',
          transform: 'translateY(-5px)',
        },
      },
      states: {},
    },
  },
  meta: {
    tags: ['container', 'ui'],
    description: 'Card component',
  },
} as ComponentConfig;

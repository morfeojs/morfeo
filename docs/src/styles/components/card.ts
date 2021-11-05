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
    fontFamily: 'default',
    bg: 'background',
    shadow: 'light',
  },
  variants: {
    primary: {
      style: {
        shadow: 'light',
      },
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
    },
  },
  meta: {
    tags: ['container', 'ui'],
    description: 'Card component',
    devtoolConfig: {
      background: 'background',
      style: {
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
} as ComponentConfig;

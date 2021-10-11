import { ComponentConfig } from '@morfeo/react';

export const Card: ComponentConfig = {
  tag: 'div',
  style: {
    p: 'xs',
    bg: 'background',
    cursor: 'pointer',
    color: 'textColor',
    shadow: 'light',
    corner: 's',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
      shadow: 'medium',
    },
  },
  variants: {
    small: {
      style: {
        size: '100px' as any,
      },
    },
    medium: {
      style: {
        size: '200px' as any,
      },
    },
    large: {
      style: {
        size: '300px' as any,
      },
    },
  },
  meta: {
    tags: ['container', 'ui'],
    description: 'Card component',
  },
} as ComponentConfig;

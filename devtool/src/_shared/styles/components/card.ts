import { ComponentConfig } from '@morfeo/react';

export const Card: ComponentConfig = {
  tag: 'div',
  style: {
    cursor: 'pointer',
    color: 'textColor',
    corner: 's',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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

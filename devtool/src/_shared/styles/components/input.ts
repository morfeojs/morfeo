import { ComponentConfig } from '@morfeo/react';

export const Input: ComponentConfig = {
  tag: 'input',
  style: {
    px: 'xs',
    bg: 'white',
    height: 'm',
    corner: 'xxs',
    border: 'primary',
    borderColor: 'gray.lightest',
    '&:focus': {
      border: 'primary',
      borderColor: 'gray.lighter',
    },
  },
  variants: {},
  meta: {
    tags: ['ui', 'form', 'input'],
    description: 'Input component',
  },
} as ComponentConfig;

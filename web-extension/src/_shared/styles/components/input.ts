import { ComponentConfig } from '@morfeo/react';

export const Input: ComponentConfig = {
  tag: 'input',
  style: {
    display: 'block',
    px: 'xs',
    bg: 'white',
    height: 'm',
    corner: '2xs',
    border: 'medium',
    borderColor: 'gray.lightest',
    '&:focus': {
      outline: 'strong',
      borderColor: 'gray.lighter',
    },
  },
  variants: {},
  meta: {
    tags: ['ui', 'form', 'input'],
    description: 'Input component',
  },
} as ComponentConfig;

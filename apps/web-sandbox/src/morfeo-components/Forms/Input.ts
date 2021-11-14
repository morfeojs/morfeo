import { ComponentConfig } from '@morfeo/react';

export const Input: ComponentConfig = {
  tag: 'input',
  style: {
    width: '100',
    minWidth: '100',
    py: '2xs',
    px: '2xs',
    fontSize: 'm',
    fontWeight: 'light',
    fontFamily: 'default',
    corner: 'xs',
    boxSizing: 'border-box !important' as any,
    bg: 'white',
    color: 'gray.darkest',
    border: 'none',
    outline: 'thin',
    lineHeight: 'none',
    position: 'relative',
    '&:focus': {
      outline: 'strong',
      outlineColor: 'primary',
      color: 'gray.dark',
    },
  },
  variants: {
    error: {
      style: {
        outlineColor: 'error',
        outline: 'strong',
      },
    },
    success: {
      style: {
        outlineColor: 'success',
        outline: 'strong',
      },
    },
    warning: {
      style: {
        outlineColor: 'warning',
        outline: 'strong',
      },
    },
    small: {
      style: {
        fontSize: 's',
        py: '2xs',
        px: '2xs',
        lineHeight: 'none',
      },
    },
    'small.error': {
      style: {
        componentName: 'Input',
        variant: 'Small',
        outlineColor: 'error',
        outline: 'strong',
      },
    },
    'small.warning': {
      style: {
        componentName: 'Input',
        variant: 'Small',
        outlineColor: 'warning',
        outline: 'strong',
      },
    },
    'small.success': {
      style: {
        componentName: 'Input',
        variant: 'Small',
        outlineColor: 'success',
        outline: 'strong',
      },
    },
  },
};

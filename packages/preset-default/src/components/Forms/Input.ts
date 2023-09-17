import { ComponentConfig } from '@morfeo/web';

type InputVariant =
  | 'error'
  | 'success'
  | 'warning'
  | 'small'
  | 'small.error'
  | 'small.warning'
  | 'small.success';

export const Input: ComponentConfig<InputVariant> = {
  tag: 'input',
  states: {},
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
      states: {},
    },
    success: {
      style: {
        outlineColor: 'success',
        outline: 'strong',
      },
      states: {},
    },
    warning: {
      style: {
        outlineColor: 'warning',
        outline: 'strong',
      },
      states: {},
    },
    small: {
      style: {
        fontSize: 's',
        py: '2xs',
        px: '2xs',
        lineHeight: 'none',
      },
      states: {},
    },
    'small.error': {
      style: {
        componentName: 'Input',
        variant: 'small',
        outlineColor: 'error',
        outline: 'strong',
      },
      states: {},
    },
    'small.warning': {
      style: {
        componentName: 'Input',
        variant: 'small',
        outlineColor: 'warning',
        outline: 'strong',
      },
      states: {},
    },
    'small.success': {
      style: {
        componentName: 'Input',
        variant: 'small',
        outlineColor: 'success',
        outline: 'strong',
      },
      states: {},
    },
  },
};

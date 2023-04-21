import { ComponentConfig } from '@morfeo/spec';

type ButtonVariant =
  | 'inverted'
  | 'small'
  | 'small.inverted'
  | 'small.primary'
  | 'small.secondary'
  | 'small.warning'
  | 'small.error'
  | 'small.success'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'round'
  | 'round.inverted'
  | 'round.primary'
  | 'round.secondary'
  | 'round.success'
  | 'round.warning'
  | 'round.error'
  | 'round.small'
  | 'round.small.inverted'
  | 'round.small.primary'
  | 'round.small.secondary'
  | 'round.small.success'
  | 'round.small.warning'
  | 'round.small.error'
  | 'round.large'
  | 'round.large.inverted'
  | 'round.large.primary'
  | 'round.large.secondary'
  | 'round.large.success'
  | 'round.large.warning'
  | 'round.large.error'
  | 'group';

export const Button: ComponentConfig<ButtonVariant> = {
  tag: 'button',
  states: {},
  style: {
    px: 's',
    py: '2xs',
    bg: 'invertedBackground',
    corner: 'xs',
    color: 'invertedText',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'm',
    fontFamily: 'default',
    fontWeight: 'medium',
    border: 'none',
    overflow: 'hidden',
    position: 'relative',
    transition: 'medium',
  },
  variants: {
    inverted: {
      style: {
        bg: 'background',
        color: 'text',
      },
      states: {},
    },
    small: {
      style: {
        fontSize: 's',
        px: 'xs',
      },
      states: {},
    },
    'small.inverted': {
      style: {
        componentName: 'Button',
        variant: 'small',
        bg: 'background',
        color: 'text',
      },
      states: {},
    },
    'small.primary': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'primary',
      },
      states: {},
    },
    'small.secondary': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'secondary',
      },
      states: {},
    },
    'small.warning': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'warning',
      },
      states: {},
    },
    'small.error': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'error',
      },
      states: {},
    },
    'small.success': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'success',
      },
      states: {},
    },
    primary: {
      style: {
        color: 'white',
        bg: 'primary',
      },
      states: {},
    },
    secondary: {
      style: {
        color: 'white',
        bg: 'secondary',
      },
      states: {},
    },
    warning: {
      style: {
        color: 'white',
        bg: 'warning',
      },
      states: {},
    },
    error: {
      style: {
        color: 'white',
        bg: 'error',
      },
      states: {},
    },
    success: {
      style: {
        color: 'white',
        bg: 'success',
      },
      states: {},
    },
    round: {
      style: {
        size: 'm',
        px: 'none',
        py: 'none',
        corner: 'round',
        lineHeight: 'none',
        letterSpacing: 'none',
      },
      states: {},
    },
    'round.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'text',
        bg: 'background',
      },
      states: {},
    },
    'round.primary': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'primary',
      },
      states: {},
    },
    'round.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'secondary',
      },
      states: {},
    },
    'round.success': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'success',
      },
      states: {},
    },
    'round.warning': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'warning',
      },
      states: {},
    },
    'round.error': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'error',
      },
      states: {},
    },
    'round.small': {
      style: {
        componentName: 'Button',
        variant: 'round',
        size: 's',
        fontSize: 'xs',
      },
      states: {},
    },
    'round.small.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'text',
        bg: 'background',
      },
      states: {},
    },
    'round.small.primary': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'primary',
      },
      states: {},
    },
    'round.small.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'secondary',
      },
      states: {},
    },
    'round.small.success': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'success',
      },
      states: {},
    },
    'round.small.warning': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'warning',
      },
      states: {},
    },
    'round.small.error': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'error',
      },
      states: {},
    },
    'round.large': {
      style: {
        componentName: 'Button',
        variant: 'round',
        size: 'xl',
      },
      states: {},
    },
    'round.large.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'text',
        bg: 'background',
      },
      states: {},
    },
    'round.large.primary': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'primary',
      },
      states: {},
    },
    'round.large.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'secondary',
      },
      states: {},
    },
    'round.large.success': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'success',
      },
      states: {},
    },
    'round.large.warning': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'warning',
      },
      states: {},
    },
    'round.large.error': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'error',
      },
      states: {},
    },
    group: {
      style: {
        corner: 'none',
        borderRight: 'medium',
        borderRightColor: 'white',
        '&:first-child': {
          cornerBottomLeft: 'xs',
          cornerTopLeft: 'xs',
          borderRight: 'medium',
          borderRightColor: 'white',
        },
        '&:last-child': {
          cornerBottomRight: 'xs',
          cornerTopRight: 'xs',
        },
      },
      states: {},
    },
  },
};

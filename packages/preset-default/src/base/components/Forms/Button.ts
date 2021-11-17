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
  | 'round.large.error';

export const Button: ComponentConfig<ButtonVariant> = {
  tag: 'button',
  style: {
    px: 's',
    py: '2xs',
    bg: 'invertedBackground',
    corner: 'xs',
    color: 'invertedText',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 's',
    fontFamily: 'default',
    border: 'none',
    overflow: 'hidden',
    position: 'relative',
    transition: 'medium',
    '&:after': {
      content: '""',
      color: 'error',
      position: 'absolute',
      top: 'none',
      left: 'none',
      size: '100',
      bg: 'white',
      opacity: 'light',
      clipPath: 'circle(0%)',
      transition: 'medium',
    },
    '&:hover': {
      '&:after': {
        clipPath: 'circle(80%)',
      },
    },
    '&:active': {
      bg: 'primary.light',
      '&:after': {
        clipPath: 'circle(20%)',
      },
    },
  },
  variants: {
    inverted: {
      style: {
        background: 'background',
        color: 'text',
      },
    },
    small: {
      style: {
        fontSize: 'xs',
        px: 'xs',
      },
    },
    'small.inverted': {
      style: {
        componentName: 'Button',
        variant: 'small',
        background: 'background',
        color: 'text',
      },
    },
    'small.primary': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'primary',
      },
    },
    'small.secondary': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'secondary',
      },
    },
    'small.warning': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'warning',
      },
    },
    'small.error': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'error',
      },
    },
    'small.success': {
      style: {
        componentName: 'Button',
        variant: 'small',
        color: 'white',
        bg: 'success',
      },
    },
    primary: {
      style: {
        color: 'white',
        bg: 'primary',
      },
    },
    secondary: {
      style: {
        color: 'white',
        bg: 'secondary',
      },
    },
    warning: {
      style: {
        color: 'white',
        bg: 'warning',
      },
    },
    error: {
      style: {
        color: 'white',
        bg: 'error',
      },
    },
    success: {
      style: {
        color: 'white',
        bg: 'success',
      },
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
    },
    'round.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'text',
        bg: 'background',
      },
    },
    'round.primary': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'primary',
      },
    },
    'round.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'secondary',
      },
    },
    'round.success': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'success',
      },
    },
    'round.warning': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'warning',
      },
    },
    'round.error': {
      style: {
        componentName: 'Button',
        variant: 'round',
        color: 'white',
        bg: 'error',
      },
    },
    'round.small': {
      style: {
        componentName: 'Button',
        variant: 'round',
        size: 's',
        fontSize: 'xs',
      },
    },
    'round.small.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'text',
        bg: 'background',
      },
    },
    'round.small.primary': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'primary',
      },
    },
    'round.small.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'secondary',
      },
    },
    'round.small.success': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'success',
      },
    },
    'round.small.warning': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'warning',
      },
    },
    'round.small.error': {
      style: {
        componentName: 'Button',
        variant: 'round.small',
        color: 'white',
        bg: 'error',
      },
    },
    'round.large': {
      style: {
        componentName: 'Button',
        variant: 'round',
        size: 'xl',
      },
    },
    'round.large.inverted': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'text',
        bg: 'background',
      },
    },
    'round.large.primary': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'primary',
      },
    },
    'round.large.secondary': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'secondary',
      },
    },
    'round.large.success': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'success',
      },
    },
    'round.large.warning': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'warning',
      },
    },
    'round.large.error': {
      style: {
        componentName: 'Button',
        variant: 'round.large',
        color: 'white',
        bg: 'error',
      },
    },
  },
  meta: {
    devtoolConfig: {
      style: {},
    },
  },
};

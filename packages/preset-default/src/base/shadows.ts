import { Shadows } from '@morfeo/spec';

export const shadows: Shadows = {
  none: {
    color: 'gray',
    opacity: 'light',
    offset: {
      height: 'none',
      width: 'none',
    },
    radius: 'none',
  },
  light: {
    color: 'gray',
    opacity: 'light',
    offset: {
      height: 's',
      width: 'none',
    },
    radius: 'xxs',
  },
  medium: {
    color: 'gray',
    opacity: 'light',
    offset: {
      height: 'm',
      width: 'none',
    },
    radius: 'xs',
  },
  strong: {
    color: 'gray',
    opacity: 'light',
    offset: {
      height: 'l',
      width: 'none',
    },
    radius: 's',
  },
};

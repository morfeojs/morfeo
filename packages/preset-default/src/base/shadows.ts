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
    color: 'gray.lightest',
    opacity: 'light',
    offset: {
      height: 'xl',
      width: 'none',
    },
    radius: 'l',
  },
  medium: {
    color: 'gray.lighter',
    opacity: 'light',
    offset: {
      height: 'xl',
      width: 'none',
    },
    radius: 'l',
  },
  strong: {
    color: 'gray.light',
    opacity: 'light',
    offset: {
      height: 'xl',
      width: 'none',
    },
    radius: 'l',
  },
};

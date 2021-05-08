import { Shadows } from '@illimity/ilt-core-design-system';

export const shadows: Shadows = {
  none: {
    color: 'transparent',
    offset: { width: 0, height: 0 },
    opacity: 0,
    elevation: 0,
  },
  soft: {
    color: 'dark',
    offset: { width: 0, height: 2 },
    opacity: 0.2,
    radius: 4,
    elevation: 2,
  },
  medium: {
    color: 'dark',
    offset: { width: 0, height: 3 },
    opacity: 0.3,
    radius: 4,
    elevation: 3,
  },
  strong: {
    color: 'dark',
    offset: { width: 0, height: 4 },
    opacity: 0.4,
    radius: 4,
    elevation: 4,
  },
};

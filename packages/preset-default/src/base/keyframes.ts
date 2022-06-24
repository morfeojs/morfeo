import { KeyFrameConfig } from '@morfeo/web';

const loadingKeyframes: KeyFrameConfig = {
  from: {
    bg: 'gray',
  },
  to: {
    bg: 'gray.light',
  },
};

export const keyframes = {
  default: {
    from: {},
    to: {},
  },
  loading: loadingKeyframes,
};

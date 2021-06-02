import { parsers } from '@morfeo/web';

export const gradients = {
  slice: 'gradients',
  property: 'gradient',
  kind: 'circle',
  priority: 1,
  getValue(_, value) {
    return parsers.resolve({ gradient: value })['background'];
  },
};

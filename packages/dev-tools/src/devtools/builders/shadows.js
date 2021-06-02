import { parsers } from '@morfeo/web';

export const shadows = {
  slice: 'shadows',
  property: 'shadow',
  priority: 6,
  getValue(_, value) {
    return parsers.resolve({ shadow: value })['boxShadow'];
  },
};

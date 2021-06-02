import { parsers } from '@morfeo/web';
import { makeRow } from './makeRow';

export function gradients() {
  makeRow({
    slice: 'gradients',
    property: 'gradient',
    kind: 'circle',
    getValue(_, value) {
      return parsers.resolve({ gradient: value })['background'];
    },
  });
}

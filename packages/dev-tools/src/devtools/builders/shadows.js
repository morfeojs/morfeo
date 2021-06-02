import { parsers } from '@morfeo/web';
import { makeRow } from './makeRow';

export function shadows() {
  makeRow({
    slice: 'shadows',
    property: 'shadow',
    getValue(_, value) {
      return parsers.resolve({ shadow: value })['boxShadow'];
    },
  });
}

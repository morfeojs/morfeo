import { makeRow } from './makeRow';

export function spaces() {
  makeRow({ slice: 'space', property: 'width' });
}

export function sizes() {
  makeRow({ slice: 'sizes', property: 'width' });
}

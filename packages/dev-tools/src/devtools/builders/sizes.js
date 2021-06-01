import { theme } from '@morfeo/web';
import { injectStyle } from './injectStyle';

function makeRow(themeKey, pageClass) {
  const values = theme.getSlice(themeKey);
  const keys = Object.keys(values);
  const slice = document.getElementById(pageClass);
  keys.forEach(key => {
    const block = document.createElement('div');
    block.classList.add('item', 'column', 'centered');
    const square = document.createElement('div');
    square.classList.add('square');
    const name = document.createElement('span');
    const value = document.createElement('span');

    injectStyle(square, {
      bg: '#2c3e50',
      width: theme.getValue(themeKey, key),
    });

    name.innerHTML = key;
    value.innerHTML = theme.getValue(themeKey, key);

    block.appendChild(name);
    block.appendChild(square);
    block.appendChild(value);
    slice.appendChild(block);
  });
}

export function spaces() {
  makeRow('space', 'spaces');
}

export function sizes() {
  makeRow('sizes', 'sizes');
}

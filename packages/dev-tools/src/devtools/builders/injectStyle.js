import { parsers } from '@morfeo/core';

export function injectStyle(element, style) {
  const parsedStyle = parsers.resolve(style);
  const keys = Object.keys(parsedStyle);
  keys.forEach(key => {
    element.style[key] = parsedStyle[key];
  });
}

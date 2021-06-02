import { theme } from '@morfeo/web';
import { injectStyle } from './injectStyle';

export function makeRow(
  sliceElement,
  { slice, kind = 'square', property, showValue = true, getValue, style = {} },
) {
  const themeSlice = theme.getSlice(slice);
  const sliceKeys = Object.keys(themeSlice);

  sliceKeys.forEach(key => {
    const block = document.createElement('div');
    block.classList.add('item', 'column', 'centered');
    const element = document.createElement('div');
    element.classList.add(kind);
    const elementName = document.createElement('span');

    injectStyle(element, { ...style, [property]: key });

    elementName.innerHTML = key;

    block.appendChild(elementName);
    block.appendChild(element);

    if (showValue) {
      const elementValue = document.createElement('span');
      elementValue.innerHTML = getValue
        ? getValue(slice, key)
        : theme.getValue(slice, key);
      block.appendChild(elementValue);
    }

    sliceElement.appendChild(block);
  });
}

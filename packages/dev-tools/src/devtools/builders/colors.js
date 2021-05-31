import { theme } from '@morfeo/web';
import { injectStyle } from './injectStyle';

export function colors() {
  const { colors } = theme.get();
  const colorKeys = Object.keys(colors);
  const colorSlice = document.getElementById('colors');
  colorKeys.forEach(key => {
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('item', 'column', 'centered');
    const colorBall = document.createElement('div');
    colorBall.classList.add('circle');
    const colorName = document.createElement('span');
    const colorValue = document.createElement('span');

    injectStyle(colorBall, { bg: key });

    colorName.innerHTML = key;
    colorValue.innerHTML = theme.getValue('colors', key);

    colorBlock.appendChild(colorName);
    colorBlock.appendChild(colorBall);
    colorBlock.appendChild(colorValue);
    colorSlice.appendChild(colorBlock);
  });
}

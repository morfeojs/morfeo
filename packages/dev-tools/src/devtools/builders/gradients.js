import { theme } from '@morfeo/web';
import { injectStyle } from './injectStyle';

export function gradients() {
  const gradients = theme.getSlice('gradients');
  const gradientKeys = Object.keys(gradients);
  const gradientSlice = document.getElementById('gradients');
  gradientKeys.forEach(key => {
    const gradientBlock = document.createElement('div');
    gradientBlock.classList.add('item', 'column', 'centered');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const gradientName = document.createElement('span');

    injectStyle(circle, { gradient: key });

    gradientName.innerHTML = key;

    gradientBlock.appendChild(gradientName);
    gradientBlock.appendChild(circle);
    gradientSlice.appendChild(gradientBlock);
  });
}

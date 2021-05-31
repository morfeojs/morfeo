import { theme } from '@morfeo/web';
import { getStyles } from '@morfeo/jss';

function makeComponent(tag, componentName, variant) {
  const component = document.createElement(tag || 'div');
  const container = document.createElement('div');

  const { classes } = getStyles({
    [componentName]: {
      componentName,
      variant,
    },
  });

  container.classList.add('item', 'column', 'centered');
  component.classList.add(classes[componentName]);
  component.innerHTML = `${variant || 'regular'}`;

  container.appendChild(component);

  return container;
}

function makeComponentRow(componentName) {
  const componentsSlice = document.getElementById('components');
  const { tag, variants = {} } = theme.getValue('components', componentName);
  const componentBlock = document.createElement('div');
  const componentRow = document.createElement('div');
  const name = document.createElement('h3');
  componentRow.classList.add('row');
  name.innerHTML = componentName;

  componentBlock.classList.add('slice');

  const component = makeComponent(tag, componentName);

  const variantKeys = Object.keys(variants);
  componentRow.appendChild(component);
  componentBlock.appendChild(name);
  componentBlock.appendChild(componentRow);

  variantKeys.forEach(variantKey => {
    const variantComponent = makeComponent(tag, componentName, variantKey);
    componentRow.appendChild(variantComponent);
  });

  componentsSlice.appendChild(componentBlock);
}

export function components() {
  const { components } = theme.get();
  const componentKeys = Object.keys(components);
  componentKeys.forEach(makeComponentRow);
}

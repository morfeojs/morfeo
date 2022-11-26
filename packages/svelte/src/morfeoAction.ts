import { getStyles } from '@morfeo/jss';
import { component, Style } from '@morfeo/web';

const DEFAULT_ELEMENT_NAME = 'morfeo-element'

function getElementName({ componentName, variant, state }: Style) {
  let elementName = '';

  if (componentName) {
    elementName = `${componentName}`;
  }

  if (variant) {
    elementName = `${elementName}-${variant}`;
  }

  if (state) {
    elementName = `${elementName}-${state}`;
  }

  return elementName || DEFAULT_ELEMENT_NAME;
}

function setAdditionalProps(
  node: HTMLElement,
  { componentName, variant, state }: Style,
) {
  if (!componentName) {
    return {};
  }
  const props = component(componentName, variant, state).getProps();

  if (!props) {
    return;
  }
  Object.keys(props).forEach(prop => node.setAttribute(prop, props[prop]));
}

export function morfeoStyle(node: HTMLElement, props: Style = {}) {
  const elementName = getElementName(props);
  let { classes, update, destroy } = getStyles({ [elementName]: props });

  node.classList.add(classes[elementName]);
  setAdditionalProps(node, props);

  return {
    update(nextProps: Style) {
      setAdditionalProps(node, { ...props, ...nextProps });
      update({ [elementName]: nextProps });
    },
    destroy,
  };
}

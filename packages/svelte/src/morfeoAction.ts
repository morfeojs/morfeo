import { getStyles } from '@morfeo/jss';
import { Component, component, Style } from '@morfeo/web';

function getElementName({ componentName, variant }: Style) {
  if (componentName && variant) {
    return `${componentName}-${variant}`;
  }

  return componentName || 'morfeo-element';
}

function setAdditionalProps(
  node: HTMLElement,
  { componentName, variant }: Style,
) {
  if (!componentName) {
    return {};
  }
  const props = component(componentName, variant).getProps();

  if (!props) {
    return;
  }
  Object.keys(props).forEach(prop => node.setAttribute(prop, props[prop]));
}

export function morfeo(node: HTMLElement, props: Style = {}) {
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

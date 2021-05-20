import { getStyles } from '@morfeo/jss';
import { Style } from '@morfeo/web';

function getElementName({ componentName, variant }: Style) {
  if (componentName && variant) {
    return `${componentName}-${variant}`;
  }

  return componentName || 'morfeo-element';
}

export function morfeo(node: HTMLElement, props: Style = {}) {
  const elementName = getElementName(props);
  let { classes, update, destroy } = getStyles({ [elementName]: props });

  node.classList.add(classes[elementName]);

  return {
    update(nextProps: Style) {
      update({ [elementName]: nextProps });
    },
    destroy,
  };
}

import { getRawStyles } from '@morfeo/jss';
import { Style, theme } from '@morfeo/web';

function getElementName({ componentName, variant }: Style) {
  if (componentName && variant) {
    return `${componentName}-${variant}`;
  }

  return componentName || 'morfeo-element';
}

export function morfeo(node: HTMLElement, props: Style = {}) {
  const elementName = getElementName(props);
  const { classes, uid } = getRawStyles({ [elementName]: props });

  node.classList.add(classes[elementName]);

  return {
    destroy() {
      theme.cleanUp(uid);
    },
  };
}

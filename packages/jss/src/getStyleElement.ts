function createGetStyleElement() {
  let styleElement: HTMLStyleElement;

  function getStyleElement() {
    if (!styleElement && globalThis.document) {
      styleElement = document.createElement('style');
      styleElement.setAttribute('data-global', 'morfeo');
      document.head.appendChild(styleElement);
    }

    return styleElement;
  }

  return getStyleElement;
}

export const getStyleElement = createGetStyleElement();

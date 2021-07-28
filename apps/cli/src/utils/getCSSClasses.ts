import { theme, getStyles, Component } from '@morfeo/web';

function getComponentCSS(componentName: Component, variant?: string) {
  let componentId = `morfeo-${componentName.toLowerCase()}`;

  if (variant) {
    componentId += `-${variant.toLowerCase()}`;
  }

  const { sheet } = getStyles(
    { [componentName]: { componentName, variant } },
    {
      generateId: () => componentId,
    },
  );

  const componentCss = sheet.toString();

  return `\n${componentCss}\n`;
}

export function getCSSClasses() {
  const { components } = theme.get();
  const componentNames = Object.keys(components) as Component[];

  let css = `@import "./variables.css";\n`;

  componentNames.forEach(componentName => {
    const { variants } = components[componentName];
    const variantKeys = Object.keys(variants || {});
    css += getComponentCSS(componentName);

    variantKeys.forEach(variant => {
      css += getComponentCSS(componentName, variant);
    });
  });

  return css;
}

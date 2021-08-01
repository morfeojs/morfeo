import { theme, getStyles, Component } from '@morfeo/web';
import { paramCase } from 'param-case';

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

export function getCSSClasses(themeName: string) {
  const { components } = theme.get();
  const componentNames = Object.keys(components) as Component[];

  let css = `@import "./${paramCase(themeName)}-variables.css";\n`;

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

import { theme, getStyles, Component } from '@morfeo/web';
import { paramCase } from 'param-case';

function getComponentCSS(
  themeName: string,
  componentName: Component,
  variant?: string,
) {
  let componentId = `morfeo-${paramCase(componentName)}`;

  if (variant) {
    componentId += `-${paramCase(variant)}`;
  }

  const { sheet } = getStyles(
    { [componentName]: { componentName, variant } },
    {
      generateId: () => componentId,
    },
  );

  const componentCss = sheet
    .toString()
    .replace(/\.morfeo-/g, `[data-morfeo-theme="${themeName}"] .morfeo-`);

  return `${componentCss}\n`;
}

export function getComponentsCSS(themeName: string) {
  const { components } = theme.get();
  const componentNames = Object.keys(components) as Component[];

  let css = '';

  componentNames.forEach(componentName => {
    const { variants } = components[componentName];
    const variantKeys = Object.keys(variants || {});
    css += getComponentCSS(themeName, componentName);

    variantKeys.forEach(variant => {
      css += getComponentCSS(themeName, componentName, variant);
    });
  });

  return css;
}

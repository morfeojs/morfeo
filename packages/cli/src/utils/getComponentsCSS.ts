import { theme, getStyles, Component } from '@morfeo/web';
import { paramCase } from 'param-case';

type GetComponentCssParams = {
  themeName: string;
  componentName: Component;
  variant?: string;
  state?: string;
};

function getComponentCSS({
  themeName,
  componentName,
  variant,
  state,
}: GetComponentCssParams) {
  let componentId = `morfeo-${paramCase(componentName)}`;

  if (variant) {
    componentId += `-${paramCase(variant)}`;
  }

  if (state) {
    componentId += `-${paramCase(state)}`;
  }

  const { sheet } = getStyles(
    { [componentName]: { componentName, variant, state } },
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
    const { variants, states } = components[componentName];
    const variantKeys = Object.keys(variants || {});
    const stateKeys = Object.keys(states || {});

    css += getComponentCSS({ themeName, componentName });

    stateKeys.forEach(state => {
      css += getComponentCSS({ themeName, componentName, state });
    });

    variantKeys.forEach(variant => {
      css += getComponentCSS({ themeName, componentName, variant });
      const { states: variantStates } = variants[variant];
      const variantStateKeys = Object.keys(variantStates || {});
      variantStateKeys.forEach(state => {
        css += getComponentCSS({ themeName, componentName, variant, state });
      });
    });
  });

  return css;
}

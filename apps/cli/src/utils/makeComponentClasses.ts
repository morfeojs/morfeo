import { theme, getStyles, Component } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';

const SCSS_PATH = path.join(__dirname, '../../build/scss/_variables.scss');

function appendCss(componentName: Component, variant?: string) {
  const componentId = `morfeo-${componentName.toLowerCase()}${
    variant ? `-${variant.toLowerCase()}` : ''
  }`;

  const { sheet } = getStyles(
    { [componentName]: { componentName, variant } },
    {
      generateId: () => componentId,
    },
  );

  const componentCss = sheet.toString();

  fs.appendFileSync(SCSS_PATH, `\n${componentCss}\n`);
}

export function makeComponentClasses() {
  const { components } = theme.get();
  const componentNames = Object.keys(components) as Component[];

  componentNames.forEach(componentName => {
    const { variants } = components[componentName];
    const variantKeys = Object.keys(variants || {});
    appendCss(componentName);

    variantKeys.forEach(variant => {
      appendCss(componentName, variant);
    });
  });
}

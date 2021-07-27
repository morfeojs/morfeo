import { theme, getStyles, Component } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';

const CSS_PATH = path.join(__dirname, '../../morfeo/style.css');

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

  fs.appendFileSync(CSS_PATH, `\n${componentCss}\n`);
}

export function makeClasses() {
  const { components } = theme.get();
  const componentNames = Object.keys(components) as Component[];

  const importLine = `@import "./variables.css";\n`;

  fs.writeFileSync(CSS_PATH, importLine);

  componentNames.forEach(componentName => {
    const { variants } = components[componentName];
    const variantKeys = Object.keys(variants || {});
    appendCss(componentName);

    variantKeys.forEach(variant => {
      appendCss(componentName, variant);
    });
  });
}

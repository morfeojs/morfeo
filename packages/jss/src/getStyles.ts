import { Style, theme } from '@morfeo/core';
import { deepMerge } from '@morfeo/utils';
import { StyleSheetFactoryOptions } from 'jss';
import jss from './initJSS';
import { MorfeoSheetsRegistry } from './registry';

export function getStyleSheet<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  const sheet = jss.createStyleSheet<K>(styles as any, options);

  MorfeoSheetsRegistry.add(sheet);

  return sheet;
}

export function getStyles<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  let sheet = getStyleSheet<K>(styles, options);
  sheet.attach();

  let classes = sheet.classes;
  let currentStyles = { ...styles };

  function onThemeChange() {
    sheet.detach();

    sheet = getStyleSheet(currentStyles, {
      ...options,
      generateId: ({ key }) => classes[key],
    });
    sheet.attach();
  }

  const update = (props: Record<K, Style>): Record<K, string> => {
    currentStyles = deepMerge(currentStyles, props) as Record<K, Style>;
    sheet.addRules(currentStyles as any, {
      ...options,
      generateId: rule => {
        // We need to ignore this line because the JSS's RuleOptions interface is (apparently) wrong
        // and it doesn't expose the attribute name.
        // @ts-ignore
        const ruleName = rule.options.name;
        return classes[ruleName];
      },
    });

    classes = sheet.classes;
    return classes;
  };
  const uid = theme.subscribe(onThemeChange);

  const destroy = () => {
    sheet.detach();
    theme.cleanUp(uid);
  };

  return { classes, sheet, jss, destroy, update };
}

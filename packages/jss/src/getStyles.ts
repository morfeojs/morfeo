import { parsers, Style, ResolvedStyle, theme, deepMerge } from '@morfeo/web';
import jss, { StyleSheetFactoryOptions } from 'jss';
import './initJSS';

export function getStyleSheet<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  const parsedStyle = Object.keys(styles).reduce((acc, key) => {
    const style = styles[key];
    return {
      ...acc,
      [key]: parsers.resolve(style),
    };
  }, {} as Record<K, ResolvedStyle>);

  return jss.createStyleSheet<K>(parsedStyle as any, options);
}

export function getStyles<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  let sheet = getStyleSheet<K>(styles, options);
  sheet.attach();

  const classes = sheet.classes;
  let currentStyles = { ...styles };

  const update = (props?: Record<K, Style>) => {
    sheet.detach();
    currentStyles = deepMerge(currentStyles, props) as Record<K, Style>;
    sheet = getStyleSheet(currentStyles, {
      ...options,
      generateId: rule => {
        return classes[rule.key];
      },
    });
    sheet.attach();
  };
  const uid = theme.subscribe(() => update());

  const destroy = () => {
    sheet.detach();
    theme.cleanUp(uid);
  };

  return { classes, sheet, destroy, update };
}

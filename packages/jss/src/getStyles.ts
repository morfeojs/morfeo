import { parsers, Style, ResolvedStyle, theme } from '@morfeo/web';
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

export function getRawStyles<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  let sheet = getStyleSheet<K>(styles, options);
  sheet.attach();

  const classes = sheet.classes;

  const uid = theme.subscribe(() => {
    sheet.detach();
    sheet = getStyleSheet(styles, {
      ...options,
      generateId: rule => {
        return classes[rule.key];
      },
    });
    sheet.attach();
  });

  return { classes, sheet, uid };
}

export function getStyles<K extends string>(
  styles: Record<K, Style>,
  options?: StyleSheetFactoryOptions,
) {
  const { classes } = getRawStyles(styles, options);

  return classes;
}

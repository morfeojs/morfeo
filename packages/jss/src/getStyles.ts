import { parsers, Style, ResolvedStyle } from '@morfeo/web';
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
  const sheet = getStyleSheet<K>(styles, options);
  sheet.attach();

  return sheet.classes;
}

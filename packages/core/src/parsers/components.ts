import { Theme } from '@morfeo/spec';
import { ParserParams } from '../types';

export function components<T extends Partial<Theme> = Partial<Theme>>({
  value,
  style,
  theme,
  parsers,
}: ParserParams<T, 'componentName'>) {
  const { variant, state } = style || {};
  if (!value) {
    return {};
  }
  const componentStyle = theme
    .component(value as any, variant, state)
    .getStyle();
  return parsers.resolve(componentStyle as any);
}

export const componentsParses = {
  componentName: components,
  variant: () => {},
  state: () => {},
};

import { component } from '../theme';
import { ParserParams } from '../types';

export function components({ value, style }: ParserParams<'componentName'>) {
  const { variant } = style || {};
  if (!value) {
    return {};
  }
  const componentStyle = component(value, variant).getStyle();
  return globalThis.__MORFEO_PARSERS.resolve(componentStyle);
}

export const componentsParses = {
  componentName: components,
};

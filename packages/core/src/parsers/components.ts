import { component } from '../theme';
import { ParserParams } from '../types';

export function components({ value, style }: ParserParams<'componentName'>) {
  const { variant, state } = style || {};
  if (!value) {
    return {};
  }
  const componentStyle = component(value, variant, state).getStyle();
  return globalThis.__MORFEO_PARSERS.resolve(componentStyle);
}

export const componentsParses = {
  componentName: components,
  variant: () => {},
  state: () => {},
};

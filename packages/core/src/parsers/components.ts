import { ParserParams } from '../types';

export function components({
  value,
  style,
  theme,
  parsers,
}: ParserParams<'componentName'>) {
  const { variant, state } = style || {};
  if (!value) {
    return {};
  }
  const componentStyle = theme.component(value, variant, state).getStyle();
  return parsers.resolve(componentStyle);
}

export const componentsParses = {
  componentName: components,
  variant: () => {},
  state: () => {},
};

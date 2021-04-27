import { theme } from '../theme';
import { ComponentConfig } from '@morfeo/spec';
import { ParserParams } from '../types';
import { parsers } from './parsers';

function getVariantStyle(
  variants: ComponentConfig['variants'],
  variant?: string,
) {
  if (!variant || !variants || !variants[variant]) {
    return {};
  }
  return variants[variant];
}

export function components({ value, style }: ParserParams<'componentName'>) {
  const { variant } = style || {};
  const { style: componentStyle, variants } = value
    ? theme.getValue('components', value) || {}
    : ({} as any);
  const variantStyle = getVariantStyle(variants, variant);

  return parsers.resolve({
    style: {
      ...componentStyle,
      ...variantStyle,
    },
  });
}

export const componentsParses = {
  componentName: components,
  variant: () => {},
  componentTag: () => {},
};

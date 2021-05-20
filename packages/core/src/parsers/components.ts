import { theme } from '../theme';
import { ComponentConfig } from '@morfeo/spec';
import { ParserParams } from '../types';
import parsers from './parsers';

function getVariantStyle(
  variants: ComponentConfig['variants'],
  variant?: string,
) {
  if (!variant || !variants || !variants[variant]) {
    return {};
  }
  return variants[variant].style;
}

export function components({ value, style }: ParserParams<'componentName'>) {
  const { variant } = style || {};
  if (!value || !theme.getValue('components', value)) {
    return {};
  }

  const { style: componentStyle, variants } = theme.getValue(
    'components',
    value,
  );

  const variantStyle = getVariantStyle(variants, variant);

  return parsers.resolve({
    ...componentStyle,
    ...variantStyle,
  });
}

export const componentsParses = {
  componentName: components,
};

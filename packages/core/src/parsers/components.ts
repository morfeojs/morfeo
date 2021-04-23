import { theme } from '../theme';
import { ComponentStyle } from '@morfeo/spec';
import { ParserParams } from '../types';
import { parsers } from './parsers';

function removeVariantsAndStates({ variants, ...style }: ComponentStyle) {
  return style;
}

function getVariantStyle({ variants }: ComponentStyle, variant?: string) {
  if (!variant || !variants[variant]) {
    return {};
  }
  return removeVariantsAndStates(variants[variant] as ComponentStyle);
}

export function components({
  value,
  style,
}: ParserParams<'components', 'componentName'>) {
  const { variant } = style || {};
  const componentDefaultStyle = theme.getValue('components', value);
  const componentStyle = removeVariantsAndStates(componentDefaultStyle);
  const variantStyle = getVariantStyle(componentDefaultStyle, variant);

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
};

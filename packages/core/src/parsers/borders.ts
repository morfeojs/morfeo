import { bordersProperties, Border, BorderConfig } from '@morfeo/spec';
import { theme } from '../theme';
import { SliceParsers, ParserParams } from '../types';
import { baseParser } from './baseParser';

type BorderProperties = SliceParsers<
  typeof bordersProperties,
  keyof typeof bordersProperties
>;

function makeBorder({ color, style, width }: BorderConfig) {
  const { borderColor } = baseParser({
    property: 'borderColor',
    scale: 'colors',
    value: color,
  });

  const { borderWidth } = baseParser({
    property: 'borderWidth',
    scale: 'borderWidths',
    value: width,
  });

  const { borderStyle } = baseParser({
    property: 'borderStyle',
    scale: 'borderStyles',
    value: style,
  });

  return [borderWidth, borderStyle, borderColor].filter(Boolean).join(' ');
}

function borderParser({ value }: ParserParams<'border'>) {
  const config = theme.getValue('borders', value as Border);

  return {
    border: !config ? value : makeBorder(config),
  };
}

export const bordersParsers = Object.keys(bordersProperties).reduce(
  (acc, curr) => {
    return {
      ...acc,
      [curr]: borderParser,
    };
  },
  {},
) as BorderProperties;

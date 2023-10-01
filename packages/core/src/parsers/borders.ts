import { bordersProperties, Border, BorderConfig } from '@morfeo/spec';
import { SliceParsers, ParserParams } from '../types';
import { baseParser } from './baseParser';

type BorderProperties = SliceParsers<
  typeof bordersProperties,
  keyof typeof bordersProperties
>;

function borderParser({ value, property, ...rest }: ParserParams<'border'>) {
  function makeBorder({ color, style: borderStyle, width }: BorderConfig) {
    const { borderColor } = baseParser({
      property: 'borderColor',
      scale: 'colors',
      value: color,
      ...rest,
    });

    const { borderWidth } = baseParser({
      property: 'borderWidth',
      scale: 'borderWidths',
      value: width,
      ...rest,
    });

    return [borderWidth, borderStyle, borderColor].filter(Boolean).join(' ');
  }
  const config = rest.theme.getValue('borders', value as Border);

  return {
    [property]: !config ? value : makeBorder(config),
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

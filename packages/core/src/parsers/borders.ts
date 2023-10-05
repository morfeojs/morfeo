import { bordersProperties, Border, BorderConfig, Theme } from '@morfeo/spec';
import { SliceParsers, ParserParams } from '../types';
import { baseParser } from './baseParser';

function borderParser<T extends Partial<Theme> = Partial<Theme>>({
  value,
  property,
  ...rest
}: ParserParams<T, 'border'>) {
  function makeBorder({ color, style: borderStyle, width }: BorderConfig) {
    const { borderColor } = baseParser({
      property: 'borderColor',
      scale: 'colors',
      value: color,
      ...rest,
    }) as any;

    const { borderWidth } = baseParser({
      property: 'borderWidth',
      scale: 'borderWidths',
      value: width,
      ...rest,
    }) as any;

    return [borderWidth, borderStyle, borderColor].filter(Boolean).join(' ');
  }
  const config = rest.theme.getValue('borders', value as keyof T['borders']);

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
);

import { colorProperties, ColorProperty } from '@morfeo/spec';
import { ParserParams, SliceParsers } from '../../types';
import { baseParser } from '../baseParser';
import { theme } from '../../theme';

type ColorsParsers = SliceParsers<
  typeof colorProperties,
  keyof typeof colorProperties
>;

export function parseColor({
  value,
  property,
  style,
}: ParserParams<ColorProperty>) {
  if (typeof style === 'object' && typeof style.colorSchema === 'string') {
    const colorSet = theme.getValue('colorSchemas', style.colorSchema);
    if (colorSet) {
      return baseParser({
        value: colorSet[value as string] || value,
        property,
        scale: 'colors',
      });
    }
  }

  return baseParser({
    value,
    property,
    scale: 'colors',
  });
}

const baseColorsParsers = Object.keys(colorProperties).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: parseColor,
  }),
  {} as ColorsParsers,
);

export const colorsParsers = {
  ...baseColorsParsers,
  bg: props => parseColor({ ...props, property: 'backgroundColor' }),
} as ColorsParsers;

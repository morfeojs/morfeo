import { colorProperties, ColorProperty, Color } from '@morfeo/spec';
import { ParserParams, SliceParsers } from '../../types';
import { baseParser } from '../baseParser';
import { placeholderParser } from './placeholderParsers';

type ColorsParsers = SliceParsers<
  typeof colorProperties,
  keyof typeof colorProperties
>;

export function parseColor({
  value,
  theme,
  property,
  ...rest
}: ParserParams<ColorProperty>) {
  const color = theme.getValue('colors', value as Color);

  if (color && color.indexOf('$') === 0) {
    return placeholderParser({ value, property, color, theme, ...rest });
  }

  return baseParser({
    value,
    theme,
    property,
    scale: 'colors',
    ...rest,
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

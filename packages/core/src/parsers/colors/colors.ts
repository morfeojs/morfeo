import {
  colorProperties,
  colorSchemasProperties,
  ColorProperty,
  Style,
  Color,
} from '@morfeo/spec';
import { ParserParams, SliceParsers } from '../../types';
import { baseParser } from '../baseParser';
import { theme } from '../../theme';
import { placeholderParser } from './placeholderParsers';

type ColorsParsers = SliceParsers<
  typeof colorProperties,
  keyof typeof colorProperties
>;

function getColorSet(style: Style) {
  const schemaProp = Object.keys(colorSchemasProperties).find(
    prop => style[prop],
  );
  return schemaProp
    ? theme.getValue('colorSchemas', style[schemaProp])
    : undefined;
}

export function parseColor({
  value,
  property,
  style,
}: ParserParams<ColorProperty>) {
  if (typeof style === 'object') {
    const colorSet = getColorSet(style);
    if (colorSet) {
      return baseParser({
        value: colorSet[value as string] || value,
        property,
        scale: 'colors',
      });
    }
  }


  const color = theme.getValue('colors', value as Color);

  if (color && color.indexOf('$') === 0) {
    return placeholderParser({ value, property, color });
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

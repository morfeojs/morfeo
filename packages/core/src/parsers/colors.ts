import { colorProperties } from '../../../spec/src';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type ColorsParsers = SliceParsers<typeof colorProperties, 'colors'>;

export const colorsParsers = {
  bg: props =>
    baseParser({ ...props, scale: 'colors', property: 'backgroundColor' }),
} as ColorsParsers;

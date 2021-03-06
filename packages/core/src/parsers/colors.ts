import { colorProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type ColorsParsers = SliceParsers<
  typeof colorProperties,
  keyof typeof colorProperties
>;

export const colorsParsers = {
  bg: props =>
    baseParser({ ...props, scale: 'colors', property: 'backgroundColor' }),
} as ColorsParsers;

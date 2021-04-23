import { sizesProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type SizesParsers = SliceParsers<typeof sizesProperties, 'sizes'>;

export const sizeParsers = {
  size: props => {
    return {
      ...baseParser({ ...props, scale: 'sizes', property: 'width' }),
      ...baseParser({ ...props, scale: 'sizes', property: 'height' }),
    };
  },
} as SizesParsers;

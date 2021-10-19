import { SizeProperty, sizesProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type SizesParsers = SliceParsers<typeof sizesProperties, SizeProperty>;

export const sizeParsers = {
  size: props => {
    return {
      ...baseParser({ ...props, scale: 'sizes', property: 'width' }),
      ...baseParser({ ...props, scale: 'sizes', property: 'height' }),
    };
  },
  minSize: props => {
    return {
      ...baseParser({ ...props, scale: 'sizes', property: 'minWidth' }),
      ...baseParser({ ...props, scale: 'sizes', property: 'minHeight' }),
    };
  },
  maxSize: props => {
    return {
      ...baseParser({ ...props, scale: 'sizes', property: 'maxWidth' }),
      ...baseParser({ ...props, scale: 'sizes', property: 'maxHeight' }),
    };
  },
} as SizesParsers;

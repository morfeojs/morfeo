import { SizeProperty, sizesProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

export const sizeParsers = {
  h: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'height' });
  },
  w: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'width' });
  },
  minH: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'minHeight' });
  },
  maxH: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'maxHeight' });
  },
  minW: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'minWidth' });
  },
  maxW: props => {
    return baseParser({ ...props, scale: 'sizes', property: 'maxWidth' });
  },
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
};

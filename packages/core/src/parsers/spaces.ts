import { spacesProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type SpacesParsers = SliceParsers<typeof spacesProperties, 'space'>;

export const spacesParsers = {
  p: props => baseParser({ ...props, scale: 'space', property: 'padding' }),
  pt: props => baseParser({ ...props, scale: 'space', property: 'paddingTop' }),
  pl: props =>
    baseParser({ ...props, scale: 'space', property: 'paddingLeft' }),
  pr: props =>
    baseParser({ ...props, scale: 'space', property: 'paddingRight' }),
  pb: props =>
    baseParser({ ...props, scale: 'space', property: 'paddingBottom' }),
  px: props => {
    return {
      ...baseParser({ ...props, scale: 'space', property: 'paddingRight' }),
      ...baseParser({ ...props, scale: 'space', property: 'paddingLeft' }),
    };
  },
  py: props => {
    return {
      ...baseParser({ ...props, scale: 'space', property: 'paddingTop' }),
      ...baseParser({ ...props, scale: 'space', property: 'paddingBottom' }),
    };
  },
  m: props => baseParser({ ...props, scale: 'space', property: 'margin' }),
  mt: props => baseParser({ ...props, scale: 'space', property: 'marginTop' }),
  ml: props => baseParser({ ...props, scale: 'space', property: 'marginLeft' }),
  mr: props =>
    baseParser({ ...props, scale: 'space', property: 'marginRight' }),
  mb: props =>
    baseParser({ ...props, scale: 'space', property: 'marginBottom' }),
  mx: props => {
    return {
      ...baseParser({ ...props, scale: 'space', property: 'marginRight' }),
      ...baseParser({ ...props, scale: 'space', property: 'marginLeft' }),
    };
  },
  my: props => {
    return {
      ...baseParser({ ...props, scale: 'space', property: 'marginTop' }),
      ...baseParser({ ...props, scale: 'space', property: 'marginBottom' }),
    };
  },
} as SpacesParsers;

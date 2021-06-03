import { SpacingProperty, spacingsProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type SpacingsParsers = SliceParsers<typeof spacingsProperties, SpacingProperty>;

export const spacingsParsers = {
  p: props => baseParser({ ...props, scale: 'spacings', property: 'padding' }),
  pt: props =>
    baseParser({ ...props, scale: 'spacings', property: 'paddingTop' }),
  pl: props =>
    baseParser({ ...props, scale: 'spacings', property: 'paddingLeft' }),
  pr: props =>
    baseParser({ ...props, scale: 'spacings', property: 'paddingRight' }),
  pb: props =>
    baseParser({ ...props, scale: 'spacings', property: 'paddingBottom' }),
  px: props => {
    return {
      ...baseParser({ ...props, scale: 'spacings', property: 'paddingRight' }),
      ...baseParser({ ...props, scale: 'spacings', property: 'paddingLeft' }),
    };
  },
  py: props => {
    return {
      ...baseParser({ ...props, scale: 'spacings', property: 'paddingTop' }),
      ...baseParser({ ...props, scale: 'spacings', property: 'paddingBottom' }),
    };
  },
  m: props => baseParser({ ...props, scale: 'spacings', property: 'margin' }),
  mt: props =>
    baseParser({ ...props, scale: 'spacings', property: 'marginTop' }),
  ml: props =>
    baseParser({ ...props, scale: 'spacings', property: 'marginLeft' }),
  mr: props =>
    baseParser({ ...props, scale: 'spacings', property: 'marginRight' }),
  mb: props =>
    baseParser({ ...props, scale: 'spacings', property: 'marginBottom' }),
  mx: props => {
    return {
      ...baseParser({ ...props, scale: 'spacings', property: 'marginRight' }),
      ...baseParser({ ...props, scale: 'spacings', property: 'marginLeft' }),
    };
  },
  my: props => {
    return {
      ...baseParser({ ...props, scale: 'spacings', property: 'marginTop' }),
      ...baseParser({ ...props, scale: 'spacings', property: 'marginBottom' }),
    };
  },
} as SpacingsParsers;

import { ThemeKey } from '@morfeo/react';
import { SnippetMapCallback } from '../types';
import { general } from './general';

const map: Record<ThemeKey, SnippetMapCallback> = {
  sizes: (value: string) =>
    general({
      slice: 'sizes',
      value,
      property: 'height',
      cssProperty: 'height',
    }),
  radii: (value: string) =>
    general({
      slice: 'radii',
      value,
      property: 'corner',
      cssProperty: 'border-radius',
    }),
  colors: (value: string) =>
    general({
      slice: 'colors',
      value,
      property: 'bg',
      cssProperty: 'background-color',
    }),
  borders: (value: string) =>
    general({ slice: 'borders', value, property: 'border' }),
  shadows: (value: string) =>
    general({
      slice: 'shadows',
      value,
      property: 'shadow',
      cssProperty: 'box-shadow',
    }),
  zIndices: (value: string) =>
    general({ slice: 'zIndices', value, property: 'zIndex' }),
  spacings: (value: string) =>
    general({
      slice: 'spacings',
      value,
      property: 'p',
      cssProperty: 'padding',
    }),
  opacities: (value: string) =>
    general({ slice: 'opacities', value, property: 'opacity' }),
  fontSizes: (value: string) =>
    general({ slice: 'fontSizes', value, property: 'fontSize' }),
  transitions: (value: string) =>
    general({ slice: 'transitions', value, property: 'transition' }),
  lineHeights: (value: string) =>
    general({ slice: 'lineHeights', value, property: 'lineHeight' }),
  fontWeights: (value: string) =>
    general({ slice: 'fontWeights', value, property: 'fontWeight' }),
  borderWidths: (value: string) =>
    general({ slice: 'borderWidths', value, property: 'borderWidth' }),
  borderStyles: (value: string) =>
    general({ slice: 'borderStyles', value, property: 'borderStyle' }),
  letterSpacings: (value: string) =>
    general({ slice: 'letterSpacings', value, property: 'letterSpacings' }),
} as any;

export function getCodeSnippets(slice: ThemeKey, value: string) {
  const getter = map[slice];
  if (getter) {
    return getter(value);
  }
  return [];
}
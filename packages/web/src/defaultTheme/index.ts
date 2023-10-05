import { Theme } from '@morfeo/core';
import { borderWidths } from './borderWidths';
import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { gradients } from './gradients';
import { letterSpacings } from './letterSpacings';
import { lineHeights } from './lineHeights';
import { opacities } from './opacities';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { spacings } from './spacings';
import { transitions } from './transitions';
import { zIndices } from './zIndices';
import { colors } from './colors';

const fonts = {
  mono: "'Red Hat Mono', monospace",
  default: 'Montserrat',
};

const colorSchemes = {
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
};

export const defaultTheme = {
  radii,
  sizes,
  fonts,
  colors,
  // @ts-ignore
  shadows,
  borders,
  spacings,
  zIndices,
  opacities,
  fontSizes,
  gradients,
  breakpoints,
  lineHeights,
  transitions,
  fontWeights,
  borderWidths,
  mediaQueries: {},
  colorSchemes,
  letterSpacings,
};

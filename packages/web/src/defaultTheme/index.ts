import { Theme } from '@morfeo/core';
import { borderStyles } from './borderStyles';
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

export const defaultTheme: Omit<Theme, 'components'> = {
  radii,
  sizes,
  fonts,
  colors: colors as any,
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
  borderStyles,
  mediaQueries: {},
  letterSpacings,
};

type LocalFonts = typeof fonts;
type LocalSizes = typeof sizes;
type LocalColors = typeof colors;
type LocalSpacings = typeof spacings;
type LocalFontSizes = typeof fontSizes;

declare module '@morfeo/core' {
  export interface Sizes extends LocalSizes {}
  export interface Fonts extends LocalFonts {}
  export interface Colors extends LocalColors {}
  export interface Spacings extends LocalSpacings {}
  export interface FontSizes extends LocalFontSizes {}
}

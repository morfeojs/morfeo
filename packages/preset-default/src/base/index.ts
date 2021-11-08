import { Theme } from '@morfeo/spec';
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
import { darkColors, lightColors } from './colors';

export const baseTheme: Omit<Theme, 'components' | 'fonts' | 'colors'> = {
  borderStyles,
  borderWidths,
  borders,
  breakpoints,
  fontSizes,
  fontWeights,
  gradients,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  spacings,
  transitions,
  zIndices,
  mediaQueries: {},
};

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
};

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
};

type LocalColors = typeof lightColors & typeof darkColors;
type LocalSizes = typeof sizes;
type LocalFontSizes = typeof fontSizes;
type LocalSpacings = typeof spacings;

declare module '@morfeo/spec' {
  export interface Sizes extends LocalSizes {}
  export interface Colors extends LocalColors {}
  export interface Spacings extends LocalSpacings {}
  export interface FontSizes extends LocalFontSizes {}
}

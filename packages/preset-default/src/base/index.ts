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
import { colorSchemas } from './colorSchemas';
import { components, darkComponents } from './components';

const fonts = {
  mono: "'Red Hat Mono', monospace",
  default: 'Montserrat',
};

export const baseTheme: Omit<Theme, 'colors'> = {
  radii,
  sizes,
  fonts,
  shadows,
  borders,
  spacings,
  zIndices,
  opacities,
  fontSizes,
  gradients,
  components,
  breakpoints,
  lineHeights,
  transitions,
  fontWeights,
  borderWidths,
  borderStyles,
  mediaQueries: {},
  colorSchemas,
  letterSpacings,
};

export const darkTheme = {
  ...baseTheme,
  components: darkComponents,
  colors: darkColors,
};

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
};

type LocalFonts = typeof fonts;
type LocalSizes = typeof sizes;
type LocalColors = typeof lightColors & typeof darkColors;
type LocalSpacings = typeof spacings;
type LocalFontSizes = typeof fontSizes;
type LocalComponents = typeof components;

declare module '@morfeo/spec' {
  export interface Sizes extends LocalSizes {}
  export interface Fonts extends LocalFonts {}
  export interface Colors extends LocalColors {}
  export interface Spacings extends LocalSpacings {}
  export interface FontSizes extends LocalFontSizes {}
  export interface Components extends LocalComponents {}
}

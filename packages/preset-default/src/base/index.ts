import { Theme } from '@morfeo/spec';
import { radii } from './radii';
import { sizes } from './sizes';
import { borders } from './borders';
import { shadows } from './shadows';
import { zIndices } from './zIndices';
import { spacings } from './spacings';
import { fontSizes } from './fontSizes';
import { keyframes } from './keyframes';
import { gradients } from './gradients';
import { opacities } from './opacities';
import { animations } from './animations';
import { lineHeights } from './lineHeights';
import { breakpoints } from './breakpoints';
import { transitions } from './transitions';
import { fontWeights } from './fontWeights';
import { borderStyles } from './borderStyles';
import { borderWidths } from './borderWidths';
import { letterSpacings } from './letterSpacings';
import { darkColors, lightColors } from './colors';
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
  keyframes,
  animations,
  components,
  breakpoints,
  lineHeights,
  transitions,
  fontWeights,
  borderWidths,
  borderStyles,
  mediaQueries: {},
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
type LocalKeyFrames = typeof keyframes;
type LocalFontSizes = typeof fontSizes;
type LocalComponents = typeof components;
type LocalAnimations = typeof animations;

declare module '@morfeo/spec' {
  export interface Sizes extends LocalSizes {}
  export interface Fonts extends LocalFonts {}
  export interface Colors extends LocalColors {}
  export interface Spacings extends LocalSpacings {}
  export interface FontSizes extends LocalFontSizes {}
  export interface Components extends LocalComponents {}
}

declare module '@morfeo/web' {
  export interface KeyFrames extends LocalKeyFrames {}
  export interface Animations extends LocalAnimations {}
}

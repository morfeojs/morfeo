import { Colors } from './colors';
import { Sizes } from './sizes';
import { BreakPoints } from './breakpoints';
import { Radii } from './radii';
import { Shadows } from './shadows';
import {
  Fonts,
  FontWeights,
  FontSizes,
  LineHeights,
  LetterSpacings,
} from './fonts';
import { Borders, BorderWidths, BorderStyles } from './borders';
import { Opacities } from './opacities';
import { Transitions } from './transitions';
import { ZIndices } from './zIndices';
import { MediaQueries } from './mediaQueries';
import { Components } from './components';

export type BaseTheme = {
  radii: Radii;
  space: Sizes;
  sizes: Sizes;
  fonts: Fonts;
  colors: Colors;
  shadows: Shadows;
  borders: Borders;
  zIndices: ZIndices;
  fontSizes: FontSizes;
  opacities: Opacities;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  breakpoints: BreakPoints;
  transitions: Transitions;
  borderWidths: BorderWidths;
  mediaQueries: MediaQueries;
  borderStyles: BorderStyles;
  letterSpacings: LetterSpacings;
};

export interface Theme extends BaseTheme {
  components: Components;
}

export type ThemeKey = keyof Theme;

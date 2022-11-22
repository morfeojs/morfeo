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
import { Spacings } from './spacings';
import { ZIndices } from './zIndices';
import { Gradients } from './gradients';
import { Transitions } from './transitions';
import { MediaQueries } from './mediaQueries';
import { Components } from './components';
import { ColorSchemas } from './colorSchemas';

export type BaseTheme = {
  radii: Radii;
  sizes: Sizes;
  fonts: Fonts;
  colors: Colors;
  shadows: Shadows;
  borders: Borders;
  spacings: Spacings;
  zIndices: ZIndices;
  fontSizes: FontSizes;
  gradients: Gradients;
  opacities: Opacities;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  breakpoints: BreakPoints;
  transitions: Transitions;
  borderWidths: BorderWidths;
  mediaQueries: MediaQueries;
  borderStyles: BorderStyles;
  colorSchemas: ColorSchemas;
  letterSpacings: LetterSpacings;
};

export interface Theme extends BaseTheme {
  components: Components;
}

export type ThemeKey = keyof Theme;

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

type MultiThemeableSlice<T> = {
  [K in keyof T]:
    | T[K]
    | {
        light?: T[K];
        dark?: T[K];
      };
};

export type BaseTheme = {
  radii: MultiThemeableSlice<Radii>;
  sizes: MultiThemeableSlice<Sizes>;
  fonts: MultiThemeableSlice<Fonts>;
  colors: MultiThemeableSlice<Colors>;
  shadows: MultiThemeableSlice<Shadows>;
  borders: MultiThemeableSlice<Borders>;
  spacings: MultiThemeableSlice<Spacings>;
  zIndices: MultiThemeableSlice<ZIndices>;
  fontSizes: MultiThemeableSlice<FontSizes>;
  gradients: MultiThemeableSlice<Gradients>;
  opacities: MultiThemeableSlice<Opacities>;
  fontWeights: MultiThemeableSlice<FontWeights>;
  lineHeights: MultiThemeableSlice<LineHeights>;
  breakpoints: MultiThemeableSlice<BreakPoints>;
  transitions: MultiThemeableSlice<Transitions>;
  borderWidths: MultiThemeableSlice<BorderWidths>;
  mediaQueries: MultiThemeableSlice<MediaQueries>;
  borderStyles: MultiThemeableSlice<BorderStyles>;
  letterSpacings: MultiThemeableSlice<LetterSpacings>;
};

export interface Theme extends BaseTheme {
  components: Components;
}

export type ThemeKey = keyof Theme;

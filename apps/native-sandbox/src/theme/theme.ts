import { Theme } from '@morfeo/native';
import { button, typography } from './components';
import { colors } from './colors';
import { space } from './space';
import { radii, borderWidths } from './borders';
import { fonts, fontSizes, fontWeights, lineHeights } from './fonts';
import { gradients } from './gradients';
import { shadows } from './shadows';

export const defaultTheme = {
  sizes: space,
  space,
  radii,
  fonts,
  colors,
  shadows,
  fontSizes,
  gradients,
  fontWeights,
  lineHeights,
  borderWidths,
  components: {
    Button: button,
    Typography: typography,
  },
} as const;

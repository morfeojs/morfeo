import { button, typography } from './components';
import { colors } from './colors';
import { spacings } from './spacings';
import { radii, borderWidths } from './borders';
import { fonts, fontSizes, fontWeights, lineHeights } from './fonts';
import { gradients } from './gradients';
import { shadows } from './shadows';

export const defaultTheme = {
  sizes: spacings,
  radii,
  fonts,
  colors,
  shadows,
  spacings,
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

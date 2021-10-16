import { SliceName } from '../../contexts';
import { Colors, Detail as ColorDetail } from './Colors/index';

export const slices = {
  [SliceName.COLORS]: {
    render: <Colors />,
    renderDetail: <ColorDetail />,
    displayName: 'colors',
  },
  [SliceName.RADII]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'radii',
  },
  [SliceName.SIZES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'sizes',
  },
  [SliceName.FONTS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'fonts',
  },
  [SliceName.SHADOWS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'shadows',
  },
  [SliceName.BORDERS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'borders',
  },
  [SliceName.SPACINGS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'spacings',
  },
  [SliceName.Z_INDICES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'zIndices',
  },
  [SliceName.FONT_SIZES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'fontSizes',
  },
  [SliceName.GRADIENTS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'gradients',
  },
  [SliceName.OPACITIES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'opacities',
  },
  [SliceName.FONT_WEIGHTS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'fontWeights',
  },
  [SliceName.LINE_HEIGHTS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'lineHeights',
  },
  [SliceName.BREAKPOINTS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'breakpoints',
  },
  [SliceName.TRANSITIONS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'transitions',
  },
  [SliceName.BORDER_WIDTHS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'borderWidths',
  },
  [SliceName.MEDIA_QUERIES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'mediaQueries',
  },
  [SliceName.BORDER_STYLES]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'borderStyles',
  },
  [SliceName.LETTER_SPACINGS]: {
    render: <></>,
    renderDetail: <></>,
    displayName: 'letterSpacings',
  },
};

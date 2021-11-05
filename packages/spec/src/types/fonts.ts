import {
  fontsMap,
  fontSizesMap,
  fontWeightsMap,
  lineHeightsMap,
  letterSpacingsMap,
} from '../properties';

export interface Fonts {
  default: string;
}

export type Font = keyof Fonts;

type BaseFontProps = {
  [K in typeof fontsMap[number]]: Font;
};

export interface FontProps extends BaseFontProps {}

export type FontProperty = keyof FontProps;

export interface FontWeights {
  bold: string;
  medium: string;
  regular: string;
}

export type FontWeight = keyof FontWeights;

type BaseFontWeightProps = {
  [K in typeof fontWeightsMap[number]]: FontWeight;
};

export interface FontWeightProps extends BaseFontWeightProps {}

export type FontWeightProperty = keyof FontWeightProps;

export interface FontSizes {
  '2xs': string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  '2xl': string;
  none: string;
}

export type FontSize = keyof FontSizes;

type BaseFontSizeProps = {
  [K in typeof fontSizesMap[number]]: FontSize;
};

export interface FontSizeProps extends BaseFontSizeProps {}

export type FontSizeProperty = keyof FontSizeProps;

export interface LineHeights {
  body: string;
  heading: string;
}

export type LineHeight = keyof LineHeights;

type BaseLineHeightProps = {
  [K in typeof lineHeightsMap[number]]: LineHeight;
};

export interface LineHeightProps extends BaseLineHeightProps {}

export type LineHeightProperty = keyof LineHeightProps;

export interface LetterSpacings {
  body: string;
  heading: string;
}

export type LetterSpacing = keyof LetterSpacings;

type BaseLetterSpacingProps = {
  [K in typeof letterSpacingsMap[number]]: LetterSpacing;
};

export interface LetterSpacingProps extends BaseLetterSpacingProps {}

export type LetterSpacingProperty = keyof LetterSpacingProps;

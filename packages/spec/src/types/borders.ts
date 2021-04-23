import { bordersMap, borderStylesMap, borderWidthsMap } from '../properties';

export interface Borders {
  primary: string;
  secondary: string;
}

export type Border = keyof Borders;

type BaseBorderProps = {
  [K in typeof bordersMap[number]]: Border;
};

export interface BorderProps extends BaseBorderProps {}

export type BorderProperty = keyof BorderProps;

export interface BorderWidths {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
}

export type BorderWidth = keyof BorderWidths;

type BaseBorderWidthProps = {
  [K in typeof borderWidthsMap[number]]: BorderWidth;
};

export interface BorderWidthProps extends BaseBorderWidthProps {}

export type BorderWidthProperty = keyof BorderWidthProps;

export interface BorderStyles {
  none: string;
  hidden: string;
  dotted: string;
  dashed: string;
  solid: string;
  double: string;
  groove: string;
}

export type BorderStyle = keyof BorderStyles;

type BaseBorderStyleProps = {
  [K in typeof borderStylesMap[number]]: BorderWidth;
};

export interface BorderStyleProps extends BaseBorderStyleProps {}

export type BorderStyleProperty = keyof BorderStyleProps;

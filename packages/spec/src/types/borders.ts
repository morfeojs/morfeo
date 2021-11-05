import { bordersMap, borderStylesMap, borderWidthsMap } from '../properties';
import { Color } from './colors';

export interface BorderWidths {
  '2xs': string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  '2xl': string;
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

export type BorderConfig = {
  width?: BorderWidth;
  color?: Color;
  style?: BorderStyle;
};

export interface Borders {
  none: BorderConfig;
  thin: BorderConfig;
  medium: BorderConfig;
  strong: BorderConfig;
}

export type Border = keyof Borders;

type BaseBorderProps = {
  [K in typeof bordersMap[number]]: Border;
};

export interface BorderProps extends BaseBorderProps {}

export type BorderProperty = keyof BorderProps;

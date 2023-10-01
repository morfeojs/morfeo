import { bordersMap, borderWidthsMap } from '../properties';
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
  [K in (typeof borderWidthsMap)[number]]: BorderWidth;
};

export interface BorderWidthProps extends BaseBorderWidthProps {}

export type BorderWidthProperty = keyof BorderWidthProps;

export type BorderConfig = {
  width?: BorderWidth;
  color?: Color;
  style?: string;
};

export interface Borders {
  none: BorderConfig;
  thin: BorderConfig;
  medium: BorderConfig;
  strong: BorderConfig;
}

export type Border = keyof Borders;

type BaseBorderProps = {
  [K in (typeof bordersMap)[number]]: Border;
};

export interface BorderProps extends BaseBorderProps {}

export type BorderProperty = keyof BorderProps;

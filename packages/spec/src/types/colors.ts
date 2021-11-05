import { colorsMap } from '../properties';

export interface Colors {
  text: string;
  dark: string;
  light: string;
  error: string;
  accent: string;
  success: string;
  warning: string;
  primary: string;
  secondary: string;
  background: string;
  invertedText: string;
  invertedBackground: string;
}

export type Color = keyof Colors;

type BaseColorProps = {
  [K in typeof colorsMap[number]]: Color;
};

export interface ColorProps extends BaseColorProps {}

export type ColorProperty = keyof ColorProps;

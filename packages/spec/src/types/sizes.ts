import { sizesMap } from '../properties';

export interface Sizes {
  '2xs': string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  '2xl': string;
  none: string;
}

export type Size = keyof Sizes;

type BaseSizeProps = {
  [K in typeof sizesMap[number]]: Size;
};

export interface SizeProps extends BaseSizeProps {}

export type SizeProperty = keyof SizeProps;

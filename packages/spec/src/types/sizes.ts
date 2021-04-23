import { sizesMap } from '../properties';

export interface Sizes {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
}

export type Size = keyof Sizes;

type BaseSizeProps = {
  [K in typeof sizesMap[number]]: Size;
};

export interface SizeProps extends BaseSizeProps {}

export type SizeProperty = keyof SizeProps;

import { spacesMap } from '../properties';

export interface Spaces {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
}

export type Space = keyof Spaces;

type BaseSpaceProps = {
  [K in typeof spacesMap[number]]: Space;
};

export interface SpaceProps extends BaseSpaceProps {}

export type SpaceProperty = keyof SpaceProps;

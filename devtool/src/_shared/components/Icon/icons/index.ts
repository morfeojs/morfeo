import { RightChevron, LeftChevron, UpChevron, DownChevron } from './Chevrons';
import {
  UpDoubleChevron,
  DownDoubleChevron,
  LeftDoubleChevron,
  RightDoubleChevron,
} from './DoubleChevrons';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './Arrows';
import { Component } from './Component';
import { Copy } from './Copy';
import { FilterSlider } from './FilterSlider';
import { Filter } from './Filter';
import { Grid } from './Grid';
import { Info } from './Info';
import { List } from './List';
import { Maximize } from './Maximize';
import { Search } from './Search';
import { Settings } from './Settings';
import { Slice } from './Slice';
import { Support } from './Support';
import { Close } from './Close';
import { Loading } from './Loading';

const icons = {
  upChevron: UpChevron,
  downChevron: DownChevron,
  leftChevron: LeftChevron,
  rightChevron: RightChevron,
  upDoubleChevron: UpDoubleChevron,
  leftDoubleChevron: LeftDoubleChevron,
  downDoubleChevron: DownDoubleChevron,
  rightDoubleChevron: RightDoubleChevron,
  downArrow: DownArrow,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  upArrow: UpArrow,
  component: Component,
  copy: Copy,
  filterSlider: FilterSlider,
  filter: Filter,
  grid: Grid,
  info: Info,
  list: List,
  maximize: Maximize,
  search: Search,
  settings: Settings,
  slice: Slice,
  support: Support,
  close: Close,
  loading: Loading,
};

export type IconsMap = typeof icons;

export type IconName = keyof IconsMap;

export default icons;

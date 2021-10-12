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
import { Logo } from './Logo';

const icons = {
  'arrow.up': UpArrow,
  'arrow.down': DownArrow,
  'arrow.left': LeftArrow,
  'arrow.right': RightArrow,
  'chevron.up': UpChevron,
  'chevron.down': DownChevron,
  'chevron.left': LeftChevron,
  'chevron.right': RightChevron,
  'doubleChevron.up': UpDoubleChevron,
  'doubleChevron.left': LeftDoubleChevron,
  'doubleChevron.down': DownDoubleChevron,
  'doubleChevron.right': RightDoubleChevron,
  copy: Copy,
  grid: Grid,
  info: Info,
  list: List,
  logo: Logo,
  close: Close,
  slice: Slice,
  search: Search,
  filter: Filter,
  support: Support,
  loading: Loading,
  maximize: Maximize,
  settings: Settings,
  component: Component,
  filterSlider: FilterSlider,
};

export type IconsMap = typeof icons;

export type IconName = keyof IconsMap;

export default icons;

import React from 'react';

export enum RouteName {
  HOME = 'index',
  SLICE = 'slice',
}

export enum SliceName {
  RADII = 'radii',
  SIZES = 'sizes',
  FONTS = 'fonts',
  COLORS = 'colors',
  SHADOWS = 'shadows',
  BORDERS = 'borders',
  SPACINGS = 'spacings',
  Z_INDICES = 'zIndices',
  GRADIENTS = 'gradients',
  OPACITIES = 'opacities',
  FONT_SIZES = 'fontSizes',
  COMPONENTS = 'components',
  BREAKPOINTS = 'breakpoints',
  TRANSITIONS = 'transitions',
  FONT_WEIGHTS = 'fontWeights',
  LINE_HEIGHTS = 'lineHeights',
  BORDER_WIDTHS = 'borderWidths',
  MEDIA_QUERIES = 'mediaQueries',
  BORDER_STYLES = 'borderStyles',
  LETTER_SPACINGS = 'letterSpacings',
}

export type RouteState = {
  slice: SliceName;
  params?: object;
  detailKey?: string;
};

export type RouteType = {
  name: RouteName;
  state?: RouteState;
  parentRoute?: RouteName;
};

export type RoutingDirection = 'right' | 'left';

export type RoutingContextType = {
  index: RouteName;
  current: RouteType;
  history: RouteType[];
  setCurrent: React.Dispatch<React.SetStateAction<RouteType>>;
  setHistory: React.Dispatch<React.SetStateAction<RouteType[]>>;
};

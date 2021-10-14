import React from "react";

export enum RouteName {
  HOME = "index",
  SLICE = "slice"
}

export enum SliceName {
  COLORS = "colors",
  RADII = "radii",
  SIZES = "sizes",
  FONTS = "fonts",
  SHADOWS = "shadows",
  BORDERS = "borders",
  SPACINGS = "spacings",
  Z_INDICES = "zIndices",
  FONT_SIZES = "fontSizes",
  GRADIENTS = "gradients",
  OPACITIES = "opacities",
  FONT_WEIGHTS = "fontWeights",
  LINE_HEIGHTS = "lineHeights",
  BREAKPOINTS = "breakpoints",
  TRANSITIONS = "transitions",
  BORDER_WIDTHS = "borderWidths",
  MEDIA_QUERIES = "mediaQueries",
  BORDER_STYLES = "borderStyles",
  LETTER_SPACINGS = "letterSpacings",
}

export type RouteState = {
  slice: SliceName,
  detailKey?: string
}

export type RouteType = {
  name: RouteName,
  state?: RouteState,
  parentRoute?: RouteName
}

export type RoutingDirection = "right" | "left";

export type RoutingContextType = {
  index: RouteName;
  current: RouteType;
  history: RouteType[];
  setCurrent: React.Dispatch<React.SetStateAction<RouteType>>;
  setHistory: React.Dispatch<React.SetStateAction<RouteType[]>>;
};

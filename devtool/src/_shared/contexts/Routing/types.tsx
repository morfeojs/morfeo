import React from "react";

export enum RouteName {
  HOME = "index",
  COLORS = "colors",
}

export type RoutingDirection = "right" | "left";

export type RoutingContextType = {
  index: RouteName;
  current: RouteName;
  history: RouteName[];
  setCurrent: React.Dispatch<React.SetStateAction<RouteName>>;
  setHistory: React.Dispatch<React.SetStateAction<RouteName[]>>;
};

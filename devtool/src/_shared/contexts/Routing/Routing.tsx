import React, { createContext, useState, useMemo } from "react";
import { RouteName, RoutingContextType } from "./types";

export const routingContext = createContext<RoutingContextType>({
  index: RouteName.HOME,
  current: RouteName.HOME,
} as RoutingContextType);

const { Provider } = routingContext;

export const RoutingProvider: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(RouteName.HOME);
  const [history, setHistory] = useState<RouteName[]>([]);

  const value = useMemo(
    () => ({ index: RouteName.HOME, current, history, setCurrent, setHistory }),
    [current, history]
  );

  return <Provider value={value}>{children}</Provider>;
};

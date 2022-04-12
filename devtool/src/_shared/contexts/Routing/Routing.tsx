import React, {
  useMemo,
  useState,
  createContext,
  PropsWithChildren,
} from 'react';
import { RouteName, RoutingContextType, RouteType } from './types';
import { routes } from './routes';

export const routingContext = createContext<RoutingContextType>({
  index: routes.index.name,
  current: routes.index,
} as RoutingContextType);

const { Provider } = routingContext;

type Props = PropsWithChildren<{}>;

export const RoutingProvider: React.FC<Props> = ({ children }) => {
  const [current, setCurrent] = useState<RouteType>(routes.index);
  const [history, setHistory] = useState<RouteType[]>([]);

  const value = useMemo(
    () => ({ index: RouteName.HOME, current, history, setCurrent, setHistory }),
    [current, history],
  );

  return <Provider value={value}>{children}</Provider>;
};

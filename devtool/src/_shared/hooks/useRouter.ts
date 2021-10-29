import { useCallback, useContext, useState } from 'react';
import { routingContext, RoutingDirection } from '../contexts';
import { RouteType, RouteName, RouteState } from '../contexts/Routing/types';
import { routes } from '../contexts/Routing/routes';

export function useRouter() {
  const [direction, setDirection] = useState<RoutingDirection>('right');
  const { current, history, setCurrent, setHistory } =
    useContext(routingContext);

  const updateCurrentRoute = useCallback(
    (route: RouteType) => {
      setCurrent(route);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [setCurrent],
  );

  const navigate = useCallback(
    (routeName: RouteName, state?: RouteState) => {
      if (!state && current.name === routeName) {
        return;
      }
      setHistory(prev => [...prev, { ...routes[routeName], state }]);
      setDirection('right');
      updateCurrentRoute({ ...routes[routeName], state });
    },
    [current, updateCurrentRoute, setHistory],
  );

  const navigateBack = useCallback(() => {
    const [newRoute] = history.slice(-2);
    setHistory(history.slice(0, -1));
    setDirection('left');
    updateCurrentRoute(history.length === 1 ? routes.index : newRoute);
  }, [history, setHistory, updateCurrentRoute]);

  return {
    route: current,
    history,
    direction,
    navigate,
    navigateBack,
  };
}

import { useCallback, useContext, useState } from 'react';
import { RouteName, routingContext, RoutingDirection } from '../contexts';

export function useRouter() {
  const [direction, setDirection] = useState<RoutingDirection>('right');
  const { index, current, history, setCurrent, setHistory } =
    useContext(routingContext);

  const updateCurrentRoute = useCallback(
    (route: RouteName) => {
      setCurrent(route);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [setCurrent],
  );

  const navigate = useCallback(
    (route: RouteName) => {
      if (current === route) {
        return;
      }
      setHistory(prev => [...prev, route]);
      setDirection('right');
      updateCurrentRoute(route);
    },
    [current, updateCurrentRoute, setHistory],
  );

  const navigateBack = useCallback(() => {
    const [newRoute] = history.slice(-2);
    setHistory(history.slice(0, -1));
    setDirection('left');
    updateCurrentRoute(history.length === 1 ? index : newRoute);
  }, [history, index, setHistory, updateCurrentRoute]);

  return {
    route: current,
    history,
    direction,
    navigate,
    navigateBack,
  };
}

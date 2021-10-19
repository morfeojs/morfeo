import { theme, Theme } from '@morfeo/core';
import { DependencyList, useEffect, useRef, useState } from 'react';

type ThemeSubscriber = (nextTheme: Theme) => void;

/**
 * useSubscribe
 * use it if you want to execute a callback each time the theme is updated.
 *
 * @param callback the callback to execute when the theme changes
 * @param dependencies
 * @returns
 */
export function useSubscribe(
  callback: ThemeSubscriber,
  dependencies: DependencyList = [],
) {
  const uid = useRef<string>(theme.subscribe(callback));
  useEffect(() => {
    return () => {
      theme.cleanUp(uid.current);
    };
  }, dependencies);

  return uid.current;
}

/**
 * useForceReRender
 * use it to subscribe to theme changes, it will force a re-render or your
 * components each the theme is updated
 * @returns the number of times the re-render was trigger (witch is equals to the number of times the theme is changed since the component was mounted)
 */
export function useForceReRender() {
  const [reRenders, setReRenders] = useState<number>(0);
  useSubscribe(() => {
    setReRenders(prev => prev + 1);
  });

  return reRenders;
}

import { theme, Theme } from '@morfeo/core';
import { DependencyList, useEffect, useRef } from 'react';

type ThemeSubscriber = (nextTheme: Theme) => void;

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

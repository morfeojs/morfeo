import { morfeo, theme as themeHandler } from '@morfeo/core';
import { useSyncExternalStore } from 'react';

function subscribe(...callback: Parameters<typeof themeHandler.subscribe>) {
  const uid = themeHandler.subscribe(...callback);
  return () => themeHandler.cleanUp(uid);
}

/**
 * Get the `morfeo instance`
 * @returns
 */
export function useMorfeo() {
  useSyncExternalStore(subscribe, morfeo.getTheme);

  return morfeo;
}

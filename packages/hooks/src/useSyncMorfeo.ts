import { morfeo, theme as themeHandler } from '@morfeo/core';
import { useSyncExternalStore } from 'react';

function subscribe(...callback: Parameters<typeof themeHandler.subscribe>) {
  const uid = themeHandler.subscribe(...callback);
  return () => themeHandler.cleanUp(uid);
}

/**
 * It subscribes the component/hook where is used to theme changes
 */
export function useSyncMorfeo() {
  return useSyncExternalStore(subscribe, morfeo.getTheme, morfeo.getTheme);
}

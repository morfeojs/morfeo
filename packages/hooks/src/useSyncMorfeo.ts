import { morfeo } from '@morfeo/core';
import { useSyncExternalStore } from 'react';

function subscribe(...callback: Parameters<typeof morfeo.theme.subscribe>) {
  const uid = morfeo.theme.subscribe(...callback);
  return () => morfeo.theme.cleanUp(uid);
}

/**
 * It subscribes the component/hook where is used to theme changes
 */
export function useSyncMorfeo() {
  return useSyncExternalStore(subscribe, morfeo.theme.get, morfeo.theme.get);
}

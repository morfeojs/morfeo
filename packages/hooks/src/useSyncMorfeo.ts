import { morfeo } from '@morfeo/core';
import { useSyncExternalStore } from 'react';

/**
 * It subscribes the component/hook where is used to theme changes
 */
export function useSyncMorfeo() {
  return useSyncExternalStore(
    morfeo.theme.subscribe,
    morfeo.theme.get,
    morfeo.theme.get,
  );
}

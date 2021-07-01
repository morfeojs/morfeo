import { MORFEO_DEVTOOLS } from './constants';
import { theme } from '@morfeo/web';

export function enableMorfeoDevTool() {
  theme.subscribe(newTheme => {
    if (globalThis && globalThis.postMessage) {
      globalThis.postMessage({
        type: MORFEO_DEVTOOLS,
        theme: newTheme,
      });
    }
  });
}

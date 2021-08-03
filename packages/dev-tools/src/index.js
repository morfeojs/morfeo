import { MORFEO_DEVTOOLS } from './constants';
import { theme } from '@morfeo/web';

function onChange(newTheme) {
  if (globalThis && globalThis.postMessage) {
    globalThis.postMessage({
      type: MORFEO_DEVTOOLS,
      theme: newTheme,
    });
  }
}

export function enableMorfeoDevTool() {
  theme.subscribe(onChange);
  onChange(theme.get());
}

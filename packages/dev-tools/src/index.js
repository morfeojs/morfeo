import { MORFEO_DEVTOOLS } from './constants';
import { theme } from '@morfeo/web';

export function enableMorfeoDevTool() {
  theme.subscribe(newTheme => {
    // @ts-ignore
    window.postMessage({
      type: MORFEO_DEVTOOLS,
      theme: newTheme,
    });
  });
}

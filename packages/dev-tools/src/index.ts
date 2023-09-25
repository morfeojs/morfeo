import { MORFEO_DEVTOOLS } from './constants';
import type { Morfeo, Theme } from '@morfeo/web';

function onChange(morfeo: Morfeo, newTheme: Theme) {
  if (globalThis && globalThis.postMessage) {
    globalThis.postMessage(
      {
        type: MORFEO_DEVTOOLS,
        theme: newTheme,
        current: morfeo.theme.get(),
      },
      '*',
    );
  }
}

export function enableMorfeoDevTool(morfeo: Morfeo) {
  morfeo.theme.subscribe(newTheme => onChange(morfeo, newTheme));
  onChange(morfeo, morfeo.theme.get());
}

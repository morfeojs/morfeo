import { MORFEO_DEVTOOLS } from './constants';
import { morfeo, Theme } from '@morfeo/web';

function onChange(newTheme: Theme) {
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

export function enableMorfeoDevTool() {
  morfeo.theme.subscribe(onChange);
  onChange(morfeo.theme.get());
}

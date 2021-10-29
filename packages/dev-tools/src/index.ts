import { MORFEO_DEVTOOLS } from './constants';
import { morfeo, Theme, theme } from '@morfeo/web';

function onChange(newTheme: Theme) {
  if (globalThis && globalThis.postMessage) {
    globalThis.postMessage(
      {
        type: MORFEO_DEVTOOLS,
        theme: newTheme,
        themes: morfeo.getThemes(),
        current: morfeo.getCurrent(),
      },
      '*',
    );
  }
}

export function enableMorfeoDevTool() {
  theme.subscribe(onChange);
  onChange(theme.get());
}

import { morfeo, resetCss, loadFont } from '@morfeo/web';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import { lightTheme, darkTheme } from '@morfeo/preset-default';
import { components } from './theme';
import App from './App.svelte';

enableMorfeoDevTool();
resetCss();

loadFont({
  importFontFace: true,
  urls: [
    {
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
    },
  ],
  name: 'regular',
  family: 'Roboto',
});

morfeo.setTheme('light', { ...lightTheme, components });
morfeo.setTheme('dark', { ...darkTheme, components });

morfeo.setCurrentTheme('light');

const app = new App({
  target: document.body,
});

export default app;

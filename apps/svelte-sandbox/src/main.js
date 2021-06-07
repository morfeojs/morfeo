import { theme, resetCss, loadFont } from '@morfeo/web';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import App from './App.svelte';
import { lightTheme } from './theme';

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
enableMorfeoDevTool();
resetCss();
theme.set(lightTheme);

const app = new App({
  target: document.body,
});

export default app;

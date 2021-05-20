import { theme } from '@morfeo/web';
import App from './App.svelte';
import { lightTheme } from './theme';

theme.set(lightTheme);

const app = new App({
  target: document.body,
});

export default app;

import { theme } from '@morfeo/web';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import App from './App.svelte';
import { lightTheme } from './theme';

enableMorfeoDevTool();

theme.set(lightTheme);

const app = new App({
  target: document.body,
});

export default app;

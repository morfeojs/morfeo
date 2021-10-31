import React from 'react';
import { ThemeProvider } from '@morfeo/styled-components-web';
import { lightTheme, darkTheme } from '@morfeo/preset-default';
import { morfeo, resetCss, loadFont } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { components } from './theme';

enableMorfeoDevTool();
resetCss();

morfeo.setTheme('light', { ...lightTheme, components } as any);
morfeo.setTheme('dark', { ...darkTheme, components } as any);

morfeo.useTheme('light');

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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

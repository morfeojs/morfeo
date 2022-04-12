import React from 'react';
import { createRoot } from 'react-dom/client';
import { initPreset } from '@morfeo/preset-default';
import { morfeo, resetCss, loadFont, MorfeoProvider } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import App from './App';
import reportWebVitals from './reportWebVitals';

resetCss();

initPreset();

morfeo.setCurrentTheme('light');

loadFont(
  {
    importFontFace: true,
    urls: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Open+Sans:wght@300;600&display=swap',
      },
    ],
    name: 'default',
    family: 'Montserrat',
  },
  ['light', 'dark'],
);

loadFont(
  {
    urls: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap',
      },
    ],
    importFontFace: true,
    family: "'Red Hat Mono', monospace",
    name: 'mono',
  },
  ['light', 'dark'],
);

enableMorfeoDevTool();

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MorfeoProvider>
        <App />
      </MorfeoProvider>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

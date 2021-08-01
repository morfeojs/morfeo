import React from 'react';
import { theme, resetCss, loadFont } from '@morfeo/react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import { lightTheme } from '@morfeo/preset-default';
import { lightTheme as localTheme } from './theme';


enableMorfeoDevTool();
resetCss();

theme.set(lightTheme);
theme.set(localTheme as any)

loadFont({
  importFontFace: true,
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap'
  }],
  name: 'regular',
  family: 'Roboto',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

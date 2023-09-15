import React from 'react';
import ReactDOM from 'react-dom/client';
import { initPreset } from '@morfeo/preset-default';
import App from './App';
import './styles/morfeo.css';

initPreset();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

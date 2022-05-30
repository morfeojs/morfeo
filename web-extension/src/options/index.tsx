import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from './Options';
import '../_shared/css/index.css';

const container = document.getElementById('options');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Options />
    </React.StrictMode>,
  );
}

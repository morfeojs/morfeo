import { theme } from '@morfeo/preset-default';
import { createMorfeo } from '@morfeo/react';

const morfeo = createMorfeo({
  theme,
  entryPoints: ['./**/*.{ts,tsx,js,jsx}'],
  output: './styles/morfeo.css',
});

export { theme, morfeo };

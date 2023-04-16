import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { MorfeoVitePlugin } from '@morfeo/compiler';
import { initPreset } from '@morfeo/preset-default';

initPreset();

export default defineConfig({
  plugins: [react(), MorfeoVitePlugin()],
});

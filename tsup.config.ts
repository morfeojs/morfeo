import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  outDir: 'build',
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: false,
  dts: true,
  minify: true,
});

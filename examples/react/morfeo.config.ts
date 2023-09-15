import { MorfeoCompilerOptions } from '@morfeo/compiler';
import { theme } from '@morfeo/preset-default';

const config: MorfeoCompilerOptions = {
  theme,
  entryPoints: ['./src/**/*.{ts,tsx,js,jsx}'],
  output: './src/styles/morfeo.css',
};

export default config;

import { MorfeoCompilerOptions } from '@morfeo/compiler';
import { morfeo } from './src/morfeo';

const config: MorfeoCompilerOptions = {
  morfeo,
  entryPoints: ['./src/**/*.{ts,tsx,js,jsx}'],
  output: './src/styles/morfeo.css',
};

export default config;

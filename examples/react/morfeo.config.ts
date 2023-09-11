import { MorfeoCompilerOptions } from '@morfeo/compiler';
import { theme } from '@morfeo/preset-default';

const config: MorfeoCompilerOptions = {
  theme,
  entryPoints: ['./src/**/*.{ts,tsx,js,jsx}'],
  output: './src/styles/morfeo.css',
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  },
};

export default config;

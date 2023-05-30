import {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react/types';
import { nextFiles } from './const/nextFiles';
import { viteFiles } from './const/viteReactFiles';

export const playgroundFiles: Partial<
  Record<SandpackPredefinedTemplate, SandpackFiles>
> = {
  nextjs: nextFiles,
  'vite-react-ts': viteFiles,
};

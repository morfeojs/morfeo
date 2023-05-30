import { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react/types';

export type PlaygroundTemplate = Extract<
  SandpackPredefinedTemplate,
  'nextjs' | 'vite-react-ts'
>;

import { Morfeo } from '@morfeo/web';

export type MorfeoBabelPluginOptions = {
  morfeo: Morfeo;
};

export type MorfeoBabelResult = {
  styles: Record<string, string>;
  globalStyles: Record<string, string>;
};

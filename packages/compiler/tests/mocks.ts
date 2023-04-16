import { UnpluginBuildContext } from 'unplugin';

export const pluginContext: UnpluginBuildContext = {
  addWatchFile: jest.fn(),
  emitFile: jest.fn(),
  getWatchFiles: jest.fn().mockImplementation(() => []),
  parse: jest.fn(),
};

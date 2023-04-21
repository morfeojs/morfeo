import { createUnplugin } from 'unplugin';
import { getMorfeoUnpluginOptions } from './plugin';

const unplugin = createUnplugin(getMorfeoUnpluginOptions);

export const MorfeoVitePlugin = unplugin.vite as any;
export const MorfeoRollupPlugin = unplugin.rollup;
export const MorfeoWebpackPlugin = unplugin.webpack as any;
export const MorfeoRspackPlugin = unplugin.rspack;
export const MorfeoEsbuildPlugin = unplugin.esbuild;

export type { MorfeoPluginOptions } from './types';

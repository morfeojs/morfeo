import { createUnplugin } from 'unplugin';
import { getMorfeoUnpluginOptions } from './plugin';

const unplugin = createUnplugin(getMorfeoUnpluginOptions);

export const MorfeoVitePlugin = unplugin.vite;
export const MorfeoRollupPlugin = unplugin.rollup;
export const MorfeoWebpackPlugin = unplugin.webpack;
export const MorfeoRspackPlugin = unplugin.rspack;
export const MorfeoEsbuildPlugin = unplugin.esbuild;

export type { MorfeoPluginOptions } from './types';

import { createUnplugin } from 'unplugin';
import { getMorfeoUnpluginOptions } from './plugin';
import type { PluginOption } from 'vite';
import type { MorfeoPluginOptions } from './types';

const unplugin = createUnplugin(getMorfeoUnpluginOptions);

type VitePlugin = (options: MorfeoPluginOptions) => PluginOption;

export const MorfeoVitePlugin = unplugin.vite as VitePlugin;
export const MorfeoRollupPlugin = unplugin.rollup;
export const MorfeoWebpackPlugin = unplugin.webpack;
export const MorfeoRspackPlugin = unplugin.rspack;
export const MorfeoEsbuildPlugin = unplugin.esbuild;

export type { MorfeoPluginOptions } from './types';

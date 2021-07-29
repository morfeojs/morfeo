import { deepMerge } from '@morfeo/web';
import { BuildConfig } from '../types';
import { getConfiguration } from './getConfiguration';

export function getBuildConfiguration({
  configPath,
  ...rest
}: Partial<BuildConfig>): BuildConfig {
  const morfeoConfig = getConfiguration(configPath as string);

  const { buildPath } = morfeoConfig;

  return deepMerge(
    { buildPath, configPath } as BuildConfig,
    rest,
  ) as BuildConfig;
}

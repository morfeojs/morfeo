import * as fs from 'fs';
import * as path from 'path';
import { BuildConfig, MorfeoConfig } from '../types';

const MORFEO_CONFIG_FILE_EXTENSIONS = ['.js', '.ts', '.json', ''];

export function getConfiguration({
  configPath,
  ...rest
}: Partial<BuildConfig>): BuildConfig {
  const morfeoConfigPath = path.join(process.cwd(), configPath as string);
  let morfeoConfig: MorfeoConfig = {} as any;
  const configExists = MORFEO_CONFIG_FILE_EXTENSIONS.some(extension => {
    return fs.existsSync(`${morfeoConfigPath}${extension}`);
  });

  if (configExists) {
    const imported = require(morfeoConfigPath);
    morfeoConfig = imported.default ? imported.default : imported;
  }

  const { buildPath } = morfeoConfig;

  return {
    ...rest,
    buildPath: rest.buildPath || buildPath,
    configPath,
  } as BuildConfig;
}

import * as fs from 'fs';
import * as path from 'path';
import { MorfeoConfig } from '../types';

const MORFEO_CONFIG_FILE_EXTENSIONS = ['.js', '.ts', '.json', ''];

const DEFAULT_CONFIG: MorfeoConfig = {
  buildPath: 'morfeo',
  themes: {},
};

export function getConfiguration(configPath: string): MorfeoConfig {
  const morfeoConfigPath = path.join(process.cwd(), configPath as string);

  const configExists = MORFEO_CONFIG_FILE_EXTENSIONS.some(extension => {
    return fs.existsSync(`${morfeoConfigPath}${extension}`);
  });

  if (configExists) {
    const morfeoConfig = require(morfeoConfigPath);
    return morfeoConfig.default ? morfeoConfig.default : morfeoConfig;
  }

  return DEFAULT_CONFIG as MorfeoConfig;
}

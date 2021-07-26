import * as StyleDictionary from 'style-dictionary';
import * as fs from 'fs';
import * as path from 'path';
import { rmdir } from './rmdir';

const STYLE_DICTIONARY_CONFIG_PATH = path.join(__dirname, '../../config.json');
const STYLE_DICTIONARY_BUILD_PATH = path.join(__dirname, '../../build');
const STYLE_DICTIONARY_CONFIG = JSON.parse(
  fs.readFileSync(STYLE_DICTIONARY_CONFIG_PATH, { encoding: 'utf8' }),
);

function deleteBuildedTokens() {
  console.log('old build directory removed');
  rmdir(STYLE_DICTIONARY_BUILD_PATH);
}

export function buildTokens(themeName: string) {
  deleteBuildedTokens();
  const Builder = StyleDictionary.extend(STYLE_DICTIONARY_CONFIG);
  Builder.buildAllPlatforms();

  const oldScss = fs.readFileSync(
    path.join(STYLE_DICTIONARY_BUILD_PATH, 'scss', '_variables.scss'),
    { encoding: 'utf8' },
  );
  const parsedScss = oldScss.split('\n').join('\n\t');
  const newScss = [
    `:root, html[data-morfeo-theme="${themeName}"] {`,
    parsedScss,
    `}`,
  ].join('\n');

  fs.writeFileSync(
    path.join(STYLE_DICTIONARY_BUILD_PATH, 'scss', '_variables.scss'),
    newScss,
  );
}

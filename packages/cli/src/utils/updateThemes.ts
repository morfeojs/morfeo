import { Theme } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';

export function updateThemes<Key extends string>(
  themes: Record<Key, string>,
  themeObjects: Record<Key, Theme>,
) {
  const themeNames = Object.keys(themes) as Key[];

  function makeThemeFile(themePath: string, themeObject: Theme) {
    const stringified = JSON.stringify(themeObject, undefined, 2);
    const ext = path.extname(themePath);
    if (ext.includes('json')) {
      return stringified;
    }

    if (ext.includes('js')) {
      return `module.exports = ${stringified}`;
    }

    return `export default ${stringified}`;
  }

  themeNames.forEach(themeName => {
    fs.writeFileSync(
      path.join(process.cwd(), themes[themeName]),
      makeThemeFile(themes[themeName], themeObjects[themeName]),
    );
  });
}

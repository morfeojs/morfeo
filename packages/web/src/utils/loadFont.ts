import { morfeo, ThemeName, Font } from '@morfeo/core';
import { MountFontParams, mountFont } from '@morfeo/fonts';

export type LoadFontParams = Omit<MountFontParams, 'name'> & { name: Font };
/**
 * Load a fontFace on document head style and add it to the all morfeo themes
 *
 * ---
 *
 * ### load a google font
 *
 * ```typescript
 * loadFont({
 *   urls: [{
 *     url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap'
 *   }],
 *   importFontFace: true,
 *   fontFamily: 'Roboto',
 *   name: 'bold',
 * })
 * ```
 *
 * ---
 *
 * ### load a local font
 *
 *  ```typescript
 * loadFont({
 *   urls: [
 *     {
 *       url: './fonts/Roboto-bold.woff',
 *       format: 'woff'
 *     },
 *     {
 *       url: './fonts/Roboto-bold.woff2',
 *       format: 'woff2'
 *     },
 *   ],
 *   importFontFace: true,
 *   fontFamily: 'Roboto',
 *   name: 'bold',
 * })
 * ```
 *
 * ## load fonts only to some themes:
 *
 * ```typescript
 * loadFont({...}, ['dark']);
 * ```
 */

export function loadFont(font: LoadFontParams, themeNames?: ThemeName[]) {
  mountFont(font);
  const allThemes = Object.keys(morfeo.getThemes()) as ThemeName[];
  const filteredThemes =
    themeNames && themeNames.length > 0
      ? allThemes.filter(themeName => themeNames.includes(themeName))
      : allThemes;

  filteredThemes.forEach(themeName => {
    morfeo.setTheme(themeName, { fonts: { [font.name]: font.family } });
  });
}

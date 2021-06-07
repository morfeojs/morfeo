import { theme, Font } from '@morfeo/core';
import { MountFontParams, mountFont } from '@morfeo/fonts';

export type LoadFontParams = Omit<MountFontParams, 'name'> & { name: Font };
/**
 * Load a fontFace on document head style and add it to the morfeo theme
 *
 * ---
 *
 * ### load a google font
 *
 * ```ts
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
 *  ```ts
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
 */

export function loadFont(font: LoadFontParams) {
  mountFont(font);
  theme.setValue('fonts', font.name, font.family);
}

import { MountFontParams } from './types';
import { unmountFont } from './unmountFont';

function getFontCss(font: MountFontParams) {
  if (font.importFontFace) {
    const url = font.urls.reduce((_, value) => `url(${value.url})`, '');
    return `@import ${url};`;
  }

  const url = font.urls.reduce(
    (acc, value) =>
      `${acc ? acc + '\n' : acc} url('${value.url}') ${
        value.format ? `format('${value.format}')` : ''
      }`,
    '',
  );

  return `
    @fontFace {
      font-family: ${font.family};
      ${font.weight ? `font-weight: ${font.weight};` : ''}
      url: ${url}
    }
  `;
}

/**
 * Mount a fontFace on document head style
 *
 * ---
 *
 * ### mount a google font
 *
 * ```ts
 * mountFont({
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
 * ### mount a local font
 *
 *  ```ts
 * mountFont({
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
export function mountFont(font: MountFontParams) {
  if (globalThis && globalThis.document) {
    const css = getFontCss(font);

    const newFontStyle = `
      <style class="morfeo-font" id="font-${font.name}">
        ${css}
      </style>
    `;
    unmountFont(font.name);
    document.head.innerHTML += newFontStyle;
  }
}

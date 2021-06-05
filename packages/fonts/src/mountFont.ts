export type FontType = 'woff' | 'woff2' | 'trueType' | 'embedded-opentype';

export type FontUrl = {
  url: string;
  format?: FontType;
};

export type MountFontParams = {
  name: string; 
  urls: FontUrl[];
  family: string;
  /**
   * set to true if you are providing a css url with predefined fontFace(example: Google Font)
   * Please note: it support **one font family** per css import
   */
  importFontFace?: boolean;
  weight?: string;
};

export function unmountFont(name: string) {
  const currentFontStyle = document.getElementById(`font-${name}`);

  if (currentFontStyle) {
    currentFontStyle.remove();
  }
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
  let newFontFaceContent = '';
  

  if (font.importFontFace) {
    newFontFaceContent += `
    @import ${font.urls.reduce(
          (_, value) => `url(${value.url})`,
          '',
        )}
    `
  }

  if (!font.importFontFace) {
    newFontFaceContent += `
    @fontFace {
      font-family: ${font.family};
      ${font.weight ? `font-weight: ${font.weight};` : ''}
      url: ${font.urls.reduce(
        (acc, value) => `${acc ? acc + '\n' : acc} url('${value.url}') ${value.format ? `format('${value.format}')` : ''}`,
        '',
      )}
    }
  `;
  }

  const newFontStyle = `
    <style id="font-${font.name}">
      ${newFontFaceContent}
    </style>
  `

  unmountFont(font.name)

  document.head.innerHTML += newFontStyle
}
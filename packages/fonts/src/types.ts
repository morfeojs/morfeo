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

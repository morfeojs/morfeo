import { loadFont, LoadFontParams } from '../src/utils';
import { morfeo, ThemeName } from '@morfeo/core';

const newImportedFontFace: LoadFontParams = {
  importFontFace: true,
  urls: [
    {
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
    },
  ],
  name: 'regular' as any,
  family: 'Roboto',
};

const newFontFace: LoadFontParams = {
  urls: [
    {
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
    },
  ],
  name: 'bold' as any,
  family: 'Roboto',
};

beforeEach(() => {
  morfeo.__dangerousReset();
  morfeo.setTheme('light' as ThemeName, { fonts: {} });
  morfeo.setTheme('dark' as ThemeName, { fonts: {} });
  morfeo.useTheme('light' as ThemeName);
});

describe('loadFont', () => {
  describe('new fontFace', () => {
    test('should add a font to all the themes', () => {
      loadFont(newFontFace);
      const themeFont = morfeo.getTheme()['fonts'][newFontFace.name];
      expect(themeFont).toBe(newFontFace.family);
    });

    test('should add the font to all the themes even if the second parameter is an empty array', () => {
      loadFont(newFontFace, []);
      const lightThemeFont = morfeo.getTheme('light' as ThemeName)['fonts'][
        newFontFace.name
      ];
      const darkThemeFont = morfeo.getTheme('dark' as ThemeName)['fonts'][
        newFontFace.name
      ];
      expect(lightThemeFont).toBe(newFontFace.family);
      expect(darkThemeFont).toBe(newFontFace.family);
    });
  });

  describe('imported fontFace', () => {
    test('should add the imported font to all the themes', () => {
      loadFont(newImportedFontFace);
      const themeFont = morfeo.getTheme()['fonts'][newImportedFontFace.name];
      expect(themeFont).toBe(newImportedFontFace.family);
    });
  });

  describe('theme added only to one theme', () => {
    test('should add the font only in one theme', () => {
      loadFont(newFontFace, ['light' as ThemeName]);
      const lightThemeFont = morfeo.getTheme('light' as ThemeName)['fonts'][
        newFontFace.name
      ];
      const darkThemeFont = morfeo.getTheme('dark' as ThemeName)['fonts'][
        newFontFace.name
      ];
      expect(lightThemeFont).toBe(newImportedFontFace.family);
      expect(darkThemeFont).not.toBeDefined();
    });
  });
});

import { loadFont, LoadFontParams } from '../src/utils';
import { theme } from '@morfeo/core';

const newImportedFontFace: LoadFontParams = {
  importFontFace: true,
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
  }],
  name: 'regular',
  family: 'Roboto',
}

const newFontFace: LoadFontParams = {
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
  }],
  name: 'bold',
  family: 'Roboto',
}

beforeEach(() => {
  theme.reset()
})
describe('loadFont', () => {
  describe('new fontFace', () => {
    test('should add a font on theme', () => {
      loadFont(newFontFace)
      const themeFont = theme.getValue('fonts', newFontFace.name)
      expect(themeFont).toBe(newFontFace.family)
    })
  })
  describe('imported fontFace', () => {
    test('should add a font on theme', () => {
      loadFont(newImportedFontFace)
      const themeFont = theme.getValue('fonts', newImportedFontFace.name)
      expect(themeFont).toBe(newImportedFontFace.family)
    })
  })
})
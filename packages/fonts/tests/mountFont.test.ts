import { mountFont, MountFontParams } from '../src';

const newImportedFontFace: MountFontParams = {
  importFontFace: true,
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
  }],
  name: 'bold',
  family: 'Roboto',
}

const newFontFace: MountFontParams = {
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
  }],
  name: 'bold',
  family: 'Roboto',
}

const newFontWithFormat: MountFontParams = {
  urls: [{
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
    format: 'woff'
  }, {
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
    format: 'woff2'
  }],
  name: 'bold',
  family: 'Roboto',
}

describe('mountFont', () => {
  describe('new fontFace', () => {
    test('should add a style with the fontFace definition', () => {
      mountFont(newFontFace)
      const boldStyle = document.getElementById('font-bold');
      expect(boldStyle?.textContent).toContain('@fontFace');
    })

    test('should set a style that contain font-weight', () => {
      mountFont({ ...newFontFace, weight: 'bold' })
      const boldStyle = document.getElementById('font-bold');
      expect(boldStyle?.textContent).toContain('font-weight: bold');
    })

    test('should set a style that contain format', () => {
      mountFont(newFontWithFormat)
      const boldStyle = document.getElementById('font-bold');
      expect(boldStyle?.textContent).toContain('format(\'woff\')');
    })
  })
  describe('imported fontFace', () => {
    test('should add a style with the fontface import', () => {
      mountFont(newImportedFontFace)
      const boldStyle = document.getElementById('font-bold');
      expect(boldStyle?.textContent).toContain('@import');
    })
  })
})
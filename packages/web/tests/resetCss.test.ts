import { resetCss } from '../src/utils/resetCss';
describe('resetCss', () => {
  test('should add the reset style element on the html head', () => {
    resetCss()
    expect(document.getElementsByTagName('style')).toBeTruthy();  
  })
})
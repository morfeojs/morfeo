import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  sizes: {
    s: '5px',
    m: '10px',
    l: '20px',
  },
} as any;

describe('sizes', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the property `size`', () => {
    const result = parsers.resolve({
      size: 'm',
      minSize: 's',
      maxSize: 'l',
    });
    expect(result).toEqual({
      height: '10px',
      width: '10px',
      minHeight: '5px',
      minWidth: '5px',
      maxHeight: '20px',
      maxWidth: '20px',
    });
  });
  test('should resolve the value of the property "h" and "w"', () => {
    const result = parsers.resolve({
      h: 'm',
      w: 'l',
    });
    expect(result).toEqual({
      height: '10px',
      width: '20px',
    });
  });
  test('should resolve the value of the property "minH" and "maxH"', () => {
    const result = parsers.resolve({
      minH: 'm',
      maxH: 'l',
    });
    expect(result).toEqual({
      minHeight: '10px',
      maxHeight: '20px',
    });
  });
  test('should resolve the value of the property "minW" and "maxW"', () => {
    const result = parsers.resolve({
      minW: 'm',
      maxW: 'l',
    });
    expect(result).toEqual({
      minWidth: '10px',
      maxWidth: '20px',
    });
  });
});

import { morfeo, baseParser } from '../../src';

const THEME = {
  colors: {
    primary: 'black',
  },
} as any;

describe('baseParser', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should resolve the value from the theme slice', () => {
    const result = baseParser({
      property: 'color',
      scale: 'colors',
      value: 'primary',
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });

    expect(result).toEqual({ color: 'black' });
  });

  test('should return the not resolved value if the theme slice is not found', () => {
    const result = baseParser({
      property: 'padding',
      scale: 'spacings',
      value: '10px' as any,
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });

    expect(result).toEqual({ padding: '10px' });
  });

  test('should return an empty object in case of not found if the param `failOnNotFound` is true', () => {
    const result = baseParser({
      property: 'color',
      scale: 'colors',
      value: 10 as any,
      failOnNotFound: true,
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });

    expect(result).toEqual({});
  });
});

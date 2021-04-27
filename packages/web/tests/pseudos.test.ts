import { Theme } from '@morfeo/core';
import { parsers, theme } from '../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

describe('pseudos', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should generate the style for the pseudo attribute', () => {
    const result = parsers.resolve({
      style: {
        '&:hover': {
          bg: 'primary',
        },
      },
    });
    expect(result).toEqual({
      '&:hover': {
        backgroundColor: '#e3e3e3',
      },
    });
  });
});

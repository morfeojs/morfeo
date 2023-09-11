import { Theme } from '@morfeo/core';
import { morfeo } from '../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

describe('pseudos', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should generate the style for the pseudo attribute', () => {
    const result = morfeo.parsers.resolve({
      '&:hover': {
        bg: 'primary',
      },
    });
    expect(result).toEqual({
      '&:hover': {
        backgroundColor: '#e3e3e3',
      },
    });
  });
});

import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

describe('colors', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the property `bg` and `color` from the colors slice', () => {
    const result = parsers.resolve({
      style: { bg: 'secondary', color: 'primary' },
    });
    expect(result).toEqual({ backgroundColor: '#000', color: '#e3e3e3' });
  });
});

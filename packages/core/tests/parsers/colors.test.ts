import { Theme } from '@morfeo/spec';
import { morfeo } from '../../src';

const THEME = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
    accent: '$light',
    background: '$primary',
    foreground: '$secondary',
  },
} as any as Theme;

describe('colors', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should resolve the value of the property `bg` and `color` from the colors slice', () => {
    const result = morfeo.parsers.resolve({
      bg: 'secondary',
      color: 'primary',
    });
    expect(result).toEqual({ backgroundColor: '#000', color: '#e3e3e3' });
  });

  test('should resolve color placeholders', () => {
    const result = morfeo.parsers.resolve({
      bg: 'background',
      // @ts-expect-error
      color: 'foreground',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test('should return input values if the placeholder is wrong', () => {
    const result = morfeo.parsers.resolve({ bg: 'accent' });
    expect(result).toEqual({ backgroundColor: 'accent' });
  });
});

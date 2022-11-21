import { parsers, theme } from '../../src';

const THEME = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
    background: '#e3e3e3',
    foreground: '#000',
  },
  colorSchemas: {
    dark: {
      background: 'secondary',
      foreground: 'primary',
    },
  },
} as const;

describe('colors', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the property `bg` and `color` from the colors slice', () => {
    const result = parsers.resolve({ bg: 'secondary', color: 'primary' });
    expect(result).toEqual({ backgroundColor: '#000', color: '#e3e3e3' });
  });

  test('should resolve color based on colorSchema', () => {
    const result = parsers.resolve({
      bg: 'background',
      color: 'foreground' as any,
      colorSchema: 'dark',
    });
    expect(result).toEqual({ backgroundColor: '#000', color: '#e3e3e3' });
  });

  test("should return the original value if colorSchema doesn't exist", () => {
    const result = parsers.resolve({
      bg: 'background',
      // @ts-expect-error
      color: 'foreground',
      colorSchema: 'unexistingSchema',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test("should return the original value if the input value doesn't exist on color schema", () => {
    const result = parsers.resolve({
      // @ts-expect-error
      bg: 'unexistingValue',
      colorSchema: 'dark',
    });
    expect(result).toEqual({ backgroundColor: 'unexistingValue' });
  });
});

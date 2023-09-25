import { createMorfeo } from '../src';

const morfeo = createMorfeo();

describe('multi theming', () => {
  beforeAll(() => {
    morfeo.theme.set({});
  });

  test('should create the media preferred schemas', () => {
    const result = morfeo.parsers.resolve({
      bg: {
        light: 'white',
        dark: 'black',
      },
    });

    expect(result).toEqual({
      '@media (prefers-color-scheme: light)': {
        backgroundColor: 'var(--colors-white)',
      },
      '@media (prefers-color-scheme: dark)': {
        backgroundColor: 'var(--colors-black)',
      },
    });
  });

  test('should create only the dark mode in case light is not specified', () => {
    const result = morfeo.parsers.resolve({
      bg: {
        dark: 'black',
      },
    });

    expect(result).toEqual({
      '@media (prefers-color-scheme: dark)': {
        backgroundColor: 'var(--colors-black)',
      },
    });
  });

  test('should create only the light mode in case dark is not specified', () => {
    const result = morfeo.parsers.resolve({
      bg: {
        light: 'white',
      },
    });

    expect(result).toEqual({
      '@media (prefers-color-scheme: light)': {
        backgroundColor: 'var(--colors-white)',
      },
    });
  });
});

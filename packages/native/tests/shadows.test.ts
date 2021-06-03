import { parsers, theme } from '../src';
import { shadowOffset } from '../src/parsers';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: 10,
    m: 20,
  },
  sizes: {
    l: 30,
    xl: 40,
  },
  shadows: {
    strong: {
      color: 'primary',
      offset: { height: 's', width: 's' },
      opacity: 0.4,
      radius: 30,
    },
    light: {
      color: 'secondary',
      offset: { width: 'xl' },
      opacity: 0.4,
      radius: 30,
    },
    medium: {
      elevation: 2,
      color: 'secondary',
      offset: { height: 30 },
      opacity: 0.4,
    },
    custom: {
      color: 'not inside theme',
      offset: undefined,
    },
    noOffset: {
      offset: {},
    },
  },
} as any;

beforeAll(() => {
  theme.set(THEME);
});

describe('shadows', () => {
  test('should generate the property `boxShadow` based on the strong shadow', () => {
    const result = parsers.resolve({ shadow: 'strong' });
    expect(result).toEqual({
      shadowColor: 'black',
      shadowOffset: { height: 10, width: 10 },
      shadowOpacity: 0.4,
      shadowRadius: 30,
    });
  });

  test('should generate the property `shadow` based on the light shadow', () => {
    const result = parsers.resolve({ shadow: 'light' });
    expect(result).toEqual({
      shadowColor: 'white',
      shadowOffset: { height: 0, width: 40 },
      shadowOpacity: 0.4,
      shadowRadius: 30,
    });
  });

  test('should generate the property `shadow` based on the medium shadow', () => {
    const result = parsers.resolve({ shadow: 'medium' });

    expect(result).toEqual({
      elevation: 2,
      shadowColor: 'white',
      shadowOffset: { height: 30, width: 0 },
      shadowOpacity: 0.4,
    });
  });

  test('should return an empty object if the shadow is not found', () => {
    const result = parsers.resolve({ shadow: 'none' });
    expect(result).toEqual({});
  });

  test('should use custom colors if they are not inside the theme', () => {
    const result = parsers.resolve({
      shadow: 'custom' as any,
    });
    expect(result).toEqual({
      shadowColor: 'not inside theme',
    });
  });

  test('should not put any value with any empty configuration', () => {
    const result = parsers.resolve({
      shadow: 'noOffset' as any,
    });
    expect(result).toEqual({});
  });

  test('should return an empty object if `shadowOffset` is undefined', () => {
    const result = shadowOffset({
      value: undefined,
    });
    expect(result).toEqual({});
  });
});

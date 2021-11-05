import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  borders: {
    primary: {
      width: 'm',
      style: 'solid',
      color: 'primary',
    },
    secondary: {
      width: 'l',
      color: 'primary',
    },
  },
  colors: {
    primary: 'red',
  },
  borderWidths: {
    m: '3px',
    l: '5px',
  },
  borderStyles: {
    solid: 'solid',
  },
} as any;

beforeAll(() => {
  theme.set(THEME);
});

afterAll(() => {
  theme.reset();
});

describe('borders', () => {
  test('should generate a style with border property', () => {
    const result = parsers.resolve({ border: 'primary' as any });
    expect(result).toEqual({
      border: '3px solid red',
    });
  });

  test('should generate a border style without borderStyle', () => {
    const result = parsers.resolve({ border: 'secondary' } as any);
    expect(result).toEqual({
      border: '5px red',
    });
  });

  test('should generate a border style from a regular css string', () => {
    const result = parsers.resolve({ border: '4px dotted blue' } as any);
    expect(result).toEqual({
      border: '4px dotted blue',
    });
  });
});

describe('borderStyles', () => {
  test('should generate a style with fontSize property', () => {
    const result = parsers.resolve({ borderStyle: 'solid' });
    expect(result).toEqual({
      borderStyle: 'solid',
    });
  });
});

describe('borderWidths', () => {
  test('should generate a style with fontWeight property', () => {
    const result = parsers.resolve({ borderWidth: 'm' });
    expect(result).toEqual({
      borderWidth: '3px',
    });
  });
});

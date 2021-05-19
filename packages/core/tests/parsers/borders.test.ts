import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  borders: {
    primary: '1px solid red',
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
    const result = parsers.resolve({ border: 'primary' });
    expect(result).toEqual({
      border: '1px solid red',
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

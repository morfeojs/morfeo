import { Theme } from '@morfeo/spec';
import { createMorfeo } from '../../src';

const morfeo = createMorfeo();

const THEME: Theme = {
  fontSizes: {
    l: '30px',
  },
  fonts: {
    regular: 'Any font',
  },
  fontWeights: {
    bold: '900',
  },
  letterSpacings: {
    body: '10px',
  },
  lineHeights: {
    body: '40px',
  },
} as any;

beforeAll(() => {
  morfeo.theme.set(THEME);
});

afterAll(() => {
  morfeo.theme.reset();
});

describe('fonts', () => {
  test('should generate a style with fontFamily property', () => {
    const result = morfeo.parsers.resolve({
      fontFamily: 'regular' as any,
    });
    expect(result).toEqual({
      fontFamily: 'Any font',
    });
  });
});

describe('fontSizes', () => {
  test('should generate a style with fontSize property', () => {
    const result = morfeo.parsers.resolve({ fontSize: 'l' });
    expect(result).toEqual({
      fontSize: '30px',
    });
  });
});

describe('fontWeights', () => {
  test('should generate a style with fontWeight property', () => {
    const result = morfeo.parsers.resolve({ fontWeight: 'bold' });
    expect(result).toEqual({
      fontWeight: '900',
    });
  });
});

describe('letterSpacings', () => {
  test('should generate a style with letterSpacing property', () => {
    const result = morfeo.parsers.resolve({ letterSpacing: 'body' });
    expect(result).toEqual({
      letterSpacing: '10px',
    });
  });
});

describe('lineHeights', () => {
  test('should generate a style with lineHeight property', () => {
    const result = morfeo.parsers.resolve({ lineHeight: 'body' });
    expect(result).toEqual({
      lineHeight: '40px',
    });
  });
});

import { Theme } from '@morfeo/spec';
import { shadows } from '../../src/parsers/shadows';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  colors: {
    primary: 'white',
    secondary: 'white',
  },
  space: {
    s: '10px',
    m: '20px',
  },
  sizes: {
    l: '30px',
    xl: '40px',
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
      offset: { height: 'l', width: 'xl' },
      opacity: 0.4,
      radius: 30,
    },
    medium: {
      color: 'secondary',
      offset: { height: 30, width: undefined },
      opacity: 0.4,
    },
    custom: {
      color: 'not inside theme',
    },
    noColor: {},
  },
} as any;

describe('shadows', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should generate the property `boxShadow` based on the strong shadow', () => {
    const result = shadows({ property: 'boxShadow', value: 'strong' });
    expect(result).toEqual({
      boxShadow: '10px 10px 30px white',
    });
  });

  test('should generate the property `boxShadow` if the prop `shadow` is passed', () => {
    const result = parsers.resolve({ style: { shadow: 'strong' } });
    expect(result).toEqual({
      boxShadow: '10px 10px 30px white',
    });
  });

  test('should generate the property `boxShadow` based on the light shadow', () => {
    const result = shadows({ property: 'boxShadow', value: 'light' });
    expect(result).toEqual({
      boxShadow: '40px 30px 30px white',
    });
  });

  test('should generate the property `boxShadow` based on the medium shadow', () => {
    const result = shadows({ property: 'boxShadow', value: 'medium' });
    expect(result).toEqual({
      boxShadow: '0px 30px 0px white',
    });
  });

  test('should return an empty object if the shadow is not found', () => {
    const result = shadows({ property: 'boxShadow', value: 'none' });
    expect(result).toEqual({});
  });

  test('should use custom colors if they are not inside the theme', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'custom' as any,
    });
    expect(result).toEqual({
      boxShadow: '0px 0px 0px not inside theme',
    });
  });

  test('should use black if color prop is not specified', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'noColor' as any,
    });
    expect(result).toEqual({
      boxShadow: '0px 0px 0px black',
    });
  });
});

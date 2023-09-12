import { Theme } from '@morfeo/spec';
import { shadows } from '../../src/parsers/shadows';
import { morfeo } from '../../src';

const THEME: Theme = {
  colors: {
    primary: 'white',
    secondary: 'white',
  },
  borderWidths: {
    s: '10px',
    m: '20px',
    l: '30px',
    xl: '40px',
  },
  radii: {
    m: '30px',
  },
  shadows: {
    strong: {
      color: 'primary',
      offset: { height: 's', width: 's' },
      opacity: 0.4,
      radius: '30px',
    },
    light: {
      color: 'secondary',
      offset: { height: 'l', width: 'xl' },
      opacity: 0.4,
      radius: 'm',
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
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should generate the property `boxShadow` based on the strong shadow', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'strong',
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({
      boxShadow: '10px 10px 30px white',
    });
  });

  test('should generate the property `boxShadow` if the prop `shadow` is passed', () => {
    const result = morfeo.parsers.resolve({ shadow: 'strong' });
    expect(result).toEqual({
      boxShadow: '10px 10px 30px white',
    });
  });

  test('should generate the property `boxShadow` based on the light shadow', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'light',
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({
      boxShadow: '40px 30px 30px white',
    });
  });

  test('should generate the property `boxShadow` based on the medium shadow', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'medium',
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({
      boxShadow: '0 30 0 white',
    });
  });

  test('should return the passed value if the shadow is not found', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'invalid box shadow' as any,
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({ boxShadow: 'invalid box shadow' });
  });

  test('should use custom colors if they are not inside the theme', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'custom' as any,
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({
      boxShadow: '0 0 0 not inside theme',
    });
  });

  test('should use black if color prop is not specified', () => {
    const result = shadows({
      property: 'boxShadow',
      value: 'noColor' as any,
      theme: morfeo.theme,
      parsers: morfeo.parsers,
    });
    expect(result).toEqual({
      boxShadow: '0 0 0 black',
    });
  });
});

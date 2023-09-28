import { Theme } from '@morfeo/core';
import { createMorfeo, resolveMediaQuery } from '../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  spacings: {
    m: '10px',
  },
  breakpoints: {
    lg: '600px',
    md: '400px',
  },
  components: {
    Box: {
      style: {
        p: {
          lg: 'm',
        },
      },
    },
  },
} as any;

const morfeo = createMorfeo({ theme: THEME });

describe('responsive', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should inject the media queries', () => {
    const result = morfeo.parsers.resolve({
      // @ts-expect-error
      custom: {
        bg: {
          lg: 'primary',
          md: 'secondary',
        },
      },
    });

    expect(result).toEqual({
      custom: {
        '@media (min-width: 600px)': {
          backgroundColor: 'var(--colors-primary)',
        },
        '@media (min-width: 400px)': {
          backgroundColor: 'var(--colors-secondary)',
        },
      },
    });
  });

  test('should generate media queries', () => {
    const result = morfeo.parsers.resolve({
      color: {
        lg: 'primary',
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: 'var(--colors-primary)',
      },
    });
  });

  test('should put the default value outside of the media queries', () => {
    const result = morfeo.parsers.resolve({
      color: {
        default: 'secondary',
        lg: 'primary',
      },
    });

    expect(result).toEqual({
      color: 'var(--colors-secondary)',
      [`@media (min-width: 600px)`]: {
        color: 'var(--colors-primary)',
      },
    });
  });

  it('should generate media queries from raw values', () => {
    const result = morfeo.parsers.resolve({
      color: {
        lg: 'raw:#0066ff',
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: '#0066ff',
      },
    });
  });

  test('should merge multiple media queries', () => {
    const result = morfeo.parsers.resolve({
      color: {
        lg: 'primary',
      },
      p: {
        lg: 'm',
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: 'var(--colors-primary)',
        padding: 'var(--spacings-m)',
      },
    });
  });

  test('should generate media queries from default components', () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        padding: 'var(--spacings-m)',
      },
    });
  });

  test('should generate media queries from custom media query', () => {
    morfeo.theme.set({
      mediaQueries: {
        sm: '@media (max-width: 200px)',
      },
    });

    const result = resolveMediaQuery(morfeo.theme, 'sm');

    expect(result).toBe('@media (max-width: 200px)');
  });
});

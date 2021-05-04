import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  space: {
    m: '10px',
  },
  breakpoints: {
    lg: '600px',
  },
  components: {
    Button: {
      style: {
        p: {
          lg: 'm',
        },
      },
    },
  },
} as any;

describe('pseudos', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should generate media queries', () => {
    const result = parsers.resolve({
      style: {
        color: {
          lg: 'primary',
        },
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: '#e3e3e3',
      },
    });
  });

  test('should merge multiple media queries', () => {
    const result = parsers.resolve({
      style: {
        color: {
          lg: 'primary',
        },
        p: {
          lg: 'm',
        },
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: '#e3e3e3',
        padding: '10px',
      },
    });
  });

  test('should generate media queries from default components', () => {
    const result = parsers.resolve({
      style: {
        componentName: 'Button',
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        padding: '10px',
      },
    });
  });
});

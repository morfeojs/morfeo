import { Theme } from '@morfeo/spec';
import { morfeo } from '../../src';

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

describe('pseudos', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should generate media queries', () => {
    const result = morfeo.parsers.resolve({
      color: {
        lg: 'primary',
      },
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        color: '#e3e3e3',
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
      color: '#000',
      [`@media (min-width: 600px)`]: {
        color: '#e3e3e3',
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
        color: '#e3e3e3',
        padding: '10px',
      },
    });
  });

  test('should generate media queries from default components', () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
    });

    expect(result).toEqual({
      [`@media (min-width: 600px)`]: {
        padding: '10px',
      },
    });
  });
});

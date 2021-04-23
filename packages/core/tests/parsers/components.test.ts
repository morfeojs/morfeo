import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';
import { components } from '../../src/parsers/components';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  space: {
    m: '10px',
  },
  components: {
    Button: {
      bg: 'primary',
      variants: {
        primary: {
          color: 'secondary',
        },
      },
    },
  },
} as any;

describe('components', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should return the default components style with an empty ', () => {
    const result = components({
      property: 'componentName',
      value: 'Button',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should take the style of the component from the theme', () => {
    const result = parsers.resolve({
      style: { componentName: 'Button' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should merge the base component style with the variant primary', () => {
    const result = parsers.resolve({
      style: { componentName: 'Button', variant: 'primary' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test('should merge the base component style with rest of the style', () => {
    const result = parsers.resolve({
      style: { componentName: 'Button', p: 'm' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', padding: '10px' });
  });

  test('should override the base component style with rest of the style', () => {
    const result = parsers.resolve({
      style: { bg: 'secondary', componentName: 'Button' },
    });
    expect(result).toEqual({ backgroundColor: '#000' });
  });
});

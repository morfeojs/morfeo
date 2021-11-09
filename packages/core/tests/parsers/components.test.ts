import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';
import { components } from '../../src/parsers/components';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  spacings: {
    m: '10px',
  },
  components: {
    Box: {
      style: {
        bg: 'primary',
        componentTag: 'button',
      },
      variants: {
        primary: {
          style: { color: 'secondary' },
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

  test('should return the default components style', () => {
    const result = components({
      property: 'componentName',
      value: 'Box',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should return an empty object if the component does not exist', () => {
    const result = components({
      property: 'componentName',
      value: 'Not Found' as any,
    });
    expect(result).toEqual({});
  });

  test('should return an empty object if the componentName is not specified', () => {
    const result = components({
      property: 'componentName',
    } as any);
    expect(result).toEqual({});
  });

  test('should take the style of the component from the theme', () => {
    const result = parsers.resolve({ componentName: 'Box' });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should merge the base component style with the variant primary', () => {
    const result = parsers.resolve({
      componentName: 'Box',
      variant: 'primary',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test('should merge the base component style with rest of the style', () => {
    const result = parsers.resolve({ componentName: 'Box', p: 'm' });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', padding: '10px' });
  });

  test('should override the base component style with rest of the style', () => {
    const result = parsers.resolve({ bg: 'secondary', componentName: 'Box' });
    expect(result).toEqual({ backgroundColor: '#000' });
  });

  test('should extends the style of another component', () => {
    theme.set({
      ...THEME,
      components: {
        ...THEME.components,
        Typography: {
          style: {
            componentName: 'Box',
            color: 'secondary',
          },
        },
      } as any,
    });
    const result = parsers.resolve({ componentName: 'Typography' as any });
    expect(result).toEqual({ color: '#000', backgroundColor: '#e3e3e3' });
  });

  test('should extends the style of another component variant', () => {
    theme.reset();
    theme.set({
      ...THEME,
      components: {
        ...THEME.components,
        Typography: {
          style: {
            color: 'secondary',
          },
          variants: {
            h1: {
              style: {
                color: 'primary',
              },
            },
            h2: {
              style: {
                componentName: 'Typography',
                variant: 'h1',
              },
            },
          },
        },
      } as any,
    });

    const result = parsers.resolve({
      componentName: 'Typography' as any,
      variant: 'h2',
    });

    expect(result).toEqual({ color: THEME.colors.primary });
  });
});

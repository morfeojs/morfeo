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

  test('should hide the attribute `componentTag` from the generated style', () => {
    const result = components({
      property: 'componentName',
      value: 'Box',
    });
    expect((result as any).componentTag).not.toBeDefined();
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
    const result = parsers.resolve({
      style: { componentName: 'Box' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should merge the base component style with the variant primary', () => {
    const result = parsers.resolve({
      style: { componentName: 'Box', variant: 'primary' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test('should merge the base component style with rest of the style', () => {
    const result = parsers.resolve({
      style: { componentName: 'Box', p: 'm' },
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', padding: '10px' });
  });

  test('should override the base component style with rest of the style', () => {
    const result = parsers.resolve({
      style: { bg: 'secondary', componentName: 'Box' },
    });
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
    const result = parsers.resolve({
      style: { componentName: 'Typography' as any },
    });
    expect(result).toEqual({ color: '#000', backgroundColor: '#e3e3e3' });
  });
});

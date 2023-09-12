import { Theme } from '@morfeo/spec';
import { morfeo } from '../../src';
import { components } from '../../src/parsers/components';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
    warning: 'orange',
    danger: 'red',
  },
  spacings: {
    m: '10px',
  },
  components: {
    Box: {
      tag: 'button',
      style: {
        bg: 'primary',
      },
      states: {
        danger: {
          bg: 'danger',
          borderColor: 'warning',
          borderWidth: '1px',
        },
      },
      variants: {
        primary: {
          style: { color: 'secondary' },
          states: {
            danger: {
              bg: 'warning',
              borderColor: 'danger',
            },
          },
        },
      },
    },
  },
} as any;

describe('components', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  test('should return the default components style', () => {
    const result = components({
      property: 'componentName',
      value: 'Box',
      parsers: morfeo.parsers,
      theme: morfeo.theme,
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should return an empty object if the component does not exist', () => {
    const result = components({
      property: 'componentName',
      value: 'Not Found' as any,
      parsers: morfeo.parsers,
      theme: morfeo.theme,
    });
    expect(result).toEqual({});
  });

  test('should return an empty object if the componentName is not specified', () => {
    const result = components({
      property: 'componentName',
      parsers: morfeo.parsers,
      theme: morfeo.theme,
    } as any);
    expect(result).toEqual({});
  });

  test('should take the style of the component from the theme', () => {
    const result = morfeo.parsers.resolve({ componentName: 'Box' });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should merge the base component style with the variant primary', () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
      variant: 'primary',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });

  test('should merge the base component style with rest of the style', () => {
    const result = morfeo.parsers.resolve({ componentName: 'Box', p: 'm' });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', padding: '10px' });
  });

  test('should override the base component style with rest of the style', () => {
    const result = morfeo.parsers.resolve({
      bg: 'secondary',
      componentName: 'Box',
    });
    expect(result).toEqual({ backgroundColor: '#000' });
  });

  test('should extends the style of another component', () => {
    morfeo.theme.set({
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
    const result = morfeo.parsers.resolve({
      componentName: 'Typography' as any,
    });
    expect(result).toEqual({ color: '#000', backgroundColor: '#e3e3e3' });
  });

  test('should extends the style of another component variant', () => {
    morfeo.theme.reset();
    morfeo.theme.set({
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

    const result = morfeo.parsers.resolve({
      componentName: 'Typography' as any,
      variant: 'h2',
    });

    expect(result).toEqual({ color: THEME.colors.primary });
  });

  test('should return the state style if state is declared', () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
      state: 'danger',
    });
    expect(result).toEqual({
      backgroundColor: 'red',
      borderColor: 'orange',
      borderWidth: '1px',
    });
  });

  test('should return the variant state style if state is declared within the variant', () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
      variant: 'primary',
      state: 'danger',
    });
    expect(result).toEqual({
      backgroundColor: 'orange',
      borderColor: 'red',
      color: '#000',
    });
  });

  test("should return the default style if the declared state doesn't exist", () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
      state: 'warning',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test("should return the default variant style if the declared state doesn't exist", () => {
    const result = morfeo.parsers.resolve({
      componentName: 'Box',
      variant: 'primary',
      state: 'warning',
    });
    expect(result).toEqual({ backgroundColor: '#e3e3e3', color: '#000' });
  });
});

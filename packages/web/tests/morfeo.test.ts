import { morfeo } from '../src';

describe('morfeo.css', () => {
  it('should return the css classes based on the passed styles', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result('button')).toEqual('bg-accent');
  });

  it('should return the passed class in case the string is not a key of the passed object', () => {
    const result = morfeo.css({});

    expect(result('className')).toEqual('className');
  });

  it('should be possible to access the expanded style', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result.button).toEqual({
      bg: 'bg-accent',
    });
  });

  it('should not do anything in case another accessible property is called', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result.name).toEqual(expect.anything());
  });
});

describe('morfeo.global', () => {
  it('should not return anything when global is executed', () => {
    expect(morfeo.global({})).toBeUndefined();
  });
});

describe('morfeo.theme', () => {
  test('should inject into the metadata the css variables', () => {
    morfeo.theme.set({
      colors: {
        // @ts-expect-error
        newColor: 'any value',
      },
    });

    expect(morfeo.theme.getMetadata()).toEqual(
      expect.objectContaining({
        light: expect.objectContaining({
          '--colors-newColor': 'any value',
        }),
      }),
    );
  });

  test('should populate the dark variables in case dark mode is specified', () => {
    morfeo.theme.set({
      colors: {
        // @ts-expect-error
        newColor: {
          light: 'light value',
          dark: 'dark value',
        },
      },
    });

    expect(morfeo.theme.getMetadata()).toEqual(
      expect.objectContaining({
        light: expect.objectContaining({
          '--colors-newColor': 'light value',
        }),
        dark: expect.objectContaining({
          '--colors-newColor': 'dark value',
        }),
      }),
    );
  });
});

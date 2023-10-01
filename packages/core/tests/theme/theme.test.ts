import { Theme } from '@morfeo/spec';
import { createMorfeo } from '../../src';

const morfeo = createMorfeo();

const defaultTheme: Theme = {
  colors: {
    primary: 'black',
  },
  spacings: {
    m: '10px',
  },
} as any;

describe('theme', () => {
  beforeEach(() => {
    morfeo.theme.reset();
    morfeo.theme.set(defaultTheme);
  });

  test('should have been an instance of theme', () => {
    const result = morfeo.theme.get();
    expect(result).toEqual(defaultTheme);
  });

  test('should get the theme value', () => {
    const result = morfeo.theme.getValue('colors', 'primary');
    expect(result).toEqual('black');
  });

  test('should return any empty object if the slice does not exist', () => {
    expect(morfeo.theme.getSlice('sizes')).toEqual({});
  });

  test('should update the theme', () => {
    morfeo.theme.set({ colors: { primary: 'white' } as any });

    expect(morfeo.theme.get().colors.primary).toEqual('white');
  });

  test('should call all the added listeners each time the theme is updated', () => {
    const firstListener = jest.fn();
    const secondListener = jest.fn();
    morfeo.theme.subscribe(firstListener);
    morfeo.theme.subscribe(secondListener);
    morfeo.theme.set({ colors: { primary: 'white' } });
    morfeo.theme.set({ spacings: { l: '50px' } });
    expect(firstListener).toHaveBeenCalledTimes(2);
    expect(secondListener).toHaveBeenCalledTimes(2);
  });

  test('should reset the theme', () => {
    morfeo.theme.reset();

    expect(morfeo.theme.get()).toEqual({});
  });

  test('should return the callback to unsubscribe the listener', () => {
    const listener = jest.fn();
    const unsubscribe = morfeo.theme.subscribe(listener);

    unsubscribe();

    morfeo.theme.set({
      colors: {
        primary: 'black',
      },
    });

    expect(listener).not.toHaveBeenCalled();
  });

  describe('metadata', () => {
    test('should retrieve the metadata previously set', () => {
      morfeo.theme.setMetadata({
        key: 'any value',
      });

      expect(morfeo.theme.getMetadata()).toEqual({
        key: 'any value',
      });
    });
  });

  describe('parsers', () => {
    describe('should pre-parse the theme in case a resolver was added', () => {
      const parser = jest.fn().mockReturnValue({ parsed: true });
      const unsubscribe = morfeo.theme.onSetTheme(parser);

      morfeo.theme.set({});

      expect(morfeo.theme.get()).toEqual({ parsed: true });

      unsubscribe();
    });

    describe('should not apply the parser anymore in case it has been unsubscribed', () => {
      const parser = jest.fn();
      const unsubscribe = morfeo.theme.onSetTheme(parser);

      morfeo.theme.set({});

      unsubscribe();

      morfeo.theme.set({});

      expect(parser).toHaveBeenCalledTimes(1);
    });
  });
});

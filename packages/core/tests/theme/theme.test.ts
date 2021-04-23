import { Theme } from '@morfeo/spec';
import { theme } from '../../src';

const defaultTheme: Theme = {
  colors: {
    primary: 'black',
  },
  space: {
    m: '10px',
  },
} as any;

describe('theme', () => {
  beforeAll(() => {
    theme.set(defaultTheme);
  });

  afterAll(() => {
    theme.reset();
  });

  test('should have been an instance of theme', () => {
    const result = theme.get();
    expect(result).toEqual(defaultTheme);
  });

  test('should get the theme value', () => {
    const result = theme.getValue('colors', 'primary');
    expect(result).toEqual('black');
  });

  test('should return any empty object if the slice does not exist', () => {
    expect(theme.getSlice('borderStyles')).toEqual({});
  });

  test('should update the theme', () => {
    theme.set({ colors: { primary: 'white' } as any });

    expect(theme.get().colors.primary).toEqual('white');
  });

  test('should call the listener each time the theme is updated', () => {
    const listener = jest.fn();
    theme.listen(listener);
    theme.set({ colors: { primary: 'white' } as any });
    theme.set({ space: { l: '50px' } as any });
    expect(listener).toHaveBeenCalledTimes(2);
  });

  test('should reset the theme', () => {
    theme.reset();

    expect(theme.get()).toEqual({});
  });
});

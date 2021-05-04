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
  beforeEach(() => {
    theme.set(defaultTheme);
    theme.cleanUp();
  });

  afterEach(() => {
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

  test('should add a value inside the theme.colors slice', () => {
    theme.setValue('colors', 'secondary', 'white');

    expect(theme.get().colors.secondary).toEqual('white');
  });

  test('should call all the added listeners each time the theme is updated', () => {
    const firstListener = jest.fn();
    const secondListener = jest.fn();
    theme.listen(firstListener);
    theme.listen(secondListener);
    theme.setSlice('colors', { primary: 'white' });
    theme.setSlice('space', { l: '50px' });
    expect(firstListener).toHaveBeenCalledTimes(2);
    expect(secondListener).toHaveBeenCalledTimes(2);
  });

  test('should reset the theme', () => {
    theme.reset();

    expect(theme.get()).toEqual({});
  });

  test('should generate a unique id for each listener', () => {
    const firstUid = theme.listen(jest.fn(), 'test');
    const secondUid = theme.listen(jest.fn(), 'test');
    const thirdUid = theme.listen(jest.fn());

    expect(firstUid).toBe('test');
    expect(secondUid).toBe('test-0');
    expect(thirdUid).toBe('2');
  });

  test('should remove the specified listener with the cleanUp method', () => {
    const listener = jest.fn();
    const uid = theme.listen(listener, 'test');

    theme.cleanUp(uid);
    theme.setValue('colors', 'primary', 'black');

    expect(listener).not.toHaveBeenCalled();
  });
});

import { Theme } from '@morfeo/spec';
import { morfeo } from '../../src';

const defaultTheme: Theme = {
  colors: {
    primary: 'black',
  },
  spacings: {
    m: '10px',
  },
  breakpoints: {
    lg: '900px',
    md: '600px',
    sm: '400px',
    xs: '200px',
  },
} as any;

beforeEach(() => {
  morfeo.theme.set(defaultTheme);
  morfeo.theme.cleanUp();
});

afterEach(() => {
  morfeo.theme.reset();
});

describe('theme', () => {
  test('should have been an instance of theme', () => {
    const result = morfeo.theme.get();
    expect(result).toEqual(defaultTheme);
  });

  test('should get the theme value', () => {
    const result = morfeo.theme.getValue('colors', 'primary');
    expect(result).toEqual('black');
  });

  test('should return any empty object if the slice does not exist', () => {
    expect(morfeo.theme.getSlice('borderStyles')).toEqual({});
  });

  test('should update the theme', () => {
    morfeo.theme.set({ colors: { primary: 'white' } as any });

    expect(morfeo.theme.get().colors.primary).toEqual('white');
  });

  test('should add a value inside the colors slice', () => {
    morfeo.theme.setValue('colors', 'secondary', 'white');

    expect(morfeo.theme.get().colors.secondary).toEqual('white');
  });

  test('should call all the added listeners each time the theme is updated', () => {
    const firstListener = jest.fn();
    const secondListener = jest.fn();
    morfeo.theme.subscribe(firstListener);
    morfeo.theme.subscribe(secondListener);
    morfeo.theme.setSlice('colors', { primary: 'white' });
    morfeo.theme.setSlice('spacings', { l: '50px' });
    expect(firstListener).toHaveBeenCalledTimes(2);
    expect(secondListener).toHaveBeenCalledTimes(2);
  });

  test('should reset the theme', () => {
    morfeo.theme.reset();

    expect(morfeo.theme.get()).toEqual({});
  });

  test('should generate a unique id for each listener', () => {
    const firstUid = morfeo.theme.subscribe(jest.fn(), 'test');
    const secondUid = morfeo.theme.subscribe(jest.fn(), 'test');
    const thirdUid = morfeo.theme.subscribe(jest.fn());

    expect(firstUid).toBe('test');
    expect(secondUid).toBe('test-0');
    expect(thirdUid).toBe('2');
  });

  test('should remove the specified listener with the cleanUp method', () => {
    const listener = jest.fn();
    const uid = morfeo.theme.subscribe(listener, 'test');

    morfeo.theme.cleanUp(uid);
    morfeo.theme.setValue('colors', 'primary', 'black');

    expect(listener).not.toHaveBeenCalled();
  });
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

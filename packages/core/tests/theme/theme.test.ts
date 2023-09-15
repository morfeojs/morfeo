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

describe('media queries', () => {
  test('should recognize a response value', () => {
    expect(morfeo.theme.isResponsive({ lg: 'any value' })).toBeTruthy();
  });

  test('should return false for a plain value', () => {
    expect(morfeo.theme.isResponsive('any value')).toBeFalsy();
  });

  test('should return false for a non-compliant object', () => {
    expect(morfeo.theme.isResponsive({ foo: 'any value' })).toBeFalsy();
  });

  test('should get the mediaquery based on the breakpoint', () => {
    morfeo.theme.set({
      ...defaultTheme,
      mediaQueries: {
        md: '@media screen and (min-width: {{md}}) and (max-width: {{lg}})',
      },
    });

    expect(morfeo.theme.resolveMediaQuery('md')).toBe(
      `@media screen and (min-width: ${defaultTheme.breakpoints.md}) and (max-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test("should get the default mediaquery if it's not specified inside the theme", () => {
    expect(morfeo.theme.resolveMediaQuery('xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only max-width for the smallest breakpoint', () => {
    expect(morfeo.theme.resolveMediaQuery('xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only min-width for the highest breakpoint', () => {
    expect(morfeo.theme.resolveMediaQuery('lg')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test('should set both min-width and max-width for breakpoints that are not the highest or the smallest', () => {
    expect(morfeo.theme.resolveMediaQuery('md')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.md})`,
    );
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
});

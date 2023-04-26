import { Theme } from '@morfeo/spec';
import { theme } from '../../src';

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
  theme.set(defaultTheme);
  theme.cleanUp();
});

afterEach(() => {
  theme.reset();
});

describe('theme', () => {
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
    theme.subscribe(firstListener);
    theme.subscribe(secondListener);
    theme.setSlice('colors', { primary: 'white' });
    theme.setSlice('spacings', { l: '50px' });
    expect(firstListener).toHaveBeenCalledTimes(2);
    expect(secondListener).toHaveBeenCalledTimes(2);
  });

  test('should reset the theme', () => {
    theme.reset();

    expect(theme.get()).toEqual({});
  });

  test('should generate a unique id for each listener', () => {
    const firstUid = theme.subscribe(jest.fn(), 'test');
    const secondUid = theme.subscribe(jest.fn(), 'test');
    const thirdUid = theme.subscribe(jest.fn());

    expect(firstUid).toBe('test');
    expect(secondUid).toBe('test-0');
    expect(thirdUid).toBe('2');
  });

  test('should remove the specified listener with the cleanUp method', () => {
    const listener = jest.fn();
    const uid = theme.subscribe(listener, 'test');

    theme.cleanUp(uid);
    theme.setValue('colors', 'primary', 'black');

    expect(listener).not.toHaveBeenCalled();
  });
});

describe('media queries', () => {
  test('should recognize a response value', () => {
    expect(theme.isResponsive({ lg: 'any value' })).toBeTruthy();
  });

  test('should return false for a plain value', () => {
    expect(theme.isResponsive('any value')).toBeFalsy();
  });

  test('should return false for a non-compliant object', () => {
    expect(theme.isResponsive({ foo: 'any value' })).toBeFalsy();
  });

  test('should get the mediaquery based on the breakpoint', () => {
    theme.set({
      ...defaultTheme,
      mediaQueries: {
        md: '@media screen and (min-width: {{md}}) and (max-width: {{lg}})',
      },
    });

    expect(theme.resolveMediaQuery('md')).toBe(
      `@media screen and (min-width: ${defaultTheme.breakpoints.md}) and (max-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test("should get the default mediaquery if it's not specified inside the theme", () => {
    expect(theme.resolveMediaQuery('xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only max-width for the smallest breakpoint', () => {
    expect(theme.resolveMediaQuery('xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only min-width for the highest breakpoint', () => {
    expect(theme.resolveMediaQuery('lg')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test('should set both min-width and max-width for breakpoints that are not the highest or the smallest', () => {
    expect(theme.resolveMediaQuery('md')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.md})`,
    );
  });
});

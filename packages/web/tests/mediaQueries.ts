import { morfeo, defaultTheme, resolveMediaQuery, isResponsive } from '../src';

describe('media queries', () => {
  beforeEach(() => {
    morfeo.theme.set({});
  });

  test('should recognize a response value', () => {
    expect(
      isResponsive(morfeo.theme.getSlice('breakpoints'), { lg: 'any value' }),
    ).toBeTruthy();
  });

  test('should return false for a plain value', () => {
    expect(
      isResponsive(morfeo.theme.getSlice('breakpoints'), 'any value'),
    ).toBeFalsy();
  });

  test('should return false for a non-compliant object', () => {
    expect(
      isResponsive(morfeo.theme.getSlice('breakpoints'), { foo: 'any value' }),
    ).toBeFalsy();
  });

  test('should get the mediaquery based on the breakpoint', () => {
    morfeo.theme.set({
      mediaQueries: {
        md: '@media screen and (min-width: {{md}}) and (max-width: {{lg}})',
      },
    });

    expect(resolveMediaQuery(morfeo.theme, 'md')).toBe(
      `@media screen and (min-width: ${defaultTheme.breakpoints.md}) and (max-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test("should get the default mediaquery if it's not specified inside the theme", () => {
    expect(resolveMediaQuery(morfeo.theme, 'xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only max-width for the smallest breakpoint', () => {
    expect(resolveMediaQuery(morfeo.theme, 'xs')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });

  test('should set the media query with only min-width for the highest breakpoint', () => {
    expect(resolveMediaQuery(morfeo.theme, 'lg')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.lg})`,
    );
  });

  test('should set both min-width and max-width for breakpoints that are not the highest or the smallest', () => {
    expect(resolveMediaQuery(morfeo.theme, 'md')).toBe(
      `@media (min-width: ${defaultTheme.breakpoints.md})`,
    );
  });
});

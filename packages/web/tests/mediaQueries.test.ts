import {
  createMorfeo,
  defaultTheme,
  resolveMediaQuery,
  isResponsive,
} from '../src';

const morfeo = createMorfeo();

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
        md: '@media screen and (max-width: {{md}})',
      },
    });

    expect(resolveMediaQuery(morfeo.theme, 'md')).toBe(
      `@media screen and (max-width: ${defaultTheme.breakpoints.md})`,
    );
  });

  test("should get the default mediaquery if it's not specified inside the theme", () => {
    expect(resolveMediaQuery(morfeo.theme, 'xs')).toBe(
      `@media screen and (min-width: ${defaultTheme.breakpoints.xs})`,
    );
  });
});

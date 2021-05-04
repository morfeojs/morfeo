import { theme } from '../../src/theme';
import { resolveMediaQuery } from '../../src/utils';

beforeAll(() => {
  theme.set({
    breakpoints: {
      sm: '400px',
      md: '600px',
      lg: '900px',
    },
    mediaQueries: {
      md: '@media screen (min-width: {{md}}) and (max-width: {{lg}})',
      lg: '@media screen (min-width: {{lg}})',
    },
  } as any);
});

describe('resolveMediaQuery', () => {
  test('should get the mediaquery based on the breakpoint', () => {
    expect(resolveMediaQuery('md')).toBe(
      '@media screen (min-width: 600px) and (max-width: 900px)',
    );
  });

  test("should get the default mediaquery if it's not specified inside the theme", () => {
    expect(resolveMediaQuery('sm')).toBe('@media screen (min-width: 400px)');
  });
});

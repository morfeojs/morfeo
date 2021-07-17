import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  radii: {
    s: '2px',
    m: '4px',
  },
} as any;

describe('radii', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the property `corner` from the radii slice', () => {
    const result = parsers.resolve({
      corner: 'm',
      cornerEndEnd: 'm',
      cornerTopLeft: 'm',
      cornerEndStart: 'm',
      cornerTopRight: 'm',
      cornerStartEnd: 'm',
      cornerStartStart: 'm',
      cornerBottomLeft: 'm',
      cornerBottomRight: 'm',
    });
    expect(result).toEqual({
      borderRadius: '4px',
      borderEndEndRadius: '4px',
      borderTopLeftRadius: '4px',
      borderEndStartRadius: '4px',
      borderTopRightRadius: '4px',
      borderStartEndRadius: '4px',
      borderStartStartRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    });
  });
});

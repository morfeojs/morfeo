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

  const borderProperties = {
    corner: 'borderRadius',
    cornerEndEnd: 'borderEndEndRadius',
    cornerTopLeft: 'borderTopLeftRadius',
    cornerEndStart: 'borderEndStartRadius',
    cornerTopRight: 'borderTopRightRadius',
    cornerStartEnd: 'borderStartEndRadius',
    cornerStartStart: 'borderStartStartRadius',
    cornerBottomLeft: 'borderBottomLeftRadius',
    cornerBottomRight: 'borderBottomRightRadius',
  };

  Object.keys(borderProperties).forEach(property => {
    test(`should resolve the value of the property ${property} from the radii slice`, () => {
      const result = parsers.resolve({
        [property]: 'm',
      });
      expect(result).toEqual({
        [borderProperties[property]]: '4px',
      });
    });
  });
});

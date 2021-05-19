import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  sizes: {
    m: '10px',
    l: '20px',
  },
} as any;

describe('sizes', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the property `size`', () => {
    const result = parsers.resolve({
      size: 'm',
    });
    expect(result).toEqual({ height: '10px', width: '10px' });
  });
});

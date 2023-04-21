import { css } from '../src';

describe('css', () => {
  it('should throw an exception in case `css` is executed', () => {
    expect(() => css({})).toThrow();
  });
});

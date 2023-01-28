import { createUseClasses } from '../src';

describe('createUseClasses', () => {
  it('should throw an exception in case `css` is executed', () => {
    expect(() => createUseClasses({})).toThrow();
  });
});

import { createUseClasses } from '../src';

describe('createUseClasses', () => {
  it('should throw an exception in case `createUseClasses` is executed', () => {
    expect(() => createUseClasses({})).toThrow();
  });
});

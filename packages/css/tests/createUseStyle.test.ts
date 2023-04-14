import { createUseStyle } from '../src';

describe('createUseStyle', () => {
  it('should throw an exception in case `createUseStyle` is executed', () => {
    expect(() => createUseStyle({})).toThrow();
  });
});

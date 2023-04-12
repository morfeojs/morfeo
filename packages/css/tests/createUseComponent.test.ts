import { createUseComponent } from '../src';

describe('createUseClasses', () => {
  it('should throw an exception in case `createUseComponent` is executed', () => {
    expect(() => createUseComponent({})).toThrow();
  });
});

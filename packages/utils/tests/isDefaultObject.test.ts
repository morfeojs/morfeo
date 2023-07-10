import { isDefaultObject } from '../src';

describe('isDefaultObject', () => {
  test('should return true if the passed object contain a key named "default"', () => {
    expect(isDefaultObject({ default: 'any value' })).toBeTruthy();
  });

  test('should return false if the passed object does not contain a key named "default"', () => {
    expect(isDefaultObject({ anyKey: 'any value' })).toBeFalsy();
  });
});

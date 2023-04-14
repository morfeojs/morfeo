import { parseNumber } from '../src';

describe('parseNumber', () => {
  it('should return the same number in case a number is passed', () => {
    expect(parseNumber(3)).toBe(3);
  });

  it('should return the number in case a string containing a number is passed', () => {
    expect(parseNumber('3px')).toBe(3);
  });

  it('should return 0 in case a string containing no number is passed', () => {
    expect(parseNumber('a string without numbers')).toBe(0);
  });
});

import { theme } from '../../src/theme';
import { isResponsiveValue } from '../../src/utils';

beforeAll(() => {
  theme.set({
    breakpoints: {
      lg: '600px',
    },
  } as any);
});

describe('isResponsiveValue', () => {
  test('should recognize a response value', () => {
    expect(isResponsiveValue({ lg: 'any value' })).toBeTruthy();
  });

  test('should return false for a plain value', () => {
    expect(isResponsiveValue('any value')).toBeFalsy();
  });

  test('should return false for a non-compliant object', () => {
    expect(isResponsiveValue({ foo: 'any value' })).toBeFalsy();
  });
});

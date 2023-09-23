import { Theme } from '@morfeo/spec';
import { baseParser } from '../../src/parsers/baseParser';
import { createMorfeo } from '../../src';

const morfeo = createMorfeo();

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

describe('parsers', () => {
  beforeAll(() => {
    morfeo.theme.set(THEME);
  });
  afterAll(() => {
    morfeo.theme.reset();
  });

  beforeEach(() => {
    morfeo.parsers.reset();
  });

  test('should add new parser with the add method', () => {
    morfeo.parsers.add('testParser' as any, jest.fn());
    const result = morfeo.parsers.get();
    expect(result['testParser']).toBeDefined();
  });

  test('should resolve the value of the property `bgColor` if the new parser is added', () => {
    morfeo.parsers.add(
      'bgColor' as any,
      props =>
        baseParser({
          ...props,
          scale: 'colors',
          property: 'backgroundColor',
        } as any) as any,
    );
    const result = morfeo.parsers.resolve({ bgColor: 'primary' } as any);
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should remove the custom parser after the reset', () => {
    morfeo.parsers.add('custom' as any, jest.fn());
    const allParsers = morfeo.parsers.get();
    expect(allParsers['custom']).toBeDefined();
    morfeo.parsers.reset();
    const allParsersAfterReset = morfeo.parsers.get();
    expect(allParsersAfterReset['custom']).not.toBeDefined();
  });

  test('should recognize a theme property', () => {
    morfeo.parsers.add('themeableProperty' as any, jest.fn());
    expect(
      morfeo.parsers.isThemeableProperty('themeableProperty'),
    ).toBeTruthy();
    expect(morfeo.parsers.isThemeableProperty('unexstingProperty')).toBeFalsy();
  });

  describe('when there is no parser for a specific key', () => {
    describe('if the value is not an object', () => {
      test('should return the passed object if there is no parser for that property', () => {
        // @ts-expect-error testing a wrong key behavior intentionally
        const result = morfeo.parsers.resolve({ custom: 'not found' });
        expect(result).toEqual({ custom: 'not found' });
      });
    });

    describe('if the value is an object', () => {
      test('should call resolve for the value', () => {
        const result = morfeo.parsers.resolve({
          // @ts-expect-error testing a wrong key behavior intentionally
          custom: {
            bg: 'primary',
          },
        });
        expect(result).toEqual({
          custom: {
            backgroundColor: THEME.colors.primary,
          },
        });
      });
    });
  });
});

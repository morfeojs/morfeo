import { Theme } from '@morfeo/spec';
import { baseParser } from '../../src/parsers/baseParser';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

describe('parsers', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  beforeEach(() => {
    parsers.reset();
  });

  test('should add new parser with the add method', () => {
    parsers.add('testParser' as any, jest.fn());
    const result = parsers.get();
    expect(result['testParser']).toBeDefined();
  });

  test('should resolve the value of the property `bgColor` if the new parser is added', () => {
    parsers.add(
      'bgColor' as any,
      props =>
        baseParser({
          ...props,
          scale: 'colors',
          property: 'backgroundColor',
        } as any) as any,
    );
    const result = parsers.resolve({ bgColor: 'primary' } as any);
    expect(result).toEqual({ backgroundColor: '#e3e3e3' });
  });

  test('should remove the custom parser after the reset', () => {
    parsers.add('custom' as any, jest.fn());
    const allParsers = parsers.get();
    expect(allParsers['custom']).toBeDefined();
    parsers.reset();
    const allParsersAfterReset = parsers.get();
    expect(allParsersAfterReset['custom']).not.toBeDefined();
  });

  describe('when there is no parser for a specific key', () => {
    describe('if the value is not an object', () => {
      test('should return the passed object if there is no parser for that property', () => {
        // @ts-expect-error testing a wrong key behavior intentionally
        const result = parsers.resolve({ custom: 'not found' });
        expect(result).toEqual({ custom: 'not found' });
      });
    });

    describe('if the value is an object', () => {
      test('should call resolve for the value', () => {
        const result = parsers.resolve({
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

      describe('if the value is also a responsive value', () => {
        beforeEach(() => {
          theme.set({
            ...THEME,
            breakpoints: {
              lg: '1000px',
              md: '800px',
              sm: '600px',
              xs: '400px',
            },
          });
        });

        test('should inject the media queries', () => {
          const result = parsers.resolve({
            // @ts-expect-error
            custom: {
              bg: {
                lg: 'primary',
                md: 'secondary',
              },
            },
          });

          expect(result).toEqual({
            custom: {
              '@media (min-width: 1000px)': {
                backgroundColor: THEME.colors.primary,
              },
              '@media (min-width: 800px)': {
                backgroundColor: THEME.colors.secondary,
              },
            },
          });
        });
      });
    });
  });
});

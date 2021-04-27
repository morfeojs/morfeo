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
    const result = parsers.resolve({
      style: { bgColor: 'primary' } as any,
    });
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

  test('should return the passed value if there is no parser for that property', () => {
    const result = parsers.resolve({
      style: { custom: 'not found' } as any,
    });
    expect(result).toEqual({ custom: 'not found' });
  });

  test('should return an empty object if style is not provided', () => {
    const result = parsers.resolve({
      style: undefined,
    });
    expect(result).toEqual({});
  });
});

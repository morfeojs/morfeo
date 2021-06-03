import { Theme } from '@morfeo/spec';
import { parsers, theme } from '../../src';

const THEME: Theme = {
  spacings: {
    m: '10px',
    l: '20px',
  },
} as any;

describe('spacings', () => {
  beforeAll(() => {
    theme.set(THEME);
  });
  afterAll(() => {
    theme.reset();
  });

  test('should resolve the value of the padding aliases', () => {
    const result = parsers.resolve({
      p: 'm',
      pt: 'l',
      pl: 'm',
      pr: 'l',
      pb: 'm',
    });

    expect(result).toEqual({
      padding: '10px',
      paddingTop: '20px',
      paddingLeft: '10px',
      paddingRight: '20px',
      paddingBottom: '10px',
    });
  });

  test('should resolve the value of the margin aliases', () => {
    const result = parsers.resolve({
      m: 'm',
      mt: 'l',
      ml: 'm',
      mr: 'l',
      mb: 'm',
    });

    expect(result).toEqual({
      margin: '10px',
      marginTop: '20px',
      marginLeft: '10px',
      marginRight: '20px',
      marginBottom: '10px',
    });
  });

  test('should resolve the value of mx, px aliases', () => {
    const result = parsers.resolve({
      px: 'm',
      mx: 'l',
    });

    expect(result).toEqual({
      paddingLeft: '10px',
      paddingRight: '10px',
      marginLeft: '20px',
      marginRight: '20px',
    });
  });

  test('should resolve the value of my, py aliases', () => {
    const result = parsers.resolve({
      py: 'm',
      my: 'l',
    });

    expect(result).toEqual({
      paddingTop: '10px',
      paddingBottom: '10px',
      marginTop: '20px',
      marginBottom: '20px',
    });
  });
});

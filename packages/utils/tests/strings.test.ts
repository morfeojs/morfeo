import { generateClassName, stringsHandler } from '../src';
import { EMOJI_CHARSET, REGULAR_CHARSET } from '../src/constants';

describe('generateClassName', () => {
  beforeEach(() => {
    stringsHandler.reset();
  });

  it('should generate the class from the style object', () => {
    const className = generateClassName({
      bg: 'primary',
      color: 'text',
    });

    expect(className).toBe('bg-primary_color-text');
  });

  it('should generate the same class from the same style objects', () => {
    const className1 = generateClassName({
      bg: 'primary',
    });
    const className2 = generateClassName({
      bg: 'primary',
    });

    expect(className1).toBe(className2);
  });

  it('should return an empty string in case the style object is not provided', () => {
    const className = generateClassName();

    expect(className).toBe('');
  });

  it('should be possible to generate styles for nested styles', () => {
    const className = generateClassName({
      '& p': {
        bg: 'primary',
      },
    });

    expect(className).toBe('p-bg-primary');
  });

  it('should convert symbols into plain text', () => {
    const className = generateClassName({
      '& div > p': {
        bg: 'primary',
      },
    });

    expect(className).toBe('divgrtrp-bg-primary');
  });

  describe('when the minify option is true', () => {
    it('should minify strings', () => {
      const className = generateClassName(
        {
          bg: 'primary',
        },
        { minify: true },
      );

      expect(className).toBe(REGULAR_CHARSET[0]);
    });

    it('should return the same minified class for the same style', () => {
      const commonStyle = {
        bg: 'primary',
      };
      const differentStyle = {
        bg: 'secondary',
      };
      const firstClassName = generateClassName(commonStyle, { minify: true });
      const secondClassName = generateClassName(commonStyle, { minify: true });
      const thirdClassName = generateClassName(differentStyle, {
        minify: true,
      });

      expect(firstClassName).toBe('a');
      expect(firstClassName).toBe(secondClassName);
      expect(thirdClassName).not.toBe(secondClassName);
    });

    it('should return a 2 chars length string in case all the combinations with 1 char are already used', () => {
      const chars = REGULAR_CHARSET;
      const fakeStyles = chars.map(char => ({ [char]: char }));

      fakeStyles.map(style => generateClassName(style, { minify: true }));

      const className = generateClassName({ bg: 'primary' }, { minify: true });

      expect(className).toHaveLength(2);
    });
  });

  describe('when the emoji flag is true', () => {
    it('should generate className containing emojis', () => {
      const className = generateClassName(
        {
          bg: 'primary',
        },
        { minify: true, emojis: true },
      );

      expect(className).toBe(EMOJI_CHARSET[0]);
    });
  });
});

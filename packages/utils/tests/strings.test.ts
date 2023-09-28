import { generateClassName, stringsHandler } from '../src';

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
});

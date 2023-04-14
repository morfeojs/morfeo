import { generateClassName } from '../src';

describe('generateClassName', () => {
  it('should generate the class from the style object', () => {
    const className = generateClassName({
      bg: 'primary',
      color: 'text',
    });

    expect(className).toBe('bg-primary_color-text');
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

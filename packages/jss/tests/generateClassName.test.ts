import { generateClassName } from '../src/generateClassName';

describe('generateClassName', () => {
  it('should generate the class from the style object', () => {
    const className = generateClassName({
      bg: 'primary',
    });

    expect(className).toBe('bg-primary');
  });

  it('should return an empty string in case the style object is not provided', () => {
    const className = generateClassName();

    expect(className).toBe('');
  });
});

import { splitStyles } from '../src/utils';

describe('splitStyles', () => {
  it('should split a style into multiple mono-property styles', () => {
    const result = splitStyles({
      bg: 'background',
      p: 'l',
      color: 'accent',
    });

    expect(result).toEqual([
      { bg: 'background' },
      { p: 'l' },
      { color: 'accent' },
    ]);
  });

  describe('when there are nested styles', () => {
    it('should split the style maintaining the nesting', () => {
      const result = splitStyles({
        bg: 'background',
        p: {
          xs: 'l',
          lg: 'm',
        },
        '&:hover': {
          p: 'm',
          bg: 'primary',
        },
      });

      expect(result).toEqual([
        { bg: 'background' },
        { p: { xs: 'l' } },
        { p: { lg: 'm' } },
        { '&:hover': { p: 'm' } },
        { '&:hover': { bg: 'primary' } },
      ]);
    });

    it('should handle responsive properties with default values', () => {
      const result = splitStyles({
        p: {
          default: 'l',
          lg: 'm',
        },
      });

      expect(result).toEqual([{ p: 'l' }, { p: { lg: 'm' } }]);
    });
  });
});

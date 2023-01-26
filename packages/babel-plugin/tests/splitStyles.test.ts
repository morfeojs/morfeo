import { morfeo } from '@morfeo/web';
import { splitStyles } from '../src/utils';
import { theme } from './theme';

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
  });

  describe('when the style has a component', () => {
    beforeEach(() => {
      morfeo.setTheme('default', theme);
    });

    it('should resolve the style of the component and split it', () => {
      const result = splitStyles({
        componentName: 'Box',
        variant: 'bordered',
      });

      expect(result).toEqual([{ bg: 'primary' }, { border: 'strong' }]);
    });

    it('should not retrieve anything in case variant or state are passed alone', () => {
      const result = splitStyles({
        variant: 'any variant',
        state: 'any state',
      });

      expect(result).toEqual([]);
    });
  });
});

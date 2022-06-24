import { parsers, Theme, theme } from '../src';

const THEME: Theme = {
  keyframes: {
    anyKeyframeKey: {},
  },
  animations: {
    anyAnimationKey: {
      name: 'anyKeyframeKey',
    },
  },
} as any;

beforeEach(() => {
  theme.set(THEME);
});

describe('animations', () => {
  test('should generate the prop `animation` with the right keyframe name', () => {
    // @ts-expect-error
    const style = parsers.resolve({ animation: 'anyAnimationKey' });

    expect(style).toEqual({
      animation: 'anyKeyframeKey',
    });
  });

  describe('when the animation is not defined', () => {
    it('should return an empty object', () => {
      const style = parsers.resolve({ animation: 'default' });

      expect(style).toEqual({});
    });
  });

  describe('when other animation properties are set', () => {
    test('should add the unit in case of number values', () => {
      theme.set({
        ...THEME,
        // @ts-expect-errors
        animations: {
          anyAnimationKey: {
            name: 'anyKeyframeKey',
            delay: 3,
          },
        },
      });

      // @ts-expect-error
      const style = parsers.resolve({ animation: 'anyAnimationKey' });

      expect(style).toEqual({
        animation: 'anyKeyframeKey 3s',
      });
    });
  });
});

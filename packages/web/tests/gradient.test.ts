import { Gradient, morfeo } from '../src';

const THEME = {
  colors: {
    primary: 'red',
    secondary: 'blue',
    ternary: 'yellow',
  },
  gradients: {
    primary: {
      colors: ['primary', 'secondary'],
      angle: 0,
    },
    secondary: {
      start: 10,
      end: 90,
      colors: ['secondary', 'ternary', 'primary'],
      angle: 180,
    },
    radial: {
      kind: 'radial',
      colors: ['primary', 'secondary'],
      angle: 0,
    },
    defaultAngle: {
      colors: ['primary', 'secondary'],
    },
    notThemeColors: {
      colors: ['pink', 'tomato'],
    },
    justOneColor: {
      colors: ['pink'],
    },
  },
};

beforeEach(() => {
  morfeo.theme.set(THEME as any);
});

describe('gradient', () => {
  test('should generate the prop `background` with a linear-gradient referred to primary', () => {
    const style = morfeo.parsers.resolve({ gradient: 'primary' });

    expect(style).toEqual({
      background:
        'linear-gradient(0deg, var(--colors-primary) 0%, var(--colors-secondary) 100%)',
    });
  });

  test('should generate the prop `background` with a linear-gradient referred to secondary', () => {
    const style = morfeo.parsers.resolve({ bgGradient: 'secondary' });
    expect(style).toEqual({
      background:
        'linear-gradient(180deg, var(--colors-secondary) 10%, var(--colors-ternary) 50%, var(--colors-primary) 90%)',
    });
  });

  test('should generate the prop `backgroundColor` with a radial-gradient value', () => {
    const style = morfeo.parsers.resolve({ gradient: 'radial' as any });
    expect(style).toEqual({
      background:
        'radial-gradient(circle, var(--colors-primary) 0%, var(--colors-secondary) 100%)',
    });
  });

  test('should set the default angle to 180deg if not passed', () => {
    const style = morfeo.parsers.resolve({ bgGradient: 'defaultAngle' as any });
    expect(style).toEqual({
      background:
        'linear-gradient(180deg, var(--colors-primary) 0%, var(--colors-secondary) 100%)',
    });
  });

  test('should generate gradient for colors not provided by the theme', () => {
    const style = morfeo.parsers.resolve({
      bgGradient: 'notThemeColors' as any,
    });
    expect(style).toEqual({
      background: 'linear-gradient(180deg, pink 0%, tomato 100%)',
    });
  });

  test('should generate text gradient if the prop `textGradient` is passed', () => {
    const style = morfeo.parsers.resolve({ textGradient: 'primary' as any });

    expect(style).toEqual({
      background:
        'linear-gradient(0deg, var(--colors-primary) 0%, var(--colors-secondary) 100%)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    });
  });

  test('should generate the gradient from raw values', () => {
    const style = morfeo.parsers.resolve({
      gradient:
        'raw:linear-gradient(0deg, red 0%, var(--colors-secondary) 100%)',
    });

    expect(style).toEqual({
      background: 'linear-gradient(0deg, red 0%, var(--colors-secondary) 100%)',
    });
  });

  test('should generate the gradient from only 1 color', () => {
    const style = morfeo.parsers.resolve({
      gradient: 'justOneColor' as Gradient,
    });

    expect(style).toEqual({
      background: 'linear-gradient(180deg, pink 0%)',
    });
  });

  test('should generate the text-gradient from raw values', () => {
    const style = morfeo.parsers.resolve({
      textGradient: 'raw:linear-gradient(0deg, red 0%, blue 100%)',
    });

    expect(style).toEqual({
      background: 'linear-gradient(0deg, red 0%, blue 100%)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    });
  });
});

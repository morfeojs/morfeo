import { parsers, theme } from '../src';

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
      colors: ['grey', 'black'],
    },
  },
};

beforeEach(() => {
  theme.set(THEME as any);
});

describe('gradient', () => {
  test('should generate the prop `background` with a linear-gradient referred to primary', () => {
    const style = parsers.resolve({ gradient: 'primary' });
    expect(style).toEqual({
      background: 'linear-gradient(0deg, red 0%, blue 100%)',
    });
  });

  test('should generate the prop `background` with a linear-gradient referred to secondary', () => {
    const style = parsers.resolve({ bgGradient: 'secondary' });
    expect(style).toEqual({
      background: 'linear-gradient(180deg, blue 10%, yellow 50%, red 90%)',
    });
  });

  test('should generate the prop `backgroundColor` with a radial-gradient value', () => {
    const style = parsers.resolve({ gradient: 'radial' as any });
    expect(style).toEqual({
      background: 'radial-gradient(circle, red 0%, blue 100%)',
    });
  });

  test('should set the default angle to 180deg if not passed', () => {
    const style = parsers.resolve({ bgGradient: 'defaultAngle' as any });
    expect(style).toEqual({
      background: 'linear-gradient(180deg, red 0%, blue 100%)',
    });
  });

  test('should not generate any linear (or radial) gradient if the gradient does not exists', () => {
    const style = parsers.resolve({ bgGradient: 'invalid' as any });
    expect(style).toEqual({
      background: undefined,
    });
  });

  test('should generate gradient for colors not provided by the theme', () => {
    const style = parsers.resolve({ bgGradient: 'notThemeColors' as any });
    expect(style).toEqual({
      background: 'linear-gradient(180deg, grey 0%, black 100%)',
    });
  });

  test('should not generate any linear (or radial) gradient if any gradients inside the theme does exists', () => {
    theme.reset();
    const style = parsers.resolve({ bgGradient: 'invalid' as any });
    expect(style).toEqual({
      background: undefined,
    });
  });

  test('should generate text gradient if the prop `textGradient` is passed', () => {
    const style = parsers.resolve({ textGradient: 'primary' as any });
    expect(style).toEqual({
      background: 'linear-gradient(0deg, red 0%, blue 100%)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    });
  });
});

const theme = {
  fontSizes: {
    '2xs': '.5rem',
    xs: '.75rem',
    s: '.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '5rem',
    none: '0',
  },
  gradients: {
    primary: {
      colors: ['primary.lighter', 'primary.darker'],
    },
    'text.primary': {
      colors: ['primary.lighter', 'primary.darker'],
      end: 100,
      start: 40,
      angle: 120,
    },
    secondary: {
      colors: ['secondary.lighter', 'secondary.darker'],
    },
    'text.secondary': {
      colors: ['secondary.lighter', 'secondary.darker'],
      end: 100,
      start: 40,
      angle: 120,
    },
    primaryToAccent: {
      colors: ['primary.lighter', 'accent.darker'],
      end: 100,
      start: 40,
      angle: 30,
    },
    accentToPrimary: {
      colors: ['accent.lighter', 'primary.darker'],
      end: 100,
      start: 40,
      angle: 30,
    },
    gray: {
      colors: ['gray.lighter', 'gray.darker'],
    },
    'text.gray': {
      colors: ['gray.lighter', 'gray.darker'],
      end: 100,
      start: 40,
      angle: 120,
    },
    primaryToTransparent: {
      colors: ['primary', 'transparent'],
      end: 100,
      start: 40,
      kind: 'radial',
    },
  },
  components: {
    Button: {
      tag: 'button',
      props: {},
      style: {
        px: 's',
        py: '2xs',
        bg: 'invertedBackground',
        corner: 'xs',
        color: 'invertedText',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'm',
        fontFamily: 'default',
        fontWeight: 'medium',
        border: 'none',
        overflow: 'hidden',
        position: 'relative',
        transition: 'medium',
      },
      states: {},
      variants: {
        primary: {
          style: {
            color: 'white',
            bg: 'primary',
            fontWeight: 'bold',
            '&:hover': {
              bg: 'primary.lightest',
            },
          },
          states: {},
        },
      },
    },
  },
};

module.exports = theme;

export default {
  colors: {
    primary: 'black',
  },
  fonts: {
    regular: 'Roboto',
  },
  gradients: {
    primary: {
      start: 0,
      angle: 90,
      end: 100,
      colors: ['success', 'accent'],
      kind: 'linear',
    },
    secondary: {
      start: 0,
      end: 100,
      angle: 0,
      colors: ['accent', 'success'],
      kind: 'linear',
    },
    loading: {
      start: 0,
      end: 100,
      angle: 90,
      colors: ['transparent', 'grey', 'transparent'],
      kind: 'linear',
    },
  },
  radii: {
    m: '10px',
    round: '50%',
  },
  spacings: {
    s: '40px',
    m: '100px',
  },
  lineHeights: {
    s: 1.7,
  },
  letterSpacings: {
    s: 1.6,
  },
  fontSizes: {
    s: '14px',
  },
  sizes: {
    s: '10px',
    m: '100px',
    xl: '200px',
  },
  borderWidths: {
    s: '2px',
  },
  shadows: {
    none: {
      color: 'transparent',
      offset: {
        width: 0,
        height: 0,
      },
      opacity: 0,
      elevation: 0,
    },
    soft: {
      color: 'accent',
      offset: {
        width: 0,
        height: 2,
      },
      opacity: 0.2,
      radius: 4,
      elevation: 2,
    },
    medium: {
      color: 'black',
      offset: {
        width: 0,
        height: 3,
      },
      opacity: 0.3,
      radius: 4,
      elevation: 3,
    },
    strong: {
      color: 'black',
      offset: {
        width: 0,
        height: 4,
      },
      opacity: 0.4,
      radius: 4,
      elevation: 4,
    },
  },
  breakpoints: {
    xs: '300px',
    sm: '600px',
    md: '900px',
    lg: '1300px',
  },
  transitions: {
    light: 'all 0.5s',
  },
  components: {
    Box: {
      tag: 'div',
      style: {},
    },
    Button: {
      style: {
        bg: 'primary',
      },
    },
    Typography: {
      tag: 'p',
      style: {
        fontFamily: 'regular',
        fontSize: 's',
        lineHeight: 's',
        letterSpacing: 's',
      },
      variants: {
        h1: {
          tag: 'h1',
          style: {
            color: 'red',
          },
        },
        h2: {
          tag: 'h1',
          style: {
            color: 'green',
          },
        },
        h3: {
          tag: 'h3',
          style: {
            color: 'blue',
          },
        },
        code: {
          tag: 'pre',
          style: {
            color: 'primary',
          },
        },
      },
    },
    button: {
      tag: 'button',
      style: {
        bg: 'primary',
        px: 'm',
      },
      variants: {
        primary: {
          style: {
            corner: 'xl',
          },
        },
      },
    },
    Custom: {
      style: {
        bg: 'primary',
      },
    },
  },
};

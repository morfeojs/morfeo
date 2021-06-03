export const lightTheme = {
  colors: {
    primary: 'white',
    secondary: 'black',
    danger: 'red',
  },
  radii: {
    m: '10px',
    round: '50%',
  },
  spacings: {
    s: '40px',
    m: '100px',
  },
  sizes: {
    s: '10px',
    m: '100px',
    xl: '200px',
  },
  borderWidths: {
    s: '2px',
  },
  breakpoints: {
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
      tag: 'button',
      style: {
        transition: 'light',
        height: 'm',
        width: 'm',
        bg: {
          md: 'danger',
          lg: 'primary',
        },
        color: 'secondary',
        borderRadius: 'm',
        borderWidth: 's',
        borderStyle: 'solid',
        borderColor: 'primary',
        '&:hover': {
          bg: 'secondary',
          color: 'primary',
        },
      },
      props: {
        'aria-label': 'button',
        type: 'button',
      },
      variants: {
        primary: {
          props: {
            'aria-label': 'primary button',
          },
          style: {
            bg: 'secondary',
            borderColor: 'primary',
            color: 'primary',
            '&:hover': {
              bg: 'primary',
              color: 'secondary',
            },
          },
        },
        round: {
          style: { borderRadius: 'round' },
        },
      },
    },
    Typography: {
      tag: 'p',
      style: {},
      variants: {
        h1: {
          tag: 'h1',
          style: { color: 'red' },
        },
        h2: {
          tag: 'h1',
          style: { color: 'green' },
        },
        h3: {
          tag: 'h3',
          style: { color: 'blue' },
        },
        code: {
          tag: 'pre',
          style: { color: 'primary' },
        },
      },
    },
  },
};

export const darkTheme = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
};

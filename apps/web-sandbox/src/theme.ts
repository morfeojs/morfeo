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
  space: {
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
    Button: {
      style: {
        componentTag: 'button',
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
      variants: {
        primary: {
          bg: 'secondary',
          borderColor: 'primary',
          color: 'primary',
          '&:hover': {
            bg: 'primary',
            color: 'secondary',
          },
        },
        round: {
          borderRadius: 'round',
        },
      },
    },
  },
} as any;

export const darkTheme = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
} as any;

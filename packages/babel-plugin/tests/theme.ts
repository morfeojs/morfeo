export const theme = {
  colors: {
    primary: 'blue',
    secondary: 'pink',
  },
  spacings: {
    s: '4px',
    m: '8px',
    l: '16px',
  },
  borders: {
    strong: {
      width: 'm',
      color: 'primary',
      style: 'solid',
    },
  },
  breakpoints: {
    xs: '400px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
  },
  components: {
    Box: {
      style: {
        bg: 'primary',
      },
      variants: {
        bordered: {
          style: {
            border: 'strong',
          },
          states: {},
        },
      },
      states: {
        active: {
          bg: 'secondary',
        },
      },
    },
  },
} as const;

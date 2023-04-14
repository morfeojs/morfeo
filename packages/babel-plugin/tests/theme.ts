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
    md: '600px',
    lg: '900px',
    xl: '1200px',
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

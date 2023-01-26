export const theme = {
  colors: {
    primary: 'blue',
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
      states: {},
    },
  },
} as const;

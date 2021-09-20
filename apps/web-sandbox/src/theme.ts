export const components = {
  Box: {
    tag: 'div',
    style: {},
  },
  Button: {
    tag: 'button',
    style: {
      transition: 'slow',
      height: 'xxl',
      width: 'xxl',
      bg: 'primary',
      color: 'white',
      borderRadius: 'm',
      border: 'primary',
      '&:hover': {
        bg: 'transparent',
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
          width: '200px',
          bg: 'primary',
          color: 'white',
          '&:hover': {
            bg: 'transparent',
            color: 'primary',
          },
        },
      },
      round: {
        style: {
          bg: 'secondary',
          height: '150px',
          width: '150px',
          borderRadius: 'round',
          borderColor: 'secondary',
          '&:hover': {
            bg: 'transparent',
            color: 'secondary',
          },
        },
      },
    },
  },
  Typography: {
    tag: 'p',
    style: {
      fontFamily: 'regular',
      fontSize: 'm',
      lineHeight: 'm',
      letterSpacing: 'm',
      color: 'textColor',
    },
    variants: {
      h1: {
        tag: 'h1',
        style: { color: 'headTextColor' },
      },
      h2: {
        tag: 'h1',
        style: { color: 'headTextColor' },
      },
      h3: {
        tag: 'h3',
        style: { color: 'headTextColor' },
      },
      code: {
        tag: 'pre',
        style: { color: 'textColor' },
      },
    },
  },
};

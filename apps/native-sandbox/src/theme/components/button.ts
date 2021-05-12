export const button = {
  style: {
    px: 'm',
    height: 'm',
    bg: 'white',
    borderRadius: 's',
    shadow: 'strong',
    borderColor: 'grey',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    primary: {
      bg: 'positive',
      textStyle: {
        variant: 'p1',
        color: 'white',
      },
    },
    'primary/negative': {
      bg: 'negative',
      textStyle: {
        variant: 'p1',
        color: 'positive',
      },
    },
    secondary: {
      bg: 'transparent',
      borderWidth: 'xs',
      borderColor: 'positive',
      textStyle: {
        variant: 'p1',
        color: 'positive',
      },
    },
    'secondary/negative': {
      bg: 'transparent',
      borderWidth: 'xs',
      borderColor: 'negative',
      textStyle: {
        color: 'negative',
      },
    },
    round: {
      bg: 'dark',
      borderRadius: 'round',
    },
  },
};

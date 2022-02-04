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
      style: {
        bg: 'positive',
      },
      props: {
        textStyle: {
          variant: 'p1',
          color: 'white',
        },
      },
    },
    'primary/negative': {
      style: {
        bg: 'negative',
      },
      props: {
        textStyle: {
          variant: 'p1',
          color: 'positive',
        },
      },
    },
    secondary: {
      style: { bg: 'transparent', borderWidth: 'xs', borderColor: 'positive' },
      props: {
        textStyle: {
          variant: 'p1',
          color: 'positive',
        },
      },
    },
    'secondary/negative': {
      style: { bg: 'transparent', borderWidth: 'xs', borderColor: 'negative' },
      props: {
        textStyle: {
          color: 'negative',
        },
      },
    },
    round: {
      style: { bg: 'dark', borderRadius: 'round' },
    },
  },
};

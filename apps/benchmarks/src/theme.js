const { lightTheme } = require('@morfeo/preset-default');

const defaultTheme = {
  ...lightTheme,
  components: {
    Box: {
      style: {
        bg: 'primary',
        color: 'secondary',
        px: 'm',
        my: 's',
        shadow: 'light',
      },
    },
  },
};

module.exports = defaultTheme;

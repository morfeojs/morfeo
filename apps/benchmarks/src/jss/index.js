const { theme } = require('@morfeo/core');
const { writeMdTitle } = require('./utils');
const jssVsCoreSuite = require('./jssVsCore');

theme.set({
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
    m: '20px',
  },
  shadows: {
    light: {
      color: 'primary',
      offset: { width: 2, height: 2 },
      opacity: 0.4,
      radius: 20,
    },
  },
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
});

writeMdTitle(`# @morfeo/jss`);

jssVsCoreSuite.run({ async: false });

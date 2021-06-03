const { theme } = require('@morfeo/core');
const { writeMdTitle } = require('./utils');
const singlePropertySuite = require('./singleProperty');
const singleComplexPropertySuite = require('./singleComplexProperty');
const componentSuite = require('./componentStyle');
const completeStyleSuite = require('./completeStyle');

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

writeMdTitle(`# @morfeo/core`);

singlePropertySuite.run({ async: false });
singleComplexPropertySuite.run({ async: false });
componentSuite.run({ async: false });
completeStyleSuite.run({ async: false });

const { theme } = require('@morfeo/core');
const defaultTheme = require('./theme');
const styledSystemSuite = require('./styled-system');

theme.set(defaultTheme);

styledSystemSuite.run({ async: false });

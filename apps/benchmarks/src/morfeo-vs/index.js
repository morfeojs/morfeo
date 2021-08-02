const { morfeo } = require('@morfeo/core');
const defaultTheme = require('./theme');
const styledSystemSuite = require('./styled-system');

morfeo.setTheme('default', defaultTheme);

styledSystemSuite.run({ async: false });

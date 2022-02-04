const { morfeo } = require('@morfeo/core');
const defaultTheme = require('../theme');
const { writeMdTitle, writeMdMeta, appendMdFooter } = require('./utils');
const singlePropertySuite = require('./singleProperty');
const singleComplexPropertySuite = require('./singleComplexProperty');
const componentSuite = require('./componentStyle');
const completeStyleSuite = require('./completeStyle');

morfeo.setTheme('default', defaultTheme);

writeMdMeta({ id: 'core', title: 'Core' });
writeMdTitle(`# @morfeo/core`);

singlePropertySuite.run({ async: false });
singleComplexPropertySuite.run({ async: false });
componentSuite.run({ async: false });
completeStyleSuite.run({ async: false });

appendMdFooter();

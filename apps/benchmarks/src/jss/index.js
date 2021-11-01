const { morfeo } = require('@morfeo/core');
const defaultTheme = require('../theme');
const { writeMdTitle, writeMdMeta, appendMdFooter } = require('./utils');
const jssVsCoreSuite = require('./jssVsCore');

morfeo.setTheme('default', defaultTheme);

writeMdMeta({ id: 'jss', title: 'JSS' });
writeMdTitle(`# @morfeo/jss`);

jssVsCoreSuite.run({ async: false });

appendMdFooter();

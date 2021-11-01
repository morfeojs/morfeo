const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const defaultTheme = require('../theme');
const {
  onCycle,
  onStart,
  onComplete,
  getMdPath,
  writeMdMeta,
  writeMdTitle,
  appendMdFooter,
} = require('../utils');
const {
  compose,
  space,
  color,
  typography,
  layout,
  padding,
  margin,
  flexbox,
  grid,
  background,
  borders,
  position,
  shadow,
} = require('styled-system');

const allProps = compose(
  grid,
  space,
  color,
  layout,
  margin,
  shadow,
  borders,
  padding,
  flexbox,
  position,
  typography,
  background,
);

const suite = new Benchmark.Suite();

const mdPath = getMdPath('Morfeo Versus/styled-system');

const style = {
  p: 'm',
  m: 's',
  bg: 'secondary',
  color: 'primary',
};

writeMdMeta(mdPath, { id: 'morfeo-vs-styled-system', title: 'Styled System' });
writeMdTitle(mdPath, `# @morfeo/core vs styled-system`);

suite
  .add('Morfeo', () => {
    parsers.resolve(style);
  })
  .add('styled system', () => {
    allProps({ ...style, theme: defaultTheme });
  })
  .on('start', () => onStart(mdPath, 'resolving a style', style))
  .on('cycle', event => onCycle(mdPath, event))
  .on('complete', () => {
    onComplete(mdPath, suite);
    appendMdFooter(mdPath);
  });

module.exports = suite;

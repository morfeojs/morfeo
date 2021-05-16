const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const { onCycle, onComplete, onStart, appendInMd } = require('./utils');

const suite = new Benchmark.Suite();

const style = {
  px: 'm',
  py: 's',
  color: 'primary',
  bg: 'secondary',
  shadow: 'light',
  componentName: 'Box',
};

suite
  .add('regular parsing', () => {
    parsers.resolve({ style, cache: false });
  })
  .add('with cache enabled', () => {
    parsers.resolve({ style, cache: true });
  })
  .on('start', () => onStart('parsing a complete style', style))
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;

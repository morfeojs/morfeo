const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const { onCycle, onComplete, onStart } = require('./utils');

const suite = new Benchmark.Suite();

const style = { color: 'primary' };

suite
  .add('regular parsing', () => {
    parsers.disableCache();
    parsers.resolve(style);
  })
  .add('with cache enabled', () => {
    parsers.enableCache();
    parsers.resolve(style);
  })
  .on('start', () => onStart('single property parser', style))
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;

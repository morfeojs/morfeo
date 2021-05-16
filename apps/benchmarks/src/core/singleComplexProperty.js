const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const { onCycle, onComplete, onStart, appendInMd } = require('./utils');

const suite = new Benchmark.Suite();

const style = { shadow: 'light' };

suite
  .add('regular parsing', () => {
    parsers.resolve({ style, cache: false });
  })
  .add('with cache enabled', () => {
    parsers.resolve({ style, cache: true });
  })
  .on('start', () => onStart('single complex property parser', style))
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;

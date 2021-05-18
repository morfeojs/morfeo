const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const { getStyle } = require('@morfeo/jss');
const { onCycle, onComplete, onStart } = require('./utils');

const suite = new Benchmark.Suite();

const styles = { button: { color: 'primary' } };

suite
  .add('regular parsing', () => {
    Object.keys(styles).reduce((acc, key) => {
      const style = styles[key];
      return {
        ...acc,
        [key]: parsers.resolve({ style }),
      };
    }, {});
  })
  .add('with cache enabled', () => {
    getStyle(styles);
  })
  .on('start', () =>
    onStart('@morfeo/jss speed compared to @morfeo/core', styles),
  )
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;

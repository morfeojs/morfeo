const Benchmark = require('benchmark');
const { morfeo } = require('@morfeo/core');
const { getStyles } = require('@morfeo/jss');
const { onCycle, onComplete, onStart } = require('./utils');

const suite = new Benchmark.Suite();

const styles = { button: { color: 'primary' } };

suite
  .add('regular parsing', () => {
    Object.keys(styles).reduce((acc, key) => {
      const style = styles[key];
      return {
        ...acc,
        [key]: morfeo.resolve(style),
      };
    }, {});
  })
  .add('jss', () => {
    getStyles(styles);
  })
  .on('start', () =>
    onStart('@morfeo/jss speed compared to @morfeo/core', styles),
  )
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;

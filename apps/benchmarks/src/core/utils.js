const {
  getMdPath,
  onCycle: _onCycle,
  onStart: _onStart,
  writeInMd: _writeInMd,
  appendInMd: _appendInMd,
  onComplete: _onComplete,
  writeMdTitle: _writeMdTitle,
} = require('../utils');

const mdPath = getMdPath('core');

function writeInMd(text) {
  _writeInMd(mdPath, text);
}

function appendInMd(text) {
  appendInMd(mdPath, `\n\n${text}`);
}

function writeMdTitle(title) {
  _writeInMd(mdPath, `${title}`);
}

function onStart(title, style) {
  _onStart(mdPath, title, style);
}

function onCycle(event) {
  _onCycle(mdPath, event);
}

function onComplete(suite) {
  _onComplete(mdPath, suite);
}

module.exports = {
  onCycle,
  onStart,
  getMdPath,
  writeInMd,
  appendInMd,
  onComplete,
  writeMdTitle,
};

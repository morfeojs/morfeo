const {
  getMdPath,
  onCycle: _onCycle,
  onStart: _onStart,
  writeInMd: _writeInMd,
  appendInMd: _appendInMd,
  onComplete: _onComplete,
  writeMdMeta: _writeMdMeta,
  writeMdTitle: _writeMdTitle,
  appendMdFooter: _appendMdFooter,
} = require('../utils');

const mdPath = getMdPath('jss');

function writeInMd(text) {
  _writeInMd(mdPath, text);
}

function appendInMd(text) {
  _appendInMd(mdPath, `\n\n${text}`);
}

function writeMdMeta(params) {
  _writeMdMeta(mdPath, params);
}

function writeMdTitle(title) {
  _writeMdTitle(mdPath, `${title}`);
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

function appendMdFooter() {
  _appendMdFooter(mdPath);
}

module.exports = {
  onCycle,
  onStart,
  getMdPath,
  writeInMd,
  appendInMd,
  onComplete,
  writeMdMeta,
  writeMdTitle,
  appendMdFooter,
};

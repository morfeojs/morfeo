const fs = require('fs');
const path = require('path');

function getMdPath(fileName) {
  return path.resolve(__dirname, `../results`, `${fileName}.md`);
}

function writeInMd(mdPath, text) {
  fs.writeFileSync(mdPath, text);
}

function appendInMd(mdPath, text) {
  fs.appendFileSync(mdPath, `\n\n${text}`);
}

function writeMdTitle(mdPath, title) {
  writeInMd(mdPath, `${title}`);
}

function onStart(mdPath, title, style) {
  appendInMd(mdPath, `## ${title}`);
  console.log(`benchmark: ${title}`);
  appendInMd(
    mdPath,
    '```json\n' + `${JSON.stringify(style, undefined, 2)}` + '\n```',
  );
}

function onCycle(mdPath, event) {
  const title = event.target.name;
  appendInMd(
    mdPath,
    `**${title}** ${String(event.target).replace(`${title} x`, '')}`,
  );

  console.log(String(event.target));
}

function onComplete(mdPath, suite) {
  const result = `Fastest is **${suite.filter('fastest').map('name')}**`;
  appendInMd(mdPath, `${result}\n`);
  console.log(result);
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

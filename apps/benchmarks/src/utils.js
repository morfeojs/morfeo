const fs = require('fs');
const os = require('os');
const path = require('path');

function getMdPath(fileName) {
  return path.resolve(
    __dirname,
    `../../../docs/docs/Benchmarks`,
    `${fileName}.md`,
  );
}

function writeInMd(mdPath, text) {
  fs.writeFileSync(mdPath, text);
}

function appendInMd(mdPath, text) {
  fs.appendFileSync(mdPath, `\n\n${text}`);
}

function writeMdMeta(mdPath, { id, title }) {
  writeInMd(
    mdPath,
    `---
id: benchmarks-${id}
title: ${title}
description: Benchmarks > ${title}
---`,
  );
}

function writeMdTitle(mdPath, title) {
  appendInMd(mdPath, `${title}`);
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

function appendMdFooter(mdPath) {
  function printCpuCores() {
    const cpus = os.cpus();

    return `${cpus.length} cores, ${cpus[0].model}`;
  }

  appendInMd(
    mdPath,
    `:::info Notice
Tests are made using [benchmarkjs](https://benchmarkjs.com/) running on:

| OS     | VERSION  | CPU |
| :----- | :-------- | :------- |
| ${os.platform()} | ${os.version()} | ${printCpuCores()} |
:::`,
  );
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

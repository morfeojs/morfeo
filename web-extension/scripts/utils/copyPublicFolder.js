const path = require('path');
const fs = require('fs');

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  fs.readdirSync(src).forEach(fileName => {
    const [srcPath, destPath] = [src, dest].map(dirPath =>
      path.join(dirPath, fileName),
    );
    const stat = fs.lstatSync(srcPath);

    if (stat.isFile()) {
      return fs.copyFileSync(srcPath, destPath);
    }

    if (stat.isDirectory()) {
      return copyFolderSync(srcPath, destPath);
    }

    if (stat.isSymbolicLink()) {
      fs.symlinkSync(fs.readlinkSync(srcPath), destPath);
    }
  });
}

function copyPublicFolder(dest) {
  copyFolderSync(path.resolve(__dirname, '../..', 'public'), dest);
}

module.exports = copyPublicFolder;

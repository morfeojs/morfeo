const zipFolder = require('zip-folder');

const folderName = './dist';
const zipName = './dist.zip';

function zip(folderName, zipName) {
  return new Promise((resolve, reject) => {
    zipFolder(folderName, zipName, function (err) {
      if (err) {
        return reject(err);
      }
      resolve(true);
    });
  });
}

zip(folderName, zipName)
  .then(() => {
    console.log(
      `Successfully zipped the ${folderName} directory and store as ${zipName}`,
    );
  })
  .catch(err => {
    console.log('oh no! ', err);
  });

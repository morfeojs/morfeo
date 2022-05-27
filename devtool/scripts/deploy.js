const fs = require('fs');
const createWebStore = require('chrome-webstore-upload');

const CLIENT_ID = process.env.CLIENT_ID;
const EXTENSION_ID = process.env.EXTENSION_ID;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const zipName = './build.zip';
const extensionSource = fs.createReadStream(zipName);

const webStore = createWebStore({
  extensionId: EXTENSION_ID,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN,
});

function publish() {
  webStore
    .publish()
    .then(() => {
      console.log('Successfully published the newer version');
    })
    .catch(error => {
      console.log(`Error while publishing uploaded extension: ${error}`);
      process.exit(1);
    });
}

webStore
  .uploadExisting(extensionSource)
  .then(() => {
    console.log('Successfully uploaded the ZIP');
    publish();
  })
  .catch(error => {
    console.log(`Error while uploading ZIP: ${error}`);
    process.exit(1);
  });

import createWebStore from 'chrome-webstore-upload';
import * as fs from 'fs';

const CLIENT_ID = process.env.CHROME_WEB_CLIENT_ID;
const EXTENSION_ID = process.env.WEB_EXTENSION_ID;
const REFRESH_TOKEN = process.env.CHROME_WEB_REFRESH_TOKEN;
const CLIENT_SECRET = process.env.CHROME_WEB_CLIENT_SECRET;

const zipName = './dist.zip';
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

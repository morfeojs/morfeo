import browser from 'webextension-polyfill';

export function redirect(url: string) {
  browser.tabs
    .create({ url })
    .then(() => undefined)
    .catch(() => undefined);
}

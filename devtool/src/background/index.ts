import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
  console.log('Ⓜ️ MORFEO DEV TOOL INSTALLED');
});

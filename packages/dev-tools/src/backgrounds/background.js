chrome.runtime.onInstalled.addListener(() => {
  console.log('+++ MORFEO DEV TOOL INSTALLED +++');
  chrome.runtime.onMessage.addListener(params => {
    chrome.storage.sync.set({ theme: params });
  });
});

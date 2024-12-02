chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube Enhancer extension installed!');
});


// Listen for messages from content scripts
/* tslint:disable:no-unused-variable */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'log') {
    console.log(`[Content Script Log]: ${message.payload}`);
    sendResponse({ status: 'logged' });
  }
});

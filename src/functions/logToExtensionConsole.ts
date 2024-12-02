export const logToExtensionConsole = (message: string) => {
  chrome.runtime.sendMessage({ type: 'log', payload: message }, (response) => {
    if (chrome.runtime.lastError) {
      console.error('Error sending message to background:', chrome.runtime.lastError.message);
    } else {
      console.log('Message logged to background:', response);
    }
  });
};

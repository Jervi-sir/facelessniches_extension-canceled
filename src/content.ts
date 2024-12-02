import { logToExtensionConsole } from "./functions/logToExtensionConsole";
import { HandleYouTube } from "./sources/HandleYoutube";
import { HandleYouTubeStudio } from "./sources/HandleYouTubeStudio";


const initialize = () => {
  if (window.location.hostname.includes('youtube.com') && !window.location.hostname.includes('studio')) {
    logToExtensionConsole('Injecting YouTube buttons...');
    HandleYouTube();
  } else if (window.location.hostname.includes('studio.youtube.com')) {
    logToExtensionConsole('Injecting YouTube Studio button...');
    HandleYouTubeStudio();
  }
};

// Observe DOM changes for dynamic content loading
const observeDOMChanges = () => {
  const observer = new MutationObserver(() => initialize());
  observer.observe(document.body, { childList: true, subtree: true });
};

// Initialize the script
initialize();
observeDOMChanges();

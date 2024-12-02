import { CopyThumbnailButton } from "./features/copyThumbnailButton";
import { CopyVideoUrlButton } from "./features/copyVideoUrlButton";

// Function to inject buttons
const injectButtons = () => {
  const targetElement = document.querySelector('#middle-row'); // Targeting the element with id="middle-row"

  if (!targetElement) {
    console.log('Target element #middle-row not found. Retrying...');
    return;
  }

  // Prevent duplicate buttons
  if (document.querySelector('#custom-buttons')) return;

  // Create a container for buttons
  const container = document.createElement('div');
  container.id = 'custom-buttons';
  container.style.display = 'flex';
  container.style.gap = '10px';
  container.style.marginBottom = '10px';

  // Create "Copy Thumbnail URL" button
  const copyThumbnailButton = CopyThumbnailButton();

  // Create "Copy Video URL" button
  const copyVideoUrlButton = CopyVideoUrlButton();
  // Add buttons to the container
  container.append(copyThumbnailButton, copyVideoUrlButton);

  // Append the container to the target element
  targetElement.prepend(container);
};

// Observe DOM changes to handle navigation within YouTube
const observeDOMChanges = () => {
  const observer = new MutationObserver(() => injectButtons());
  observer.observe(document.body, { childList: true, subtree: true });
};

// Initialize the script
injectButtons();
observeDOMChanges();

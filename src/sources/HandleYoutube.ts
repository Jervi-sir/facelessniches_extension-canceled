import { CopyThumbnailButton } from "../features/copyThumbnailButton";
import { CopyVideoUrlButton } from "../features/copyVideoUrlButton";

export const HandleYouTube = () => {
  const targetElement = document.querySelector('#middle-row'); // Targeting the element with id="middle-row"

  if (!targetElement) {
    console.log('Target element for YouTube not found. Retrying...');
    return;
  }

  if (document.querySelector('#youtube-buttons')) return;

  const container = document.createElement('div');
  container.id = 'youtube-buttons';
  container.style.display = 'flex';
  container.style.gap = '10px';
  container.style.marginBottom = '10px';

  const copyThumbnailButton = CopyThumbnailButton();

  const copyVideoUrlButton = CopyVideoUrlButton();

  container.append(copyThumbnailButton, copyVideoUrlButton);
  targetElement.prepend(container);
};

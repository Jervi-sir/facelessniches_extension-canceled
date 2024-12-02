import { getVideoId } from "../functions/getVideoId";

export const CopyThumbnailButton = () => {
  const thisButton = document.createElement('button');
  thisButton.textContent = 'Copy Thumbnail URL';
  thisButton.onclick = () => {
    const videoId = getVideoId();
    if (videoId) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      navigator.clipboard.writeText(thumbnailUrl).then(() => alert('Thumbnail URL copied!'));
    }
  };

  return thisButton;
} 

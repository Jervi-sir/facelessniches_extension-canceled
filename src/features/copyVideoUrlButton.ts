import { getVideoId } from "../functions/getVideoId";

export const CopyVideoUrlButton = () => {

  const thisButton = document.createElement('button');
  thisButton.textContent = 'Copy Video URL';
  thisButton.onclick = () => {
    const videoId = getVideoId();
    if (videoId) {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      navigator.clipboard.writeText(videoUrl).then(() => alert('Video URL copied!'));
    }
  };

  return thisButton;

}

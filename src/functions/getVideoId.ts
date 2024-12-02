export const getVideoId = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('v');
};
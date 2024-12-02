export const HandleYouTubeStudio = () => {
  // Updated CSS selector to inject the button at the beginning of the specified element
  const selector = '#main > div';

  // Wait for the element to appear
  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.log('Target element for YouTube Studio not found. Retrying...');
    return;
  }

  // Prevent adding multiple buttons
  if (document.querySelector('#studio-buttons')) return;

  // Create a new button
  const button = document.createElement('button');
  button.id = 'studio-buttons';
  button.textContent = 'Check Studio';
  button.style.padding = '10px';
  button.style.marginTop = '10px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#ff0000';
  button.style.color = '#ffffff';
  button.style.border = 'none';
  button.style.borderRadius = '5px';

  // Define the button's click event
  button.onclick = () => {
    alert('You are really in YouTube Studio!');
  };

  // Add the button to the target element
  targetElement.prepend(button);
};

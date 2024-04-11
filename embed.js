// embed.js

(function () {
  // Function to render the embeddable component
  function renderEmbed() {
    const embedContainer = document.createElement('div');
    embedContainer.id = 'embed-container';
    document.body.appendChild(embedContainer);
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function () {
      // Customize this function to define the button's behavior
      alert('Button clicked!');
    });
    // Append the button to the embed container
    embedContainer.appendChild(button);
  }

  // Call renderEmbed function when the script is loaded
  renderEmbed();
})();

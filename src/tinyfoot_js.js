document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tinyfoot');
  const popover = document.createElement('div');
  popover.id = 'popover';
  document.body.appendChild(popover);

  buttons.forEach(button => {
    button.textContent = '• • •';
    button.addEventListener('click', function (event) {
      // Create an 'x' button for closing
      const closeButton = document.createElement('button');
      closeButton.textContent = 'x';
      closeButton.style.float = 'right';
      closeButton.style.cursor = 'pointer';

      // Add content and close button to the popover
      popover.innerHTML = ''; // Clear previous content
      popover.appendChild(closeButton);
      const footnoteText = document.createElement('div');
      footnoteText.textContent = event.target.getAttribute('data-footnote');
      popover.appendChild(footnoteText);

      // Set the position and display the popover
      const rect = button.getBoundingClientRect();
      popover.style.top = `${rect.top}px`;
      popover.style.left = `${rect.right + 10}px`;
      popover.style.display = 'block';

      // Add event listener to the 'x' button to close the popover
      closeButton.addEventListener('click', function () {
        popover.style.display = 'none';
      });
    });
  });

  // Hide popover when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('tinyfoot') && !popover.contains(event.target)) {
      popover.style.display = 'none';
    }
  });
});

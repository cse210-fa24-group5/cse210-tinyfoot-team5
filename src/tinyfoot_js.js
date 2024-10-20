document.addEventListener('DOMContentLoaded', function () {

  const buttons = document.querySelectorAll('.tinyfoot');

  // Create popover if it doesn't exist
  let popover;
  if (!document.getElementById('popover')) {
    popover = document.createElement('div');
    popover.id = 'popover';
    document.body.appendChild(popover);
  } else {
    popover = document.getElementById('popover');
  }

  buttons.forEach(button => {
    // Checks if user put anything to change footnote button appearance, otherwise defaults to dots
    if (button.innerHTML.trim() == "") {
      button.textContent = '• • •';
    }

    button.addEventListener('click', function (event) {
      // Set footnote text in popover
      popover.innerHTML = ''; // Clear previous content

      // Create close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'x';
      closeButton.style.float = 'right';
      closeButton.style.cursor = 'pointer';

      // Add footnote text to popover
      const footnoteText = document.createElement('div');
      footnoteText.textContent = event.target.getAttribute('data-footnote');
      
      popover.appendChild(closeButton);
      popover.appendChild(footnoteText);

      // Position and display the popover
      const rect = button.getBoundingClientRect();
      popover.style.top = `${rect.top + window.scrollY}px`; // Consider page scroll
      popover.style.left = `${rect.right + 10}px`;
      popover.style.display = 'block';

      setTimeout(() => {
        popover.style.opacity = '1';
        popover.style.transform = 'scale(1)';
      }, 10);

      // Close popover on clicking close button
      closeButton.addEventListener('click', function () {
        popover.style.display = 'none';
      });
    });
  });

  // Close popover when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('tinyfoot') && !popover.contains(event.target)) {
      popover.style.opacity = '0';
      popover.style.transform = 'scale(0.95)';
      setTimeout(() => {
        popover.style.display = 'none';
      }, 300);
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tinyfoot');
    const popover = document.getElementById('popover');
  
    buttons.forEach(button => {
      button.addEventListener('click', function (event) {
        const footnoteText = event.target.getAttribute('data-footnote');
        popover.textContent = footnoteText;
  
        const rect = event.target.getBoundingClientRect();
        popover.style.top = `${rect.top + window.scrollY}px`;
        popover.style.left = `${rect.right + 10}px`;
  
        popover.style.display = 'block';
      });
    });
  
    document.addEventListener('click', function (event) {
      if (!event.target.classList.contains('tinyfoot')) {
        popover.style.display = 'none';
      }
    });
  });
  
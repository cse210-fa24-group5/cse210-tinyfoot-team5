document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tinyfoot');
    const popover = document.createElement('div');
    popover.id = 'popover';
    document.body.appendChild(popover);
  
    buttons.forEach(button => {
      button.textContent = '• • •';
      button.addEventListener('click', function (event) {
        popover.textContent = event.target.getAttribute('data-footnote');
        const rect = button.getBoundingClientRect();
        popover.style.top = `${rect.top}px`;
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
  
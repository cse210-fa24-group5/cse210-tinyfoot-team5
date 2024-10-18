document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tinyfoot');
    if(!document.getElementById('popover')){
      const popover = document.createElement('div');
      popover.id = 'popover';
      document.body.appendChild(popover);
    }
  
    buttons.forEach(button => {
      // Checks if user put anything to change footnote button appearance, otherwise defaults to dots
      if (button.innerHTML.trim() == "") {
        button.textContent = '• • •';
      } 
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
  
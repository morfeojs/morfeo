const collapseButtons = document.querySelectorAll('.collapse');

collapseButtons.forEach(button => {
  button.addEventListener('click', e => {
    const target = button.getAttribute('data-target');

    const collapsible = document.getElementById(target);
    if (!collapsible) {
      return;
    }

    if (collapsible.classList.contains('collapsed')) {
      collapsible.classList.remove('collapsed');
      button.innerHTML = `▲`;
    } else {
      collapsible.classList.add('collapsed');
      button.innerHTML = `▼`;
    }
  });
});

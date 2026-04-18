document.addEventListener('DOMContentLoaded', function () {

  var dropdowns = document.querySelectorAll('li.dropdown');

  dropdowns.forEach(function (dropdown) {
    var chevron = dropdown.querySelector('.dropdown-chevron');
    var menu = dropdown.querySelector('.dropdown-menu');

    if (!chevron || !menu) return;

    chevron.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      var isOpen = menu.style.display === 'flex';

      // Close all dropdowns first
      document.querySelectorAll('li.dropdown .dropdown-menu').forEach(function (m) {
        m.style.display = 'none';
      });

      // Toggle this one
      if (!isOpen) {
        menu.style.display = 'flex';
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('li.dropdown .dropdown-menu').forEach(function (m) {
      m.style.display = 'none';
    });
  });

});

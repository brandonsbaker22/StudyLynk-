document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function(dropdown) {
    var link = dropdown.querySelector("a");
    var menu = dropdown.querySelector(".dropdown-menu");
    var chevron = dropdown.querySelector(".dropdown-chevron");
    if (!link || !menu) return;
    if (chevron) {
      chevron.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = menu.style.display === "flex";
        menu.style.display = isOpen ? "none" : "flex";
      });
    }
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".dropdown")) {
        menu.style.display = "none";
      }
    });
  });
});

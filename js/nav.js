// StudyLynk Navigation Script
// Handles the mobile hamburger menu toggle and Services dropdown behavior

var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  // Toggle the mobile nav open/closed when hamburger is clicked
  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav when clicking outside
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // If user resizes to desktop, make sure mobile state resets
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      navLinks.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Handle dropdown chevron button click (mobile)
var chevrons = document.querySelectorAll(".dropdown-chevron");
chevrons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    var menu = this.nextElementSibling;
    if (!menu || !menu.classList.contains("dropdown-menu")) return;

    var isOpen = menu.style.display === "block";

    // Close all dropdown menus first
    var allMenus = document.querySelectorAll(".dropdown-menu");
    allMenus.forEach(function (m) {
      m.style.display = "none";
    });

    // Open this one if it was not already open
    if (!isOpen) {
      menu.style.display = "block";
    }
  });
});

// Handle hover behavior on desktop
var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function (dd) {
  dd.addEventListener("mouseenter", function () {
    if (window.innerWidth > 900) {
      var menu = this.querySelector(".dropdown-menu");
      if (menu) menu.style.display = "block";
    }
  });

  dd.addEventListener("mouseleave", function () {
    if (window.innerWidth > 900) {
      var menu = this.querySelector(".dropdown-menu");
      if (menu) menu.style.display = "none";
    }
  });
});

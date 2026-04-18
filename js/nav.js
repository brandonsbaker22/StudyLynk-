// StudyLynk Navigation Script
// Handles the mobile hamburger menu toggle and the Services dropdown

var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");

// Toggle the mobile nav open and closed when the hamburger button is clicked
navToggle.addEventListener("click", function () {
  if (navLinks.classList.contains("nav-open")) {
    navLinks.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  } else {
    navLinks.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
  }
});

// Handle the dropdown chevron button click (used on mobile)
var chevrons = document.querySelectorAll(".dropdown-chevron");
chevrons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var menu = this.nextElementSibling;
    var isOpen = menu.style.display === "block";
    // Close all open dropdown menus first
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

// Handle hover on desktop (screens wider than 900px)
var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function (dd) {
  dd.addEventListener("mouseenter", function () {
    if (window.innerWidth > 900) {
      this.querySelector(".dropdown-menu").style.display = "block";
    }
  });
  dd.addEventListener("mouseleave", function () {
    if (window.innerWidth > 900) {
      this.querySelector(".dropdown-menu").style.display = "none";
    }
  });
});

// Close the mobile nav if the user clicks anywhere outside of it
document.addEventListener("click", function (e) {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("nav-open");
  }
});

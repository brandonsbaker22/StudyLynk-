// StudyLynk Contact Form Validation Script
// Handles: uppercase first letters, zip code validation, email validation

// Capitalize the first letter of a field value as the user types
function capitalizeFirst(field) {
  var val = field.value;
  if (val.length > 0) {
    field.value = val.charAt(0).toUpperCase() + val.slice(1);
  }
}

// Apply capitalize-on-input to first name, last name, and city fields
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var city = document.getElementById("city");

if (firstName) {
  firstName.addEventListener("input", function () {
    capitalizeFirst(this);
  });
}

if (lastName) {
  lastName.addEventListener("input", function () {
    capitalizeFirst(this);
  });
}

if (city) {
  city.addEventListener("input", function () {
    capitalizeFirst(this);
  });
}

// Validate email format using a regular expression
function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Validate zip code — must be exactly 5 digits
function isValidZip(zip) {
  var pattern = /^\d{5}$/;
  return pattern.test(zip);
}

// Show an error message below a field
function showError(fieldId, message) {
  var existing = document.getElementById(fieldId + "-error");
  if (existing) {
    existing.remove();
  }
  var field = document.getElementById(fieldId);
  if (field) {
    var err = document.createElement("span");
    err.id = fieldId + "-error";
    err.style.color = "#c0392b";
    err.style.fontSize = "0.85rem";
    err.style.display = "block";
    err.style.marginTop = "4px";
    err.textContent = message;
    field.parentNode.insertBefore(err, field.nextSibling);
    field.style.borderColor = "#c0392b";
  }
}

// Clear an error message from a field
function clearError(fieldId) {
  var existing = document.getElementById(fieldId + "-error");
  if (existing) {
    existing.remove();
  }
  var field = document.getElementById(fieldId);
  if (field) {
    field.style.borderColor = "";
  }
}

// Run full validation when the form is submitted
var contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    // First name
    var fnVal = firstName ? firstName.value.trim() : "";
    if (fnVal === "") {
      showError("firstName", "Please enter your first name.");
      valid = false;
    } else {
      clearError("firstName");
    }

    // Last name
    var lnVal = lastName ? lastName.value.trim() : "";
    if (lnVal === "") {
      showError("lastName", "Please enter your last name.");
      valid = false;
    } else {
      clearError("lastName");
    }

    // Email
    var emailField = document.getElementById("email");
    var emailVal = emailField ? emailField.value.trim() : "";
    if (emailVal === "") {
      showError("email", "Please enter your email address.");
      valid = false;
    } else if (!isValidEmail(emailVal)) {
      showError("email", "Please enter a valid email address (e.g. name@example.com).");
      valid = false;
    } else {
      clearError("email");
    }

    // City
    var cityVal = city ? city.value.trim() : "";
    if (cityVal === "") {
      showError("city", "Please enter your city.");
      valid = false;
    } else {
      clearError("city");
    }

    // Zip code
    var zipField = document.getElementById("zip");
    var zipVal = zipField ? zipField.value.trim() : "";
    if (zipVal === "") {
      showError("zip", "Please enter your zip code.");
      valid = false;
    } else if (!isValidZip(zipVal)) {
      showError("zip", "Zip code must be exactly 5 digits (e.g. 72712).");
      valid = false;
    } else {
      clearError("zip");
    }

    // If everything passes, show a success message
    if (valid) {
      var formWrap = document.getElementById("contactFormWrap");
      if (formWrap) {
        formWrap.innerHTML = "<div style='text-align:center; padding:3rem 1rem;'>"
          + "<h3 style='font-family:Playfair Display,serif; color:#0B2545; font-size:1.8rem;'>Message Sent!</h3>"
          + "<p style='color:#444; margin-top:1rem; line-height:1.7;'>Thank you, " + fnVal + ". We received your message and will get back to you within 24 hours.</p>"
          + "</div>";
      }
    }
  });
}

// Clear errors as the user corrects fields
var allFields = ["firstName", "lastName", "email", "city", "zip"];
allFields.forEach(function (id) {
  var el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", function () {
      clearError(id);
    });
  }
});

// StudyLynk Booking / Consultation Modal Script
// Handles opening and closing the modal, step navigation, and format selection

// Open the modal when any "Request a Free Consultation" button is clicked
var openButtons = document.querySelectorAll(".open-modal");
openButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var modal = document.getElementById("consultModal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      showStep(1);
    }
  });
});

// Store selected format for the booking
var selectedFormat = null;

// Open the booking modal
function openBookingModal(event) {
  if (event) {
    event.preventDefault();
  }
  var modal = document.getElementById("bookingOverlay");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Close the booking modal
function closeBookingModal() {
  var modal = document.getElementById("bookingOverlay");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
    // Reset the modal
    document.getElementById("stepFormat").style.display = "block";
    document.getElementById("stepAvailability").style.display = "none";
    document.getElementById("stepContact").style.display = "none";
    document.getElementById("stepDone").style.display = "none";
    selectedFormat = null;
  }
}

// Select a consultation format (In Person, Phone, Online via Zoom)
function selectFormat(format) {
  selectedFormat = format;
  document.getElementById("stepFormat").style.display = "none";
  document.getElementById("stepAvailability").style.display = "block";
}

// Go to contact info step from availability step
function goToContact() {
  // Validate that at least one day and time is selected
  var daysChecked = document.querySelectorAll("input[name='days']:checked").length;
  var timesChecked = document.querySelectorAll("input[name='timeofday']:checked").length;
  
  if (daysChecked === 0 || timesChecked === 0) {
    alert("Please select at least one preferred day and time.");
    return;
  }
  
  document.getElementById("stepAvailability").style.display = "none";
  document.getElementById("stepContact").style.display = "block";
}

// Submit the booking request
function submitBooking() {
  var name = document.getElementById("bookName");
  var email = document.getElementById("bookEmail");
  
  if (!name || name.value.trim() === "") {
    alert("Please enter your full name.");
    return;
  }
  if (!email || email.value.trim() === "") {
    alert("Please enter your email address.");
    return;
  }
  
  // Here you would typically send the data to a server
  // For now, just show the success message
  document.getElementById("stepContact").style.display = "none";
  document.getElementById("stepDone").style.display = "block";
}

// Close modal when clicking outside of it (on the overlay background)
document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById("bookingOverlay");
  if (overlay) {
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) {
        closeBookingModal();
      }
    });
  }
});

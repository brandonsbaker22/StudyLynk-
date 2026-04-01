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

// Close the modal when the X button or overlay background is clicked
function closeModal() {
  var modal = document.getElementById("consultModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
    resetModal();
  }
}

var closeBtn = document.getElementById("modalClose");
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

var modal = document.getElementById("consultModal");
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Show a specific step and hide the others
function showStep(stepNum) {
  var steps = document.querySelectorAll(".modal-step");
  steps.forEach(function (step) {
    step.style.display = "none";
  });
  var target = document.getElementById("step" + stepNum);
  if (target) {
    target.style.display = "block";
  }
}

// Format selection buttons (In Person / Online)
var formatButtons = document.querySelectorAll(".format-btn");
formatButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    formatButtons.forEach(function (b) {
      b.classList.remove("selected");
    });
    this.classList.add("selected");
    // Move to step 2 after a short delay
    setTimeout(function () {
      showStep(2);
    }, 300);
  });
});

// Next and back buttons between steps
var nextToStep3 = document.getElementById("nextToStep3");
if (nextToStep3) {
  nextToStep3.addEventListener("click", function () {
    showStep(3);
  });
}

var backToStep1 = document.getElementById("backToStep1");
if (backToStep1) {
  backToStep1.addEventListener("click", function () {
    showStep(1);
  });
}

var backToStep2 = document.getElementById("backToStep2");
if (backToStep2) {
  backToStep2.addEventListener("click", function () {
    showStep(2);
  });
}

// Submit the consultation request form
var submitBtn = document.getElementById("submitRequest");
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    var name = document.getElementById("modalName");
    var email = document.getElementById("modalEmail");
    var phone = document.getElementById("modalPhone");

    if (!name || name.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    if (!email || email.value.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
    if (!phone || phone.value.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }

    showStep(4);
  });
}

// Close button on the confirmation step
var doneBtn = document.getElementById("modalDone");
if (doneBtn) {
  doneBtn.addEventListener("click", closeModal);
}

// Reset the modal back to step 1 when it is closed
function resetModal() {
  showStep(1);
  formatButtons.forEach(function (b) {
    b.classList.remove("selected");
  });
  var checkboxes = document.querySelectorAll(".modal-step input[type='checkbox']");
  checkboxes.forEach(function (cb) {
    cb.checked = false;
  });
  var inputs = document.querySelectorAll(".modal-step input[type='text'], .modal-step input[type='email'], .modal-step input[type='tel'], .modal-step textarea");
  inputs.forEach(function (inp) {
    inp.value = "";
  });
}

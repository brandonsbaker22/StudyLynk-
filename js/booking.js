function openBookingModal(event) {
  if (event) {
    event.preventDefault();
  }
  var overlay = document.getElementById("bookingOverlay");
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  document.getElementById("stepFormat").style.display = "block";
  document.getElementById("stepDateTime").style.display = "none";
  document.getElementById("stepContact").style.display = "none";
  document.getElementById("stepDone").style.display = "none";
}

function closeBookingForm() {
  document.getElementById("bookingOverlay").style.display = "none";
}

function pickFormat(format) {
  var labels = { phone: "Phone Call", zoom: "Zoom", inperson: "In Person" };
  document.getElementById("chosenFormat").textContent = labels[format];
  document.getElementById("stepFormat").style.display = "none";
  document.getElementById("stepDateTime").style.display = "block";
}

function goToContact() {
  var date = document.getElementById("bookingDate").value;
  var time = document.getElementById("bookingTime").value;

  if (date === "" || time === "") {
    alert("Please pick a date and a time before continuing.");
    return;
  }

  document.getElementById("stepDateTime").style.display = "none";
  document.getElementById("stepContact").style.display = "block";
}

function submitBooking() {
  var name = document.getElementById("bName").value;
  var email = document.getElementById("bEmail").value;
  var phone = document.getElementById("bPhone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  var date = document.getElementById("bookingDate").value;
  var time = document.getElementById("bookingTime").value;
  var format = document.getElementById("chosenFormat").textContent;

  document.getElementById("stepContact").style.display = "none";
  document.getElementById("stepDone").style.display = "block";
  document.getElementById("confirmMsg").innerHTML =
    "Thanks " + name + "! Your free <strong>" + format + "</strong> consultation is set for <strong>" + date + " at " + time + "</strong>. We will reach out to " + email + " to confirm.";
}

/* =========================
   REGISTER VALIDATION
========================= */

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const roll = document.getElementById("rollNumber").value.trim();

    const dept = document.getElementById("department").value;

    const year = document.getElementById("year").value;

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    message.textContent = "";

    if (
      name === "" ||
      roll === "" ||
      dept === "" ||
      year === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      message.textContent = "Please fill all fields.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      message.textContent = "Enter a valid email address.";
      return;
    }

    if (phone.length !== 10) {
      message.textContent = "Phone number must contain 10 digits.";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters.";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      return;
    }

    alert("Registration Successful!");

    window.location.href = "login.html";
  });

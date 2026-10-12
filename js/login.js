/* ==========================
   LOGIN VALIDATION
========================== */

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (email === "" || password === "") {
      errorMsg.textContent = "Please fill all fields.";

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Enter a valid email address.";

      return;
    }

    alert("Login Successful!");

    window.location.href = "events.html";
  });

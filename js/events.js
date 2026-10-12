/* ===========================
   EVENT REGISTRATION
=========================== */

function registerEvent(eventName) {
  localStorage.setItem("selectedEvent", eventName);

  window.location.href = "event-registration.html";
}

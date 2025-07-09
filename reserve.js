document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const checkInInput = document.getElementById("checkInDate");
  const checkInDate = new Date(checkInInput.value);
  const availabilityDiv = document.getElementById("availabilityMessage");

  // Dummy logic: 50% chance available
  const isAvailable = Math.random() > 0.5;

  availabilityDiv.classList.remove("success", "error", "hidden");

  if (isAvailable) {
    availabilityDiv.classList.add("success");
    availabilityDiv.textContent = "✅ Reservation Available! Your booking has been accepted.";
    this.reset(); // Reset only if successful
  } else {
    const nextAvailable = new Date(checkInDate);
    nextAvailable.setDate(checkInDate.getDate() + 2);
    availabilityDiv.classList.add("error");
    availabilityDiv.textContent = `❌ Not available on selected date. Next available: ${nextAvailable.toDateString()}`;
  }

  setTimeout(() => {
    availabilityDiv.classList.add("hidden");
  }, 5000);
});

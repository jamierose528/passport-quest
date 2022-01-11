const addTrip = async () => {
  event.preventDefault();

  const country = document.querySelector("#country").value.trim();
  const city = document.querySelector("#city").value.trim();
  const startDay = document.querySelector("#start_date").value.trim();
  const endDay = document.querySelector("#end_date").value.trim();
  const budget = document.querySelector("#budget").value.trim();
  const accommodation = document.querySelector("#accommodation").value.trim();
  const transportation = document.querySelector("#transportation").value.trim();
  const emergencyContactName = document
    .querySelector("#emergencyName")
    .value.trim();
  const emergencyContactPhone = document
    .querySelector("#emergencyContact")
    .value.trim();

  const notes = document.querySelector("#note").value.trim();

  if (
    country &&
    city &&
    startDay &&
    endDay &&
    budget &&
    accommodation &&
    transportation &&
    emergencyContactName &&
    emergencyContactPhone &&
    notes
  ) {
    const response = await fetch("/api/trip/", {
      method: "POST",
      body: JSON.stringify({
        country,
        city,
        startDay,
        endDay,
        budget,
        accommodation,
        transportation,
        emergencyContactName,
        emergencyContactPhone,
        notes,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/viewtrips");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#add-trip-form").addEventListener("submit", addTrip);

// Datepicker
$(function () {
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

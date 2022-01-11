const addTrip = async () => {
  event.preventDefault();

  const country = document.querySelector("#country").value.trim();
  const city = document.querySelector("#city").value.trim();
  const startDate = document.querySelector("#start_date").value.trim();
  const endDate = document.querySelector("#end_date").value.trim();
  const accomodation = document.querySelector("#accomodation").value.trim();
  const transportation = document.querySelector("#transportation").value.trim();
  const emergencyName = document.querySelector("#emergencyName").value.trim();
  const emergencyContact = document
    .querySelector("#emergencyContact")
    .value.trim();
  const notes = document.querySelector("#note").value.trim();

  if (
    country &&
    city &&
    startDate &&
    endDate &&
    accomodation &&
    transportation &&
    emergencyName &&
    emergencyContact &&
    notes
  ) {
    const response = await fetch("/api/users/addTrip", {
      method: "POST",
      body: JSON.stringify({
        country,
        city,
        startDate,
        endDate,
        accomodation,
        transportation,
        emergencyName,
        emergencyContact,
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

document.querySelector("#addTrip").addEventListener("click", addTrip);

// Datepicker
$(function () {
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

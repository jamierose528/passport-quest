const viewTrip = async () => {
  const response = await fetch("/api/users/viewtrips", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/viewtrips");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#viewTrips").addEventListener("click", viewTrip);

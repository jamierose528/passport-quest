const viewTrip = async () => {
  const response = await fetch("/api/users/viewTrip", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#viewTrip").addEventListener("click", viewTrip);

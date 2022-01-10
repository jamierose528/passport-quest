const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#create-trip").value.trim();
//   const needed_funding = document
//     .querySelector("#project-funding")
//     .value.trim();
//   const description = document.querySelector("#project-desc").value.trim();

  if (name) {
    const response = await fetch(`/api/addtrip`, {
      method: "GET",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/userprofile");
    } else {
      alert("Failed to create trip!");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

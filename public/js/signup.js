const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const firstName = document.querySelector("#first_name-signup").value.trim();
  const lastName = document.querySelector("#last_name-signup").value.trim();
  const nationality = document
    .querySelector("#nationality-signup")
    .value.trim();
  const birthday = document.querySelector("#datepicker").value.trim(); //datepicker??
  const home_country = document
    .querySelector("#home_country-signup")
    .value.trim();
  // const profile_picture = document.querySelector("#img");

  if (
    username &&
    email &&
    password &&
    firstName &&
    lastName &&
    nationality &&
    birthday &&
    home_country
    // profile_picture
  ) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName, //add nationality, etc
        nationality,
        birthday,
        home_country,
        // profile_picture,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

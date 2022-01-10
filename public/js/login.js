alert("~!");
const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  alert("click");
  const username = document.querySelector("#userName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const first_name = document.querySelector("#firstName").value.trim(); ///double check
  const last_name = document.querySelector("#lastName").value.trim();
  const middle_name = document.querySelector("#middleName").value.trim();
  const birthday = document.querySelector("#datepicker").value.trim();
  const nationality = document.querySelector("#nationality").value.trim(); ///
  const home_country = document.querySelector("#homeCountry").value.trim();
  //   const profile_picture = document.querySelector("#img").value.trim();

  if (username && email && password && first_name && last_name) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
        middle_name,
        birthday,
        nationality,
        home_country,
        // profile_picture,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/userprofile");
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

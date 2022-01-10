const addBlog = async () => {
  const response = await fetch("/api/users/addBlog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#addBlog").addEventListener("click", addBlog);

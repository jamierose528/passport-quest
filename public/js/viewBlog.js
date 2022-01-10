const viewBlog = async () => {
  const response = await fetch("/api/users/viewBlog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#viewBlog").addEventListener("click", viewBlog);

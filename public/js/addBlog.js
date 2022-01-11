const addBlog = async (e) => {
  e.preventDefault()
  const title = document.querySelector("#title").value
  const entry = document.querySelector("#message").value
  const trip_id = 1

  const response = await fetch("/api/blog/addblog", {
    method: "POST",
    body: JSON.stringify({ title, entry, trip_id,}),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/viewBlogs");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#addBlog").addEventListener("click", addBlog);

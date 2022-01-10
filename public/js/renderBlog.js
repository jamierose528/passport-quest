function renderBlogPage(e) {
    e.preventDefault()

    fetch(`/addBlog/${e.dataset.tripId}`);
};

$("body").on("click", ".addBlogBtn", renderBlogPage)
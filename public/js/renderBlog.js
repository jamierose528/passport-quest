function renderBlogPage(e) {
    e.preventDefault()
    e.stopPropagation()
    fetch(`/addBlog/${e.dataset.tripId}`);
};

$("body").on("click", ".addBlogBtn", renderBlogPage)
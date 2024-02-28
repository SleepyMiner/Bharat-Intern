document.addEventListener("DOMContentLoaded", function () {
  const postForm = document.getElementById("post-form");
  const postsContainer = document.getElementById("posts-container");

  // Fetch posts on page load
  fetchPosts();

  // Submit form event
  postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Create post
    fetch("http://localhost:9000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Clear form
        postForm.reset();
        // Fetch posts again
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  function fetchPosts() {
    fetch("http://localhost:9000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        postsContainer.innerHTML = "";
        data.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
          <div class="home-feature-card">
              <h2 class="home-text2">${post.title}</h2>
              <span class="home-text3">
              ${post.content}
              </span>
            </div>
                    
                `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

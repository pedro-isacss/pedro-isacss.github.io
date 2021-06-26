const divPosts = document.getElementById("posts");

fetch("../data/blog.json")
  .then((response) => response.json())
  .then((res) => {
    res.map((post) => {
      divPosts.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.prev}</p>
          <a href="${post.link}" class="btn btn-primary">Read</a>
        </div>
      </div>
      `;
    });
  });

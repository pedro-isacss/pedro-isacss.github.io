// ===== Loading projects =====
fetch("../data/projects.json")
  .then((response) => response.json())
  .then((res) => {
    const projects = document.querySelector("section#projects-container");
    [...res].map((project) => {
      const container = document.createElement("a");
      const img = document.createElement("img");
      container.setAttribute("href", project.link);
      container.setAttribute("target", "__blank");
      img.setAttribute("src", project.img);
      container.appendChild(img);
      projects.appendChild(container);
    });
  });

fetch("../data/portfolio.json")
  .then((response) => response.json())
  .then((res) => {
    res.map((project) => {
      const projects = document.querySelector("section.personal-projects");
      const link = document.createElement("a");
      const img = document.createElement("img");

      link.setAttribute("href", project.link);
      link.setAttribute("target", "__blank");
      img.src = project.img;

      link.appendChild(img);
      projects.appendChild(link);
    });
  });

const divSites = document.getElementById("sites");

fetch("../data/sites.json")
  .then((response) => response.json())
  .then((res) => {
    res.slice(0, 10).map((site) => {
      const link = document.createElement("a");
      const img = document.createElement("img");
      link.setAttribute("href", site.link);
      link.setAttribute("class", "col m-3");
      link.setAttribute("target", "_blank");
      img.setAttribute("src", site.img);
      img.setAttribute("class", "rounded");
      img.style.maxWidth = "250px";
      img.style.width = "100%";
      link.style.maxWidth = "250px";
      link.style.width = "100%";
      link.style.display = "flex";
      link.style.justifyContent = "center";
      link.style.alignItems = "center";
      link.style.padding = 0;
      link.appendChild(img);
      divSites.appendChild(link);
    });
  });

const divSites = document.getElementById("sites");

function getSites(until) {
  fetch("../data/sites.json")
    .then((response) => response.json())
    .then((res) => {
      res.slice(0, until).map((site) => {
        const link = document.createElement("a");
        const img = document.createElement("img");
        link.setAttribute("href", site.link);
        link.setAttribute("class", "col m-3");
        img.setAttribute("src", site.img);
        img.setAttribute("class", "rounded shadow-lg");
        img.style.maxWidth = "250px";
        img.style.width = "100%";
        link.style.maxWidth = "250px";
        link.style.width = "100%";
        link.style.padding = 0;
        link.appendChild(img);
        divSites.appendChild(link);
      });
    });
}

if (window.innerWidth > 530) {
  getSites(3);
} else {
  getSites(2);
}

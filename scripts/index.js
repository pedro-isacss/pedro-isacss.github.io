let dataPortfolio = [];

function createElementPortfolio(title, link, img, type) {
  let portfolioContainer = document.querySelector("div.portfolio-container");

  let elementContainer = document.createElement("a");
  let imgElement = document.createElement("img");
  let infoContainer = document.createElement("div");
  let titleElement = document.createElement("h2");
  let typeElement = document.createElement("span");

  elementContainer.setAttribute("href", link);
  elementContainer.setAttribute("class", "portfolioElement");
  if (type === "Front-End") {
    elementContainer.setAttribute("target", "__blank");
  }
  infoContainer.setAttribute(
    "class",
    "info-portfolioElement-container flex-row-column-between-center"
  );
  imgElement.setAttribute("src", img);
  imgElement.setAttribute("alt", title);
  titleElement.innerHTML = title;
  typeElement.innerHTML = type;

  infoContainer.appendChild(titleElement);
  infoContainer.appendChild(typeElement);
  elementContainer.appendChild(imgElement);
  elementContainer.appendChild(infoContainer);

  portfolioContainer.appendChild(elementContainer);
}

fetch("../data/portfolio.json")
  .then((response) => response.json())
  .then((res) => {
    dataPortfolio = res;
    dataPortfolio.map((element) => {
      createElementPortfolio(
        element["title"],
        element["link"],
        element["img"],
        element["type"]
      );
    });
  });

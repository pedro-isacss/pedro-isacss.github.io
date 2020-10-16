let dataPortfolio = [];
let idsPortfolioElements = [];
let countPortfolioElements = 0;
let name = "Pedro Isac";
let nameAtual = "P";

/* CREATE ELEMENT PORTFOLIO */
function createPortfolioElement(title, link, img, type) {
  countPortfolioElements++;
  let portfolioContainer = document.querySelector("div.portfolio-container");

  let elementContainer = document.createElement("a");
  let imgElement = document.createElement("img");
  let infoContainer = document.createElement("div");
  let titleElement = document.createElement("h2");
  let typeElement = document.createElement("span");

  elementContainer.setAttribute("href", link);
  elementContainer.setAttribute("class", "portfolioElement");
  elementContainer.setAttribute(
    "id",
    "portfolioElement" + countPortfolioElements
  );
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
  idsPortfolioElements = [
    ...idsPortfolioElements,
    "portfolioElement" + countPortfolioElements,
  ];
}

/* ANIMATION NAME */
let indexName = 1;
setInterval(function () {
  if ($("#name").text() !== name && indexName < name.length) {
    nameAtual += name[indexName];
    $("#name").text(nameAtual);
    indexName++;
  } else {
    nameAtual = "P";
    $("#name").text(nameAtual);
    indexName = 1;
  }
}, 400);

/* ANIMATION PORTFOLIO ELEMENT */
$(window).scroll(function () {
  for (let item of idsPortfolioElements) {
    $("#" + item).css({ opacity: 0, transition: "2s" });
    if (
      $(window).scrollTop() >
      $("#" + item).offset().top - $(window).height() / 1.2
    ) {
      $("#" + item).css({
        "animation-name": "portfolioElementAnimationScroll",
        "animation-duration": "2s",
        "animation-iteration-count": 1,
        opacity: 1,
      });
    } else {
      $("#" + item).css({
        animation: "none",
      });
    }
  }
});

/* GET PORTFOLIO ELEMENTS */
fetch("../data/portfolio.json")
  .then((response) => response.json())
  .then((res) => {
    dataPortfolio = res;
    dataPortfolio.map((element) => {
      createPortfolioElement(
        element["title"],
        element["link"],
        element["img"],
        element["type"]
      );
    });
  });

let dataPortfolio = [];
let name = "Pedro Isac";
let nameAtual = "P";

/* RESPONSIVE MENU */
let openMenu = false;
$(".nav-button").click(function () {
  openMenu = !openMenu;
  if (openMenu) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "./images/icon-close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "./images/icon-menu.png");
  }
});

/* CREATE ELEMENT PORTFOLIO */
function createPortfolioElement(title, link, img, type) {
  let elementContainer = $(
    `<a href="${link}" class="portfolioElement" target="__blank"></a>`
  );
  let imgElement = $(`<img src="${img}" alt="${title}" />`);
  let infoContainer = $(
    `<div class="info-portfolioElement-container flex-row-column-between-center"></div>`
  );
  let titleElement = $(`<h2>${title}</h2>`);
  let typeElement = $(`<span>${type}</span>`);

  $(infoContainer).append(typeElement);
  $(elementContainer).append(imgElement, infoContainer, titleElement);
  $(".portfolio-container").append(elementContainer);
}

/* ANIMATION TYPING */
let indexName = 1;
setInterval(function () {
  if ($("#text").text() !== name && indexName < name.length) {
    nameAtual += name[indexName];
    $("#text").text(nameAtual);
    indexName++;
  } else {
    nameAtual = "P";
    $("#text").text(nameAtual);
    indexName = 1;
  }
}, 400);

/* GET PORTFOLIO ELEMENTS */
fetch("../portfolio.json")
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

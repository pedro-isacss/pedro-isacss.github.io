let dataChallenges = [];

/* RESPONSIVE MENU */
let openMenu = false;
$(".nav-button").click(function () {
  openMenu = !openMenu;
  if (openMenu) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "../../images/icon-close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "../../images/icon-menu.png");
  }
});

/* CREATE ELEMENT CHALLENGE */
function createChallengeElement(title, link, img, type, value) {
  let elementContainer;
  let imgElement = $(`<img src="${img}" alt="${title}" />`);
  let infoContainer = $(`<div class="info-challengeElement-container"></div>`);
  let titleElement = $(`<h2>${title}</h2>`);
  let typeElement = $(`<span>${type}</span>`);
  let valueElement;
  if (value === "Free") {
    elementContainer = $(
      `<a href="${link}" class="challengeElement" download="${title
        .toLowerCase()
        .replace(" ", "-")}.zip"></a>`
    );
    valueElement = $(`<span class="free-challenge value">${value}</span>`);
  } else {
    elementContainer = $(`<a href="${link}" class="challengeElement"></a>`);
    valueElement = $(`<span>${value}</span>`);
  }

  $(infoContainer).append(typeElement, valueElement);
  $(elementContainer).append(imgElement, infoContainer, titleElement);
  $(".challenges-container").append(elementContainer);
}

/* ATTENTION */
$("#close-attention").click(function () {
  $(".attention").css("display", "none");
});

/* GET CHALLENGE ELEMENTS */
fetch("../../data/challenges.json")
  .then((response) => response.json())
  .then((res) => {
    dataChallenges = res;
    dataChallenges.map((element) => {
      createChallengeElement(
        element["title"],
        element["link"],
        element["img"],
        element["type"],
        element["value"]
      );
    });
  });

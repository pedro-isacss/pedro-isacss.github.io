let dataProducts = [];
let idsProductsElements = [];
let countProductsElements = 0;

/* RESPONSIVE MENU */
let open = false;

$(".nav-button").click(function () {
  open = !open;
  if (open) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "../icons/close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "../icons/menu.png");
  }
});

/* CREATE ELEMENT PRODUCT */
function createProductElement(title, link, img, value) {
  countProductsElements++;
  let productContainer = document.querySelector("div.products-container");

  let elementContainer = document.createElement("a");
  let imgElement = document.createElement("img");
  let infoContainer = document.createElement("div");
  let titleElement = document.createElement("h2");
  let valueElement = document.createElement("span");

  elementContainer.setAttribute("href", link);
  elementContainer.setAttribute("class", "productsElement");
  elementContainer.setAttribute(
    "id",
    "productsElement" + countProductsElements
  );
  infoContainer.setAttribute(
    "class",
    "info-productsElement-container flex-row-column-between-center"
  );
  imgElement.setAttribute("src", img);
  imgElement.setAttribute("alt", title);
  titleElement.innerHTML = title;
  valueElement.innerHTML = value;

  infoContainer.appendChild(titleElement);
  infoContainer.appendChild(valueElement);
  elementContainer.appendChild(imgElement);
  elementContainer.appendChild(infoContainer);

  productContainer.appendChild(elementContainer);
  idsProductsElements = [
    ...idsProductsElements,
    "productsElement" + countProductsElements,
  ];
}

/* ANIMATION TYPING */
let indexName = 1;
setInterval(function () {
  if ($("#text").text() !== name && indexName < name.length) {
    nameAtual += name[indexName];
    $("#text").text(nameAtual);
    indexName++;
  } else {
    nameAtual = "H";
    $("#text").text(nameAtual);
    indexName = 1;
  }
}, 400);

/* ANIMATION PRODUCTS ELEMENT */
$(window).scroll(function () {
  for (let item of idsProductsElements) {
    $("#" + item).css({ opacity: 0, transition: "2s" });
    if (
      $(window).scrollTop() >
      $("#" + item).offset().top - $(window).height() / 1.2
    ) {
      $("#" + item).css({
        "animation-name": "productsElementAnimationScroll",
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

/* GET PRODUCTS ELEMENTS */
fetch("../data/products.json")
  .then((response) => response.json())
  .then((res) => {
    dataProducts = res;
    dataProducts.map((element) => {
      createProductElement(
        element["title"],
        element["link"],
        element["img"],
        element["value"]
      );
    });
  });

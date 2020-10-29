let dataProducts = [];

/* RESPONSIVE MENU */
let open = false;

$(".nav-button").click(function () {
  open = !open;
  if (open) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "../../images/icon-close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "../../images/icon-menu.png");
  }
});

/* CREATE ELEMENT PRODUCT */
function createProductElement(title, link, img, value, type) {
  let elementContainer = $(`<a href="${link}" class="productsElement"></a>`);
  let imgElement = $(`<img src="${img}" alt="${title}" />`);
  let infoContainer = $(
    `<div class="info-productsElement-container flex-row-column-between-center"></div>`
  );
  let titleElement = $(`<h2>${title}</h2>`);
  let valueElement = $(`<span>${value}</span>`);
  let typeElement = $(`<span>${type}</span>`);

  infoContainer.append(typeElement, valueElement);
  elementContainer.append(imgElement, infoContainer, titleElement);

  $(".products-container").append(elementContainer);
}

/* GET PRODUCTS ELEMENTS */
fetch("../../data/products.json")
  .then((response) => response.json())
  .then((res) => {
    dataProducts = res;
    dataProducts.map((element) => {
      createProductElement(
        element["title"],
        element["link"],
        element["img"],
        element["value"],
        element["type"]
      );
    });
  });

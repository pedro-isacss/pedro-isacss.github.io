let dataBlog = [];

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
function createBlogContainer(title, link, img) {
  let elementContainer = $(`<a href="${link}" class="blogElement"></a>`);
  let imgElement = $(`<img src="${img}" alt="${title}" />`);
  let infoContainer = $(`<div class="info-blogElement-container"></div>`);
  let titleElement = $(`<h2>${title}</h2>`);

  $(infoContainer).append(titleElement);
  $(elementContainer).append(imgElement, infoContainer);
  $(".blog-container").append(elementContainer);
}

/* GET CHALLENGE ELEMENTS */
fetch("../../data/posts.json")
  .then((response) => response.json())
  .then((res) => {
    dataBlog = res;
    dataBlog.map((element) => {
      createBlogContainer(element["title"], element["link"], element["img"]);
    });
  });

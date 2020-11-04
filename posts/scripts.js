/* RESPONSIVE MENU */
let openMenu = false;
$(".nav-button").click(function () {
  openMenu = !openMenu;
  if (openMenu) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "../images/icon-close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "../images/icon-menu.png");
  }
});

//CREATE MENU
let menu1 = $(`<a href="../index.html" class="nav-link">Home</a>`);
let menu2 = $(
  `<a href="https://app.jobzz.com.br/service/preview/efb2f900" class="nav-link">Services</a>`
);
let menu3 = $(
  `<a href="https://front-ui.alumy.com/" class="nav-link">FrontUI</a>`
);
let menu4 = $(`<a href="../pages/blog/index.html" class="nav-link">Blog</a>`);

$(".link-container").append(menu1, menu2, menu3, menu4);

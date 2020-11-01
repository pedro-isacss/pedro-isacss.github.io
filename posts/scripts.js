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

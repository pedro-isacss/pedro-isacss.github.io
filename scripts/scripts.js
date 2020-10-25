/* NAV RESPONSIVE */
let open = false;

$(".nav-button").click(function () {
  open = !open;
  if (open) {
    $(".nav-link").css("display", "block");
    $(".nav-button-img").attr("src", "./icons/close.png");
  } else {
    $(".nav-link").css("display", "none");
    $(".nav-button-img").attr("src", "./icons/menu.png");
  }
});

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

//MENU
let menu1 = $(`<a href="../index.html" class="nav-link">Home</a>`);
let menu2 = $(
  `<a href="https://www.fiverr.com/sspedroisac" class="nav-link">Serviços</a>`
);
let menu3 = $(
  `<a href="https://comunidadepd.club.hotmart.com" class="nav-link">Comunidade PD</a>`
);
let menu4 = $(`<a href="../pages/blog/index.html" class="nav-link">Blog</a>`);

$(".link-container").append(menu1, menu2, menu3, menu4);

//FOOTER
let link1 = $(
  `<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ss.pedroisac@email.com"><img src="../images/icon-mail.png" alt="email" /></a>`
);
let link2 = $(
  `<a href="https://instagram.com/ss.pedroisac/"><img src="../images/icon-instagram.png" alt="instagram" /></a>`
);
let link3 = $(
  `<a href="https://github.com/pedro-isacss"><img src="../images/icon-github.png" alt="github" /></a>`
);
let link4 = $(
  `<a href="https://wa.me/message/L3M4YGWO74UCK1"><img src="../images/icon-whatsapp.png" alt="whatsapp" /></a>`
);

$(".footer").append(link1, link2, link3, link4);

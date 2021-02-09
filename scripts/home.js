// ===== Variables =====
let isMenuOpen = false;

// ===== Elements =====
const menuBtn = document.querySelector("button#menu-btn");

// ==== Open/Close menu event =====
menuBtn.addEventListener("click", () => {
  const imgMenuBtn = document.querySelector("img#menu-img-btn");
  const menu = document.querySelector("nav#nav-menu");
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    imgMenuBtn.src = "./images/menu-close.svg";
    menu.style.display = "flex";
  } else {
    imgMenuBtn.src = "./images/menu-open.svg";
    menu.style.display = "none";
  }
});

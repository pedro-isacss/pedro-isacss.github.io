// ===== Variables =====
let isMenuOpen = false;
let isMusicPlaying = false;
let currentMusic = 1;

// ===== Elements =====
const menuBtn = document.querySelector("button#menu-btn");
const playPauseMusic = document.querySelector("button#play-pause-music");
const skipMusic = document.querySelector("button#skip-music");
const musics = document.querySelector("audio#musics");

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

// ===== Play/Pause music =====
playPauseMusic.addEventListener("click", () => {
  const playPauseMusicImg = document.querySelector("img#play-pause-music-icon");
  isMusicPlaying = !isMusicPlaying;
  if (isMusicPlaying) {
    musics.play();
    playPauseMusicImg.src = "./images/pause.svg";
  } else {
    musics.pause();
    playPauseMusicImg.src = "./images/play.svg";
  }
});

// ===== Skip music =====
skipMusic.addEventListener("click", () => {
  if (currentMusic === 3) {
    currentMusic = 1;
  } else {
    currentMusic++;
  }
  musics.src = `./music/music0${currentMusic}.mp3`;
  musics.play();
});

// ===== Loading projects =====
fetch("../data/projects.json")
  .then((response) => response.json())
  .then((res) => {
    const projects = document.querySelector("section#projects-container div");
    [...res].map((project) => {
      const container = document.createElement("a");
      const img = document.createElement("img");
      container.setAttribute("href", project.link);
      img.setAttribute("src", project.img);
      container.appendChild(img);
      projects.appendChild(container);
    });
  });

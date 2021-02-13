// ===== Variables =====
let isMusicPlaying = false;
let currentMusic = 1;

// ===== Elements =====
const playPauseMusic = document.querySelector("button#play-pause-music");
const skipMusic = document.querySelector("button#skip-music");
const musics = document.querySelector("audio#musics");

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
      container.setAttribute("target", "__blank");
      img.setAttribute("src", project.img);
      container.appendChild(img);
      projects.appendChild(container);
    });
  });

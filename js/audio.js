const player = document.querySelector("#audio button");
const audio = document.querySelector("#audio audio");
audio.volume = .3;
let step = 0;
player.addEventListener("click", () => {
  if (step++ === 0) {
    player.firstElementChild.setAttribute("src", "./icons/mute.svg");
    audio.pause();
  } else {
    player.firstElementChild.setAttribute("src", "./icons/volume.svg");
    audio.play();
    step = 0;
  }
});

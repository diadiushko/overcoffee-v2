const player = document.querySelector("#audio button");
const audio = document.querySelector("#audio audio");

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

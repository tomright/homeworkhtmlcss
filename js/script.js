"use strict";

const divContainerJS = document.querySelector(".containerJS");
const redDiv = document.querySelector(".redMoveObj");
const divRedMoveObj = document.createElement("div");
// divRedMoveObj.classList.add("redMoveObj");
// divContainerJS.append(divRedMoveObj);
// divRedMoveObj.addEventListener("click", playSoundUmaeva);

function createOject() {
  const count = 26;
  const randomNum = getRandomFromInterval(0, count);

  divContainerJS.innerHTML = "";
  for (let i = 0; i < count; i++) {
    if (i == randomNum) {
      const moveDiv = document.createElement("div");
      moveDiv.classList.add("redMoveObj");
      moveDiv.addEventListener("click", playSoundUmaeva);
      moveDiv.addEventListener("click", createOject);
      divContainerJS.append(moveDiv);
    } else {
      const moveDiv = document.createElement("div");
      moveDiv.classList.add("moveObject");
      moveDiv.addEventListener("click", playSoundNani);
      moveDiv.addEventListener("click", createOject);
      divContainerJS.append(moveDiv);
    }
  }
}
createOject();

function playSoundNani() {
  let audio = new Audio();
  audio.src = "/audio/nani.mp3";
  console.log(audio);
  audio.autoplay = true;
}
function playSoundUmaeva() {
  let audio = new Audio();
  audio.src = "/audio/umaev.mp3";
  console.log(audio);
  audio.autoplay = true;
}
function getRandomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

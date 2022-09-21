"use strict";

const div = document.querySelector(".container");
const redDiv = document.querySelector('.redMoveObj')

const count = 26;
for (let i = 0; i < count; i++) {
  const moveDiv = document.createElement("div");
  moveDiv.classList.add("moveObject");
  div.append(moveDiv);
}
const allMoveDiv = document.querySelectorAll('.moveObject');

function playSoundNani() {
    let audio = new Audio();
    audio.src = '/audio/nani.mp3';
    console.log(audio);
    audio.autoplay = true;
}
function playSoundUmaeva() {
let audio = new Audio();
    audio.src = '/audio/umaev.mp3';
    console.log(audio);
    audio.autoplay = true;
}
allMoveDiv.forEach(val => {
    val.addEventListener('click', playSoundNani);
})
redDiv.addEventListener('click', playSoundUmaeva);
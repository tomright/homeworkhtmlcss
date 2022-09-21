"use strict";

const header = document.querySelector("header");
const nav = document.createElement("nav");
const divNavbar = document.createElement("div");

divNavbar.classList.add("navbar");

const navNameArray = [
  ["Домой", "/index.html"],
  ["Что тут есть", "whatisthis.html"],
  ["О нас", "/aboutus.html"],
  ["О вас", "/aboutyou.html"],
  ["Не нажимать", "/dontpush.html"],
];
navNameArray.forEach((value) => {
  const aLink = document.createElement("a");
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("linkdiv");
  linkDiv.textContent = value[0];
  aLink.append(linkDiv);
  aLink.href = value[1];
  nav.append(aLink);
  console.log(aLink);
});
divNavbar.append(nav);
header.append(divNavbar);

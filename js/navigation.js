"use strict";

//Инициация CSS bootstrap, запарился писать каждый раз
let mainHead = document.querySelector("head");
const headerLink = ["/css/bootstrap.min.css", "/css/style.css"];
headerLink.forEach((val) => {
  const linkCss = document.createElement("link");
  linkCss.setAttribute("rel", "stylesheet");
  linkCss.href = val;
  mainHead.append(linkCss);
});

//Добавляю js файлы bootstrap'a
// const body = document.querySelector('body');
// const arrJS = ["/js/bootstrap.bundle.min.js"];
// arrJS.forEach((val) => {
//   const scripJS = document.createElement('script');
//   scripJS.setAttribute('src', val);
//   body.append(scripJS);
// });



const header = document.querySelector("header");
const nav = document.createElement("nav");
const divContainerXS = document.createElement("div"),
  buttonNavbarToggler = document.createElement("button"),
  spanNavBarTogglerIcon = document.createElement("span"),
  divCollapeNavBarCollape = document.createElement("div"),
  divNavBarNav = document.createElement("div");

const divTest = document.querySelector(".test");

const navArray = ["navbar", "navbar-expand-lg", "bg-light"];
navArray.forEach((val) => {
  nav.classList.add(val);
});
divContainerXS.classList.add("container-xs");
buttonNavbarToggler.classList.add("navbar-toggler");
buttonNavbarToggler.setAttribute("data-bs-toggle", "collapset");
buttonNavbarToggler.setAttribute('type', 'button');
buttonNavbarToggler.setAttribute("data-bs-target", "#navbarNavAltMarkup");
buttonNavbarToggler.setAttribute("aria-controls", "navbarNavAltMarkup");
buttonNavbarToggler.setAttribute("aria-expanded", "false");
buttonNavbarToggler.setAttribute("aria-label", "Toggle navigation");

spanNavBarTogglerIcon.classList.add("navbar-toggler-icon");
divCollapeNavBarCollape.classList.add("collapse");
divCollapeNavBarCollape.classList.add("navbar-collapse");
divCollapeNavBarCollape.setAttribute("id", "navbarNavAltMarkup");
// console.log(divCollapeNavBarCollape);

divNavBarNav.classList.add("navbar-nav");

const navNameArray = [
  ["Домой", "/index.html"],
  ["Что тут есть", "whatisthis.html"],
  ["О нас", "/aboutus.html"],
  ["О вас", "/aboutyou.html"],
  ["Не нажимать", "/dontpush.html"],
];

navNameArray.forEach((val) => {
  const aLink = document.createElement("a");
  aLink.classList.add("nav-link");
  aLink.href = val[1];
  aLink.textContent = val[0];
  divNavBarNav.append(aLink);
});
divCollapeNavBarCollape.append(divNavBarNav);
buttonNavbarToggler.append(spanNavBarTogglerIcon);
divContainerXS.append(buttonNavbarToggler);
divContainerXS.append(divCollapeNavBarCollape);
nav.append(divContainerXS);
header.append(nav);

// navNameArray.forEach((value) => {
//   const aLink = document.createElement("a");
//   const linkDiv = document.createElement("div");
//   linkDiv.classList.add("linkdiv");
//   linkDiv.textContent = value[0];
//   aLink.append(linkDiv);
//   aLink.href = value[1];
//   nav.append(aLink);
//   console.log(aLink);
// });
// divNavbar.append(nav);
// header.append(divNavbar);

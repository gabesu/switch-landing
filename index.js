// import Glide from "@glidejs/glide";
// new Glide(".glide").mount();

let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");
let logoAlt = document.querySelector(".logo-alt");
const mobileNavs = document.querySelector(".mobile-nav");
const cross_icon = document.querySelector("#cross-icon");
const burger_icon = document.querySelector("#burger-icon");

let isMobileViewOpened = false;

// document.addEventListener("scroll", () => {
//   if (document.documentElement.scrollTop > 0) {
//     nav.classList.add("scrolled");
//     logo.classList.remove("show");
//     logoAlt.classList.add("show");
//   } else { 
//     nav.classList.remove("scrolled");
//     logoAlt.classList.remove("show");
//     logo.classList.add("show");
//   }
// });

const mobile_nav = document.getElementById('mobile-nav-switch');
mobile_nav.addEventListener("click", () => {
  isMobileViewOpened = !isMobileViewOpened

  if (isMobileViewOpened) {
    mobileNavs.classList.add("show-mobile-nav");
    burger_icon.classList.remove("show-mobile-nav");
    cross_icon.classList.add("show-mobile-nav");
    return;
  }

  burger_icon.classList.add("show-mobile-nav");
  cross_icon.classList.remove("show-mobile-nav");
  mobileNavs.classList.remove("show-mobile-nav");
});

const allLinks = document.querySelectorAll('.mobile-nav--actions li');
[...allLinks].forEach((link) => {
  link.addEventListener('click', () => {
    isMobileViewOpened = false;

    burger_icon.classList.add("show-mobile-nav");
    cross_icon.classList.remove("show-mobile-nav");
    mobileNavs.classList.remove("show-mobile-nav");
  });
});
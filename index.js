import Glide from "@glidejs/glide";
new Glide(".glide").mount();

let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");
let logoAlt = document.querySelector(".logo-alt");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    console.log("Scrolled");
    nav.classList.add("scrolled");
    logo.classList.remove("show");
    logoAlt.classList.add("show");
  } else {
    console.log("home");
    nav.classList.remove("scrolled");
    logoAlt.classList.remove("show");
    logo.classList.add("show");
  }
});

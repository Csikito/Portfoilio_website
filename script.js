const navBarScroll = document.querySelector(".js-nav");
const navbar = document.querySelector(".js-nav__bar");
const btnClose = document.querySelector(".js-btn__close");
const btnMenu = document.querySelector(".js-btn__menu");
const formBtn = document.querySelector(".js-form__btn");

/****************** Nav Bar List**********************/
const navList = navbar.children[0].children;
const arryaNavList = [...navList];

btnMenu.addEventListener("click", () => {
  navbar.classList.add("show__menu");
});
btnClose.addEventListener("click", () => {
  navbar.classList.remove("show__menu");
});

arryaNavList.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.remove("show__menu");
  });
});

window.addEventListener("scroll", () => {
  window.scrollY >= 100
    ? navBarScroll.classList.add("nav__active")
    : navBarScroll.classList.remove("nav__active");
});

//Scroll Reveal Animation

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".title__name, .title, .xp__content, .footer__social");
sr.reveal(".about__img", { origin: "left" });
sr.reveal(".about__description", { origin: "right", delay: 800 });
sr.reveal(".project", {
  origin: "left",
  scale: 0.9,
});
sr.reveal(".contact-img", {
  origin: "left",
  scale: 0.85,
  rotate: {
    x: 50,
    z: -30,
  },
});

sr.reveal("form", { scale: 0.8 });

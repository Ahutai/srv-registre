const buttons = document.querySelectorAll(".btnone");
const buttonss = document.querySelectorAll(".btntwo");
const slides = document.querySelectorAll(".slide");
const slidess = document.querySelectorAll(".slidee");
const modalblack = document.querySelector(".modalblack");
const modalblackk = document.querySelector(".modalblackk");
const tortue = document.querySelector("#tortue");
const baleine = document.querySelector("#baleine");
const carrousel = document.querySelector(".carrousel");
const buttoncar = document.querySelector(".buttoncar");
const closedd = document.querySelector(".close");
const closeddd = document.querySelector(".closee");

buttonss.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".activedd");

    newIndex = calcNextSlide + [...slidess].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slidess].length - 1;
    if (newIndex >= [...slidess].length) newIndex = 0;
    slidess[newIndex].classList.add("activedd");

    slideActive.classList.remove("activedd");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".actived");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("actived");

    slideActive.classList.remove("actived");
  });
});

tortue.addEventListener("click", (e) => {
  modalblack.classList.add("active");
});

baleine.addEventListener("click", (e) => {
  modalblackk.classList.add("active");
});

closeddd.addEventListener("click", (e) => {
  modalblackk.classList.remove("active");
});

closedd.addEventListener("click", (e) => {
  modalblack.classList.remove("active");
});

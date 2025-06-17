const buttons = document.querySelectorAll(".btnone");
const buttonss = document.querySelectorAll(".btntwo");
const buttonsss = document.querySelectorAll(".btnthree");
const buttonssss = document.querySelectorAll(".btnfor");
const slides = document.querySelectorAll(".slide");
const slidess = document.querySelectorAll(".slidee");
const slidesss = document.querySelectorAll(".slideee");
const slidessss = document.querySelectorAll(".slideeee");
const modalblack = document.querySelector(".modalblack");
const modalblackk = document.querySelector(".modalblackk");
const modalblackkk = document.querySelector(".modalblackkk");
const modalblackkkk = document.querySelector(".modalblackkkk");
const tortue = document.querySelector("#tortue");
const raie = document.querySelector("#raie");
const baleine = document.querySelector("#baleine");
const tiki = document.querySelector("#tiki");
const carrousel = document.querySelector(".carrousel");
const buttoncar = document.querySelector(".buttoncar");
const closedd = document.querySelector(".close");
const closeddd = document.querySelector(".closee");
const closedddd = document.querySelector(".closeee");
const closeddddd = document.querySelector(".closeeee");

buttonssss.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "nextttt" ? 1 : -1;
    const slideActive = document.querySelector(".activedddd");

    newIndex = calcNextSlide + [...slidessss].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slidessss].length - 1;
    if (newIndex >= [...slidessss].length) newIndex = 0;
    slidessss[newIndex].classList.add("activedddd");

    slideActive.classList.remove("activedddd");
  });
});

buttonsss.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "nexttt" ? 1 : -1;
    const slideActive = document.querySelector(".activeddd");

    newIndex = calcNextSlide + [...slidesss].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slidesss].length - 1;
    if (newIndex >= [...slidesss].length) newIndex = 0;
    slidesss[newIndex].classList.add("activeddd");

    slideActive.classList.remove("activeddd");
  });
});

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
  modalblackkkk.classList.add("active");
});

raie.addEventListener("click", (e) => {
  modalblackkk.classList.add("active");
});

tiki.addEventListener("click", (e) => {
  modalblackk.classList.add("active");
});

closeddd.addEventListener("click", (e) => {
  modalblackk.classList.remove("active");
});

closedddd.addEventListener("click", (e) => {
  modalblackkk.classList.remove("active");
});

closeddddd.addEventListener("click", (e) => {
  modalblackkkk.classList.remove("active");
});

closedd.addEventListener("click", (e) => {
  modalblack.classList.remove("active");
});

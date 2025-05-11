const dive = document.querySelectorAll(".divlist5");
const sfiledive = document.querySelectorAll(".divlist5s");
const recharge = document.querySelector(".loader");
const modalll = document.querySelector(".modalll");

const divered = document.querySelectorAll(".divlistuser");

const loaded = document.querySelector(".reload");
const loadeder = document.querySelector(".reloade");

const diver = document.querySelector(".img");
const loadedd = document.querySelector(".reloader");

dive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loaded.classList.add("active");
    setTimeout(() => {
      loaded.classList.remove("active");
    }, 100);
  });
});

sfiledive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    // recharge.classList.add("active");
    modalll.classList.add("active");
    setTimeout(() => {
      // recharge.classList.remove("active");
      modalll.classList.remove("active");
    }, 100);
  });
});

divered.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loadedd.classList.add("active");
    setTimeout(() => {
      loadedd.classList.remove("active");
    }, 100);
  });
});

diver.addEventListener("click", async ($event) => {
  loadedd.classList.add("active");
  loadeder.classList.add("active");
  setTimeout(() => {
    loadedd.classList.remove("active");
    loadeder.classList.remove("active");
  }, 100);
});

const diverr = document.querySelector(".partage");

diverr.addEventListener("click", async ($event) => {
  loadedd.classList.add("active");
  loadeder.classList.add("active");
  setTimeout(() => {
    loadedd.classList.remove("active");
    loadeder.classList.remove("active");
  }, 100);
});

const pointe = document.querySelector(".modal");

pointe.addEventListener("click", (e) => {
  window.history.back();
  // console.log("click");
});

const pointeee = document.querySelector(".divdow");

pointeee.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  // console.log("click");
});

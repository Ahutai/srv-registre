const dive = document.querySelectorAll(".divlist5");
const loaded = document.querySelector(".reload");

dive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loaded.classList.add("active");
  });
});

const pointe = document.querySelector(".modal");

pointe.addEventListener("click", (e) => {
  window.history.back();
  // console.log("click");
});

const pointee = document.querySelector(".embed");

pointee.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  // console.log("click");
});

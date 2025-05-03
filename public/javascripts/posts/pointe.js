const dive = document.querySelectorAll(".divlist5");

dive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    e.classList.add("activ");
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

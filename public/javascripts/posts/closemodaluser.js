const modaled = document.querySelector(".modaluser");

const modalclose = document.querySelector(".container-fluid");

const username = document.querySelector(".username");

username.addEventListener("click", (e) => {
  modaled.classList.add("active");
});

modalclose.addEventListener("click", (e) => {
  modaled.classList.remove("active");
});

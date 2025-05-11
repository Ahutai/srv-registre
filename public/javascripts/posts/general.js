const diver = document.querySelector(".img");

diver.addEventListener("click", ($event) => {
  loadedd.classList.add("active");
  loadeder.classList.add("active");
  setTimeout(() => {
    loadedd.classList.remove("active");
    loadeder.classList.remove("active");
  }, 100);
});

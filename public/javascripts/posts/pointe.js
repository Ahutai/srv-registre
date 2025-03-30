const dive = document.querySelectorAll(".divlist5");

dive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    e.classList.add("active");
  });
});

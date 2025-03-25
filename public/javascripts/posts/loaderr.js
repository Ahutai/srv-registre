window.addEventListener("DOMContentLoaded", () => {
  loaDer();
});

function loaDer() {
  const create = document.querySelector(".inputmform");
  const loaderr = document.querySelector(".loaderr");

  create.addEventListener("click", () => {
    loaderr.classList.add("active");
  });
}

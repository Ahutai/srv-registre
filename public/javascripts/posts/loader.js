window.addEventListener("DOMContentLoaded", () => {
  loaDerrs();
});

function loaDerrs() {
  const create = document.querySelector(".inputmform");
  const loaderr = document.querySelector(".loaderrss");

  create.addEventListener("click", () => {
    loaderr.classList.add("active");
  });
}

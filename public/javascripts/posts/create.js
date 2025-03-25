window.addEventListener("DOMContentLoaded", () => {
  loaDerr();
});

function loaDerr() {
  const createe = document.querySelector(".a1");
  const loaderrr = document.querySelector(".loaderrsss");

  createe.addEventListener("click", () => {
    loaderrr.classList.add("active");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  creaTed();
});

// function loader() {
//   const bdelete = document.querySelectorAll(".buttonmlist");
//   const loader = document.querySelector(".loader");

//   bdelete.addEventListener("click", () => {
//     loader.classList.add("active");
//   });
// }

function creaTed() {
  const createe = document.querySelector(".inputmformuser");
  const loaderrr = document.querySelector(".loaderrrs");

  createe.addEventListener("click", () => {
    loaderrr.classList.add("active");
  });
}

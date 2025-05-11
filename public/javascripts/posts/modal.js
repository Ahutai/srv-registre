// const modals = document.querySelector(".showmodal");
// const diven = document.querySelector(".container-fluid");

// diven.addEventListener("click", ($event) => {
//   $event.preventDefault();
//   let x = $event.offsetX,
//     y = $event.offsetY;
//   (winWidth = diven.innerWidth),
//     (winHeight = diven.innerHeight),
//     (cmWidth = modals.offsetWidth),
//     (cmHeight = modals.offsetHeight);

//   x = x > winWidth - cmWidth ? winWindth - cmWidth : x;
//   y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

//   modals.style.left = `${x}px`;
//   modals.style.top = `${y}px`;
//   modals.style.visibility = "visible";
// });

const openButton = document.querySelectorAll("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.forEach((e) => {
  e.addEventListener("click", (ev) => {
    modal.show();
  });
});

closeButton.addEventListener("click", () => {
  modal.close();
});

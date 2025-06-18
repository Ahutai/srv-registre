const modalinfo = document.querySelector(".modalinfo");

const popupinfo = document.querySelector("#info");

const closer = document.querySelector(".closer");

popupinfo.addEventListener("click", (e) => {
  modalinfo.classList.add("active");
});

closer.addEventListener("click", (e) => {
  modalinfo.classList.remove("active");
});

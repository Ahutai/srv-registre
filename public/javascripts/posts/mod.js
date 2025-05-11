const pointee = document.querySelector(".embed");

pointee.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  // console.log("click");
});

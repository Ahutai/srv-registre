const che = document.querySelector(".chevron-left");
const chee = document.querySelector(".chevron-right");

che.addEventListener("click", (e) => {
  window.history.back();
});

chee.addEventListener("click", (e) => {
  window.history.forward();
});

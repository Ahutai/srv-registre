const che = document.querySelector(".cotei");
const chee = document.querySelector(".coteii");

che.addEventListener("click", (e) => {
  window.history.back();
});

chee.addEventListener("click", (e) => {
  window.history.forward();
});

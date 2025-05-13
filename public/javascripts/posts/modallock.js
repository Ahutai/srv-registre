const modaledd = document.querySelector(".modallocker");
const modalcloses = document.querySelector(".container-fluid");
const locker = document.querySelector(".locker");
const divlocki = document.querySelector(".divlocki");
const divlockii = document.querySelector(".divlockii");
const loadlock = document.querySelector(".loadlock");

divlocki.addEventListener("click", (e) => {
  loadlock.classList.add("active");
});

divlockii.addEventListener("click", (e) => {
  loadlock.classList.add("active");
});

locker.addEventListener("click", (e) => {
  modaledd.classList.add("active");
});

modalcloses.addEventListener("click", (e) => {
  modaledd.classList.remove("active");
});

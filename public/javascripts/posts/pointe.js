const dive = document.querySelectorAll(".divlist5");

const dives = document.querySelectorAll(".inputaddddd");

const divess = document.querySelectorAll(".inputaddd");

const divesss = document.querySelectorAll(".inputadd");

const loadernivi = document.querySelector(".loadernivi");

const sfiledive = document.querySelectorAll(".divlist5s");

const recharge = document.querySelector(".loader");

const modalll = document.querySelector(".modalll");

const divered = document.querySelectorAll(".divlistuser");

const loaded = document.querySelector(".reload");

const loadeder = document.querySelector(".reloade");

const loadedd = document.querySelector(".reloader");

// const diverr = document.querySelector(".partagea");

// diverr.addEventListener("click", ($event) => {
//   loadedd.classList.add("active");
//   loadeder.classList.add("active");
//   setTimeout(() => {
//     loadedd.classList.remove("active");
//     loadeder.classList.remove("active");
//   }, 100);
// });

dives.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loaded.classList.add("active");
    setTimeout(() => {
      loaded.classList.remove("active");
    }, 10000);
  });
});

divesss.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loadernivi.classList.add("active");
    setTimeout(() => {
      loadernivi.classList.remove("active");
    }, 10000);
  });
});

divess.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loaded.classList.add("active");
    setTimeout(() => {
      loaded.classList.remove("active");
    }, 10000);
  });
});

dive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loaded.classList.add("active");
    setTimeout(() => {
      loaded.classList.remove("active");
    }, 10000);
  });
});

sfiledive.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    // recharge.classList.add("active");
    modalll.classList.add("active");
    setTimeout(() => {
      // recharge.classList.remove("active");
      modalll.classList.remove("active");
    }, 10000);
  });
});

divered.forEach((e) => {
  e.addEventListener("click", async ($event) => {
    loadedd.classList.add("active");
    setTimeout(() => {
      loadedd.classList.remove("active");
    }, 10000);
  });
});

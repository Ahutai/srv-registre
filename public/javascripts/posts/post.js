window.addEventListener("DOMContentLoaded", () => {
  // loader();
  bindPostt();
  bindPost();
  bindPosttt();
  // bindPosttt();
});

function bindPosttt() {
  const elementsss = document.querySelectorAll(".buttonmod");
  const loaderr = document.querySelector(".loader");
  const postContainerrr = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  elementsss.forEach((e) => {
    e.addEventListener("click", async ($event) => {
      loaderr.classList.add("active");
      $event.target.classList.add("active");
      const postIdd = $event.target.getAttribute("posted");
      const postIddd = $event.target.getAttribute("postt");

      axios
        .get("/posts/moded/" + postIdd)
        .then(function (response) {
          postContainerrr.innerHTML = response.data;
          loaderr.classList.remove("active");
          bindPosttt();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}

function bindPostt() {
  const elementss = document.querySelectorAll(".buttonmlistt");
  const loaderr = document.querySelector(".loader");
  const postContainerr = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  elementss.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loaderr.classList.add("active");
      $event.target.classList.add("active");
      const postId = $event.target.getAttribute("postid");
      const postIdd = $event.target.getAttribute("postidd");

      axios
        .delete("/posts/del/" + postId)
        .then(function (response) {
          postContainerr.innerHTML = response.data;
          loaderr.classList.remove("active");
          bindPostt();
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.get("/posts/findedd/" + postIdd).then((response) => {
        postContainerr.innerHTML = response.data;
        bindPostt();
      });
    });
  });
}

function bindPost() {
  const elements = document.querySelectorAll(".buttonmlist");
  const loader = document.querySelector(".loader");
  const postContainer = document.querySelector("#postlistcontainer");

  const listan = document.querySelectorAll(".divlist3");

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loader.classList.add("active");
      $event.target.classList.add("active");
      const postId = $event.target.getAttribute("postid");

      axios
        .delete("/posts/" + postId)
        .then(function (response) {
          postContainer.innerHTML = response.data;
          loader.classList.remove("active");
          bindPost();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  // loader();
  bindPostt();
  bindPost();
  bindPosttt();
  deletesfile();
  deletesfiles();
  delfoldernivii();
  delfilesniviii();
  // bindPosttt();
});

function bindPosttt() {
  const elementsss = document.querySelectorAll(".buttonmod");
  const loaderr = document.querySelector(".loadernivi");
  const postContainerrr = document.querySelector("#postlistcontainerr");
  // const inputname = document.querySelectorAll(".inputusername");

  const listan = document.querySelectorAll(".divlist3");

  elementsss.forEach((e) => {
    e.addEventListener("click", async ($event) => {
      loaderr.classList.add("active");
      $event.target.classList.add("active");
      const postIdd = $event.target.getAttribute("posted");
      // const postname = $event.target.getAttribute("postt");

      axios
        .get("/posts/moded/" + postIdd)
        .then(function (response) {
          postContainerrr.innerHTML = response.data;
          // inputname.value = postname;
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
  const loaderr = document.querySelector(".loadernivi");
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
  const loader = document.querySelector(".loadernivi");
  const postContainer = document.querySelector("#postlistcontainer");
  const postContainerr = document.querySelector("#postlistcontainerr");

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
          // postContainerr.innerHTML = response.data;
          console.log(response);
          loader.classList.remove("active");
          bindPost();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}

function deletesfile() {
  const sfile = document.querySelectorAll(".deletesfile");
  const loading = document.querySelector(".loadernivi");
  const postC = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  sfile.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loading.classList.add("active");
      $event.target.classList.add("active");
      const postSfile = $event.target.getAttribute("postid");
      const postsfile = $event.target.getAttribute("postidd");

      axios
        .delete("/posts/deletesfile/" + postSfile)
        .then(function (response) {
          postC.innerHTML = response.data;
          loading.classList.remove("active");
          deletesfile();
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.get("/posts/sfiledel/" + postsfile).then((response) => {
        postC.innerHTML = response.data;
        deletesfile();
      });
    });
  });
}

function deletesfiles() {
  const ssfile = document.querySelectorAll(".deletesfiles");
  const loadingg = document.querySelector(".loadernivi");
  const postCc = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  ssfile.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loadingg.classList.add("active");
      $event.target.classList.add("active");
      const postSfile = $event.target.getAttribute("postid");
      const postsfile = $event.target.getAttribute("postidd");

      axios
        .delete("/posts/deletesfiles/" + postSfile)
        .then(function (response) {
          postCc.innerHTML = response.data;
          loadingg.classList.remove("active");
          deletesfiles();
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.get("/posts/sfiledell/" + postsfile).then((response) => {
        postCc.innerHTML = response.data;
        deletesfiles();
      });
    });
  });
}

function delfoldernivii() {
  const elementss = document.querySelectorAll(".delfoldernivii");
  const loaderr = document.querySelector(".loadernivi");
  const postContainerr = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  elementss.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loaderr.classList.add("active");
      $event.target.classList.add("active");
      const postId = $event.target.getAttribute("postid");
      const postIdd = $event.target.getAttribute("postidd");

      axios
        .delete("/posts/delfoldernivii/" + postId)
        .then(function (response) {
          postContainerr.innerHTML = response.data;
          loaderr.classList.remove("active");
          delfoldernivii();
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.get("/posts/delfoldernivii/" + postIdd).then((response) => {
        postContainerr.innerHTML = response.data;
        delfoldernivii();
      });
    });
  });
}

function delfilesniviii() {
  const elementss = document.querySelectorAll(".deletesfiless");
  const loaderr = document.querySelector(".loadernivi");
  const postContainerr = document.querySelector("#postlistcontainerr");

  const listan = document.querySelectorAll(".divlist3");

  elementss.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loaderr.classList.add("active");
      $event.target.classList.add("active");
      const postId = $event.target.getAttribute("postid");
      const postIdd = $event.target.getAttribute("postidd");

      axios
        .delete("/posts/delfilesniviii/" + postId)
        .then(function (response) {
          postContainerr.innerHTML = response.data;
          loaderr.classList.remove("active");
          delfilesniviii();
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.get("/posts/getfilesniviii/" + postIdd).then((response) => {
        postContainerr.innerHTML = response.data;
        delfilesniviii();
      });
    });
  });
}

// function modalfilefolder() {
//   const elementsss = document.querySelectorAll(".modalfilefolder");
//   const loaderr = document.querySelector(".loader");
//   const postContainerrr = document.querySelector("#postlistcontainerr");
//   const modal = document.querySelector(".showmodal");
//   // const inputname = document.querySelectorAll(".inputusername");

//   const listan = document.querySelectorAll(".divlist3");

//   elementsss.forEach((e) => {
//     e.addEventListener("click", async ($event) => {
//       // loaderr.classList.add("active");
//       // const postId = $event.target.getAttribute("postid");
//       // const author = $event.target.getAttribute("postidd");
//       // const postname = $event.target.getAttribute("postt");
//       modal.classList.add("active");

//       // axios
//       //   .get("/posts/showmodalfilefolderpostlist/" + postId)
//       //   .then(function (response) {
//       //     postContainerrr.innerHTML = response.data;
//       //     // inputname.value = postname;
//       //     loaderr.classList.remove("active");
//       //     modalfilefolder();
//       //   })
//       //   .catch(function (err) {
//       //     console.log(err);
//       //   });
//     });
//   });
// }

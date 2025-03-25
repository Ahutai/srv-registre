window.addEventListener("DOMContentLoaded", () => {
  // loader();
  bindPost();
});

// function loader() {
//   const bdelete = document.querySelectorAll(".buttonmlist");
//   const loader = document.querySelector(".loader");

//   bdelete.addEventListener("click", () => {
//     loader.classList.add("active");
//   });
// }

function bindPost() {
  const elements = document.querySelectorAll(".buttonmlist");
  const loader = document.querySelector(".loader");
  const postContainer = document.querySelector("#postlistcontainer");
  const listan = document.querySelectorAll(".divlist3");

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      loader.classList.add("active");
      $event.target.classList.add("active");
      console.log($event);
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

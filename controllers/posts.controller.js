const {
  getPosts,
  getPost,
  createPost,
  getPostt,
  deletePost,
  updatePost,
  addToFolder,
} = require("../queries/posts.queries");

exports.postList = async (req, res, next) => {
  try {
    const postes = await getPosts();
    res.render("posts/post", {
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.postNew = (req, res, next) => {
  res.render("posts/post-form", { post: {} });
};
// exports.postNeww = (req, res, next) => {
//   res.render("posts/post-formmm", { post: {} });
// };
exports.postCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createPost({ ...body, author: req.user._id });
    setTimeout(add, 2000);
    function add() {
      res.redirect("/posts");
    }
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errors });
  }
};

exports.postDelete = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);
    const postes = await getPosts();
    res.render("posts/post-list", { postes });
  } catch (e) {
    next(e);
  }
};

exports.postMod = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await getPost(postId);
    res.render("posts/post-formm", {
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.postModd = async (req, res, next) => {
  try {
    const postIdd = req.params.postId;
    console.log(postIdd);
    const postt = await getPostt(postIdd);
    console.log(postt);
    res.render("posts/post-formmm", {
      postt,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.postUpdate = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const body = req.body;
    await updatePost(postId, body);
    res.redirect("/posts");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postId);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.postUpdatee = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const body = req.body;
    console.log(body);
    await addToFolder(postId, body);
    res.redirect("/posts");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const postt = await getPostt(postId);
    res.status(400).render("posts/post-formmm", {
      errors,
      postt,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

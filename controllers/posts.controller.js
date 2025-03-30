const { errorMonitor } = require("connect-mongo");
const {
  getPosts,
  getPostsss,
  getPost,
  createPost,
  createPostt,
  getPostt,
  deletePost,
  updatePost,
  addToFolder,
  deletePostt,
  getPostedd,
  getPosted,
  awaitedd,
  getposted,
} = require("../queries/posts.queries");

// exports.postListt = async (req, res, next) => {
//   try {
//     const postedd = await getPostss();
//     console.log(postedd);
//     res.render("posts/post", postedd);
//   } catch (e) {
//     next(e);
//   }
// };

// exports.postList = async (req, res, next) => {
//   try {
//     const postes = await getPosts();
//     // const posted = await getPostss();
//     // const tab = [];
//     // const tabb = [];
//     // tab.push(posted);
//     // tab.map((e) => {
//     //   const h = e.file;
//     //   h.map((i) => {
//     //     const n = i.name;
//     //     const a = i.adresseip;
//     //     const r = i.redirect;
//     //     tabb.push(n);
//     //   });
//     // });
//     res.render("posts/post", {
//       postes,
//       isAuthenticated: req.isAuthenticated(),
//       currentUser: req.user,
//     });
//   } catch (e) {
//     next(e);
//   }
// };

exports.postFind = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getPosts();
    const content = await getposted(postId);
    const find = await getPostedd(postId);
    res.render("posts/post", {
      content,
      find,
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.postFindd = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getPosts();
    const find = await getPostedd(postId);
    res.render("posts/list-server", {
      find,
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

exports.postNeww = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await getPost(postId);
  res.render("posts/post-formmm", {
    post,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};
// exports.postNeww = (req, res, next) => {
//   res.render("posts/post-formmm", { post: {} });
// };
exports.postCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createPost({ ...body, author: req.user._id });
    setTimeout(add, 100);
    function add() {
      res.redirect("/posts");
    }
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errors });
  }
};

exports.postModd = async (req, res, next) => {
  try {
    const body = req.body;
    await createPostt({ ...body, author: req.params.postId });
    setTimeout(add, 100);
    function add() {
      res.redirect("/posts/finded/" + req.params.postId);
    }
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errorss });
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

exports.postDeletee = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await deletePostt(postId);
    res.render("posts/list-server");
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

exports.postModed = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const posts = await getPosted(postId);
    res.render("posts/post-change", {
      posts,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.postModdd = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await getPost(postId);
    res.render("posts/post-formmm", {
      post,
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
  const postIded = req.params.postId;
  try {
    const awai = [];
    const awaited = await awaitedd(postIded);
    awai.push(awaited.author);
    const postId = awai.toString();
    const body = req.body;
    await addToFolder(postIded, body);
    res.redirect("/posts/finded/" + postId);
  } catch (e) {
    next(e);
    // const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    // const find = await getPosted(postIded);
    // res.status(400).render("posts/post-formmm", {
    //   errors,
    //   find,
    //   isAuthenticated: req.isAuthenticated(),
    //   currentUser: req.user,
    // });
  }
};

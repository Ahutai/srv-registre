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
  getUpdown,
  deleteAll,
  sfile,
  sposts,
  createsPost,
  sfileDelete,
  getsfile,
  getfilee,
  nbrSfile,
  sFile,
  findmodal,
  fedd,
  getauthor,
  MsFile,
  updates,
  updatesSfile,
  updatess,
  PostList,
  PostedFile,
  addedToFile,
} = require("../queries/posts.queries");

const Sfile = require("../database/models/sfile");

const path = require("path");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/upload"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

const util = require("util");

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
    const updown = await getUpdown(postId);

    res.render("posts/post", {
      updown,
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

exports.fed = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const fed = fedd(postId);
    res.render("posts/post", {
      fed,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.sfiles = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getPosts();
    const content = await getfilee(postId);
    const findd = await sfile(postId);
    const authorget = await getauthor(postId);
    const arr = [];
    let result = null;
    arr.push(findd);
    arr.forEach((e) => {
      e.forEach((r) => {
        result = r.size;
      });
    });
    const calcul = result / 1000;
    const resultat = calcul;
    const ko = " Ko";
    const mo = " Mo";
    let resul = null;
    if (resultat < 100) {
      resul = resultat + ko;
    }
    if (resultat > 100) {
      resul = resultat + mo;
    }
    const updown = await getUpdown(postId);

    res.render("posts/post", {
      authorget,
      resul,
      resultat,
      updown,
      content,
      findd,
      postes,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.sfiledel = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getPosts();
    const content = await getposted(postId);
    const findd = await sfile(postId);
    const updown = await getUpdown(postId);

    res.render("posts/listserverII", {
      updown,
      content,
      findd,
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

exports.spost = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await sposts(postId);
  res.render("posts/spost", {
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
    res.redirect("/posts");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errors });
  }
};

exports.findSpost = async (req, res, next) => {
  try {
    const body = req.body;
    await createsPost({ ...body, author: req.params.postId });
    res.redirect("/posts/findeddd/" + req.params.postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errorss });
  }
};

exports.postModd = async (req, res, next) => {
  try {
    const body = req.body;
    await createPostt({ ...body, author: req.params.postId });
    res.redirect("/posts/finded/" + req.params.postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-form", { errorss });
  }
};

exports.postDelete = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);
    await deleteAll(postId);
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

exports.deleteSfile = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await sfileDelete(postId);
    res.render("posts/listserverII");
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

exports.postedList = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postfile = await PostList(postId);
    res.render("posts/postl", {
      postfile,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.msFile = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modifii = await MsFile(postId);
    res.render("posts/sfilemodifi", {
      modifii,
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
    const modifi = await getPosted(postId);
    res.render("posts/post-change", {
      modifi,
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

exports.sUpdate = async (req, res, next) => {
  const postIded = req.params.postId;
  try {
    const awai = [];
    const awaited = await updates(postIded);
    awai.push(awaited.author);
    const postId = awai.toString();
    const postIdd = req.body;
    await updatesSfile(postIded, postIdd);
    res.redirect("/posts/findeddd/" + postId);
  } catch (e) {
    const errorsss = Object.keys(e.errors).map((key) => e.errors[key].message);
    const find = await getPosted(postIded);
    res.status(400).render("posts/sfilemodifi", {
      errorsss,
      find,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.findposted = async (req, res, next) => {
  const postIded = req.params.postId;
  try {
    const awai = [];
    const awaited = await PostedFile(postIded);
    awai.push(awaited.author);
    const postId = awai.toString();
    const postIdd = req.body;
    await addedToFile(postIded, postIdd);
    res.redirect("/");
  } catch (e) {
    const errorsss = Object.keys(e.errors).map((key) => e.errors[key].message);
    const find = await getPosted(postIded);
    res.status(400).render("posts/post-change", {
      errorsss,
      find,
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
    const errorsss = Object.keys(e.errors).map((key) => e.errors[key].message);
    const find = await getPosted(postIded);
    res.status(400).render("posts/post-change", {
      errorsss,
      find,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.AddFile = [
  upload.single("addfile"),
  async (req, res, next) => {
    try {
      console.log(
        util.inspect(req.file, {
          compact: false,
          depth: 5,
          breakLength: 80,
          color: true,
        })
      );
      const ko = " Ko";
      const mo = " Mo";
      const go = " Go";
      let octetr = null;
      let octet = null;
      const octets = req.file.size / 1000;
      if (octets < 1000) {
        octet = octets + ko;
        octetr = octets.toFixed() + ko;
      }
      if (octets > 1000) {
        octet = octets / 1000;
        octetr = octet.toFixed(1) + mo;
      }
      const newUser = new Sfile({
        name: req.body.name,
        addfile: req.file.filename,
        size: octetr,
        author: req.params.postId,
      });
      const saveUser = await newUser.save();
      res.redirect("/posts/findeddd/" + req.params.postId);
    } catch (e) {
      next(e);
    }
  },
];

exports.modal = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modalFind = await findmodal(postId);
    // const postes = await getPosts();
    // const content = await getfile(postId);
    // const findd = await sfile(postId);
    // const updown = await getUpdown(postId);

    res.render("posts/post", {
      modalFind,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

// const body = req.body;
// await createsPost({ ...body, author: req.params.postId });

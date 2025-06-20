const {
  getPosts,
  sposts,
  getFolderByUser,
  getPostsss,
  getPost,
  createPost,
  createPostt,
  getPostt,
  deletePost,
  updatePost,
  addToFolder,
  deletePostt,
  getPosted,
  awaitedd,
  getUpdown,
  deleteAll,
  sfile,
  createsPost,
  sfileDelete,
  getsfile,
  nbrSfile,
  sFile,
  findmodal,
  findmodall,
  fedd,
  getauthor,
  MsFile,
  updates,
  updatesSfile,
  updatess,
  PostList,
  PostedFile,
  addedToFile,
  findByAuthor,
  findAusername,
  createFileForPostList,
  sfiles,
  getauthorr,
  sfileDeletes,
  MsFiles,
  upDatess,
  updatesSfiles,
  getidlistserver,
  findByAuthorFolderNivII,
  findUsernameFolderNivII,
  createFolderNivII,
  findfoldernivII,
  modFoldernivii,
  updatesFolderNivII,
  updatesfoldernivii,
  findAuthorFolderListII,
  findUsernameFolderListII,
  createFolderListnivIII,
  getContentFoldernivII,
  listfolderniviii,
  getIdNivII,
  findfileniviii,
  createFileNivIII,
  findmodalll,
  deletefoldernivII,
  delFileNivIII,
  modFilesNivIII,
  updateFileNivIII,
  updatesFileNivIII,
  AddAccess,
  DoneAccess,
  AddAccessNivI,
  DoneAccessNivI,
  getaccessfoldernivi,
  findFolderAccessNivII,
  AddAccessNivII,
  DoneAccessNivII,
  findAccessNivI,
} = require("../queries/posts.queries");

const {
  getposted,
  getPostedd,
  findAccessNivZERO,
  getfilee,
  findUsername,
} = require("../queries/shared.queries");

const util = require("util");

const path = require("path");
const multer = require("multer");
const { TIMEOUT } = require("dns");
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

// const Sfile = require("../database/models/sfile");

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

exports.spost = async (req, res, next) => {
  const postId = req.params.postId;
  const postt = await sposts(postId);
  res.render("posts/spost", {
    postt,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
    editable: false,
  });
};

exports.createFileNivIII = [
  upload.single("addfiless"),
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const dates = new Date();
      const datenow = dates.toDateString();
      const ko = " Ko";
      const mo = " Mo";
      const go = " Go";
      let octetr, octet, formats;
      const format = req.file.mimetype;
      const sizing = req.file.size;
      const octets = sizing / 1000;
      if (octets < 1000) {
        octet = octets + ko;
        octetr = octets.toFixed() + ko;
      }
      if (octets > 1000) {
        octet = octets / 1000;
        octetr = octet.toFixed(1) + mo;
      }
      if (format === "application/pdf") {
        formats = "a";
      } else {
        formats = "b";
      }
      await createFileNivIII({
        name: req.body.name,
        addfiless: req.file.filename,
        size: octetr,
        author: req.params.postId,
        date: datenow,
        type: req.file.mimetype,
        sort: formats,
        niv: "4",
      });
      res.redirect("/posts/listfolderiii/" + postId);
    } catch (e) {
      const postId = req.params.postId;
      const post = await sposts(postId);
      const errored = Object.keys(e.errors).map((key) => e.errors[key].message);
      res.render("posts/spost", { errored, post });
    }
  },
];

exports.addToPostList = [
  upload.single("addfiles"),
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const dates = new Date();
      const datenow = dates.toDateString();
      const ko = " Ko";
      const mo = " Mo";
      const go = " Go";
      let octetr, octet, formats;
      const format = req.file.mimetype;
      const sizing = req.file.size;
      const octets = sizing / 1000;
      if (octets < 1000) {
        octet = octets + ko;
        octetr = octets.toFixed() + ko;
      }
      if (octets > 1000) {
        octet = octets / 1000;
        octetr = octet.toFixed(1) + mo;
      }
      if (format === "application/pdf") {
        formats = "a";
      } else {
        formats = "b";
      }
      await createFileForPostList({
        name: req.body.name,
        addfiles: req.file.filename,
        size: octetr,
        author: req.params.postId,
        date: datenow,
        type: req.file.mimetype,
        sort: formats,
        niv: "2",
      });
      res.redirect("/posts/finded/" + postId);
    } catch (e) {
      const postId = req.params.postId;
      const post = await sposts(postId);
      const errored = Object.keys(e.errors).map((key) => e.errors[key].message);
      res.render("posts/spost", { errored, post });
    }
  },
];

exports.AddFile = [
  upload.single("addfile"),
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const dates = new Date();
      const datenow = dates.toDateString();
      const ko = " Ko";
      const mo = " Mo";
      const go = " Go";
      let octetr, octet, formats;
      const format = req.file.mimetype;
      const sizing = req.file.size;
      const octets = sizing / 1000;
      if (octets < 1000) {
        octet = octets + ko;
        octetr = octets.toFixed() + ko;
      }
      if (octets > 1000) {
        octet = octets / 1000;
        octetr = octet.toFixed(1) + mo;
      }
      if (format === "application/pdf") {
        formats = "a";
      } else {
        formats = "b";
      }
      await createsPost({
        name: req.body.name,
        addfile: req.file.filename,
        size: octetr,
        author: req.params.postId,
        date: datenow,
        type: req.file.mimetype,
        sort: formats,
        niv: "3",
      });
      res.redirect("/posts/findeddd/" + postId);
    } catch (e) {
      const postId = req.params.postId;
      const post = await sposts(postId);
      const errored = Object.keys(e.errors).map((key) => e.errors[key].message);
      res.render("posts/spost", { errored, post });
    }
  },
];

exports.folderfind = async (req, res, next) => {
  try {
    const postes = await getFolderByUser(req.user);
    res.render("posts/post", {
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
      folder: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.postFind = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    let accesss;
    const postes = await getFolderByUser(req.user);
    postes.forEach((e) => {
      accesss = e.access;
    });
    const content = await getposted(postId);
    const find = await getPostedd(postId);
    const updown = await getUpdown(postId);
    const findds = await sfiles(postId);
    const authorgett = await getauthorr(postId);
    const findaccessnivzero = await findAccessNivZERO(postId);
    res.render("posts/post", {
      updown,
      accesss,
      content,
      findaccessnivzero,
      find,
      postes,
      niv: "0",
      findds,
      authorgett,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
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
    let accessnivi;
    const findaccessfoldernivi = await getaccessfoldernivi(postId);
    accessnivi = findaccessfoldernivi.access;
    const postes = await getFolderByUser(req.user);
    const content = await getfilee(postId);
    const authorget = await getauthor(postId);
    const updown = await getUpdown(postId);
    const finddss = await findfoldernivII(postId);
    const findaccessnivi = await findAccessNivI(postId);
    res.render("posts/post", {
      authorget,
      updown,
      content,
      accessnivi,
      findaccessnivi,
      finddss,
      postes,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
      niv: "1",
    });
  } catch (e) {
    next(e);
  }
};

exports.listFolderNivIII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    let accessnivii;
    const accessfoldernivii = await findFolderAccessNivII(postId);
    accessnivii = accessfoldernivii.access;
    const postes = await getFolderByUser(req.user);
    const content = await getContentFoldernivII(postId);
    const listfolderiii = await listfolderniviii(postId);
    const authorget = await getauthor(postId);
    const updown = await getUpdown(postId);
    const fileniviii = await findfileniviii(postId);
    res.render("posts/post", {
      authorget,
      accessnivii,
      updown,
      content,
      listfolderiii,
      fileniviii,
      postes,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
      niv: "2",
    });
  } catch (e) {
    next(e);
  }
};

exports.sfiless = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getFolderByUser(req.user);
    const content = await getfilee(postId);
    const findd = await sfiles(postId);
    const authorget = await getauthorr(postId);
    const updown = await getUpdown(postId);
    res.render("posts/post", {
      authorget,
      updown,
      content,
      findd,
      postes,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
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
    const finddss = await findfoldernivII(postId);
    res.render("posts/listserverII", {
      updown,
      content,
      findd,
      postes,
      finddss,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.getDelFileNivIII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getFolderByUser(req.user);
    const content = await getContentFoldernivII(postId);
    const listfolderiii = await listfolderniviii(postId);
    const authorget = await getauthor(postId);
    const updown = await getUpdown(postId);
    const fileniviii = await findfileniviii(postId);
    res.render("posts/listserverIII", {
      authorget,
      updown,
      content,
      listfolderiii,
      fileniviii,
      postes,
      postId,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.sfiledell = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const findds = await sfiles(postId);
    const postes = await getFolderByUser(req.user);
    const content = await getposted(postId);
    const find = await getPostedd(postId);
    const updown = await getUpdown(postId);
    res.render("posts/list-server", {
      updown,
      content,
      find,
      findds,
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      niv: "0",
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.ListdelFolderNivII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postes = await getFolderByUser(req.user);
    const content = await getfilee(postId);
    const findd = await sfile(postId);
    const authorget = await getauthor(postId);
    const updown = await getUpdown(postId);
    const finddss = await findfoldernivII(postId);
    res.render("posts/listserverII", {
      updown,
      content,
      findd,
      finddss,
      authorget,
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
    const findds = await sfiles(postId);
    res.render("posts/list-server", {
      find,
      postes,
      findds,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      editable: true,
      niv: "0",
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

exports.ffolderNivII = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await sposts(postId);
  res.render("posts/foldernivii", {
    post,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.postListFile = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await getPost(postId);
  res.render("posts/showmodal", {
    post,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.fileniviii = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await getIdNivII(postId);
  res.render("posts/modalfileniviii", {
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
    await createPost({
      ...body,
      author: req.user._id,
      username: req.user.username,
      niv: "1",
      access: "default",
    });
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

exports.addFolderNivII = async (req, res, next) => {
  try {
    const body = req.body;
    const postId = req.params.postId;
    const dates = new Date();
    const datered = dates.toDateString();
    const awai = [];
    const authorss = await findByAuthorFolderNivII(postId);
    awai.push(authorss.author);
    const authors = awai.toString();
    const arr = [];
    let usered;
    const users = await findUsernameFolderNivII(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        usered = t.username;
      });
    });
    await createFolderNivII({
      ...body,
      author: postId,
      authors: authors,
      username: usered,
      date: datered,
      niv: "3",
      access: "default",
    });
    res.redirect("/posts/findeddd/" + req.params.postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/foldernivii", { errorss });
  }
};

exports.createfolderListNivIII = async (req, res, next) => {
  try {
    const body = req.body;
    const postId = req.params.postId;
    const dates = new Date();
    const datered = dates.toDateString();
    const awai = [];
    const authorss = await findAuthorFolderListII(postId);
    awai.push(authorss.author);
    const authors = awai.toString();
    const arr = [];
    let usered;
    const users = await findUsernameFolderListII(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        usered = t.username;
      });
    });
    await createFolderListnivIII({
      ...body,
      author: postId,
      authors: authors,
      username: usered,
      date: datered,
      niv: "4",
      access: "default",
    });
    res.redirect("/posts/listfolderiii/" + req.params.postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-formmm", { errorss });
  }
};

exports.postModd = async (req, res, next) => {
  try {
    const body = req.body;
    const postId = req.params.postId;
    const dates = new Date();
    const datered = dates.toDateString();
    const awai = [];
    const authorss = await findByAuthor(postId);
    awai.push(authorss.author);
    const authors = awai.toString();
    const arr = [];
    let usered;
    const users = await findUsername(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        usered = t.username;
      });
    });
    await createPostt({
      ...body,
      author: postId,
      authors: authors,
      username: usered,
      date: datered,
      niv: "2",
      access: "default",
    });
    res.redirect("/posts/finded/" + req.params.postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post-formmm", { errorss });
  }
};

exports.postDelete = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);
    await deleteAll(postId);
    const postes = await getFolderByUser(req.user);
    res.render("posts/post-list", {
      postes,
      currentUser: req.user,
      editable: true,
    });
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

exports.delfoldernivII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await deletefoldernivII(postId);
    res.render("posts/listserverII");
  } catch (e) {
    next(e);
  }
};

exports.deleteFilePostList = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await sfileDeletes(postId);
    res.render("posts/list-server");
  } catch (e) {
    next(e);
  }
};

exports.deleteFilesNivIII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await delFileNivIII(postId);
    res.render("posts/listserverIII");
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

exports.modFolderNivII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modfoldernivii = await modFoldernivii(postId);
    res.render("posts/modfoldernivii", {
      modfoldernivii,
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

exports.modForFilePostList = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modifiii = await MsFiles(postId);
    res.render("posts/modforfilepostlist", {
      modifiii,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.modFileNivIII = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modfileniviii = await modFilesNivIII(postId);
    res.render("posts/modfilesniviii", {
      modfileniviii,
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

exports.folderUpdateNivII = async (req, res, next) => {
  const postIded = req.params.postId;
  try {
    const awai = [];
    const awaited = await updatesFolderNivII(postIded);
    awai.push(awaited.author);
    const postId = awai.toString();
    const postIdd = req.body;
    await updatesfoldernivii(postIded, postIdd);
    res.redirect("/posts/findeddd/" + postId);
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

exports.addAccess = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "access";
  try {
    await AddAccess(postIded, access);
    res.redirect("/posts/finded/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.addAccessNivII = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "access";
  try {
    await AddAccessNivII(postIded, access);
    res.redirect("/posts/listfolderiii/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.addAccessNivI = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "access";
  try {
    await AddAccessNivI(postIded, access);
    res.redirect("/posts/findeddd/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.doneAccessNivII = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "default";
  try {
    await DoneAccessNivII(postIded, access);
    res.redirect("/posts/listfolderiii/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.doneAccessNivI = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "default";
  try {
    await DoneAccessNivI(postIded, access);
    res.redirect("/posts/findeddd/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
    res.status(400).render("posts/post-form", {
      errors,
      post,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.doneAccess = async (req, res, next) => {
  const postIded = req.params.postId;
  const access = "default";
  try {
    await DoneAccess(postIded, access);
    res.redirect("/posts/finded/" + postIded);
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const post = await getPost(postIded);
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

exports.filepostlistupdate = async (req, res, next) => {
  const postIded = req.params.postId;
  try {
    const awaii = [];
    const awaitedd = await upDatess(postIded);
    awaii.push(awaitedd.author);
    const postId = awaii.toString();
    const postIdd = req.body;
    await updatesSfiles(postIded, postIdd);
    res.redirect("/posts/finded/" + postId);
  } catch (e) {
    const errorsss = Object.keys(e.errors).map((key) => e.errors[key].message);
    const find = await getPosted(postIded);
    res.status(400).render("posts/modforfilepostlist", {
      errorsss,
      find,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.fileniviiiupdate = async (req, res, next) => {
  const postIded = req.params.postId;
  try {
    const awaii = [];
    const awaitedd = await updateFileNivIII(postIded);
    awaii.push(awaitedd.author);
    const postId = awaii.toString();
    const postIdd = req.body;
    await updatesFileNivIII(postIded, postIdd);
    res.redirect("/posts/listfolderiii/" + postId);
  } catch (e) {
    const errorsss = Object.keys(e.errors).map((key) => e.errors[key].message);
    const find = await getPosted(postIded);
    res.status(400).render("posts/modforfilepostlist", {
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

exports.modall = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modalFindd = await findmodall(postId);
    // const postes = await getPosts();
    // const content = await getfile(postId);
    // const findd = await sfile(postId);
    // const updown = await getUpdown(postId);
    res.render("posts/post", {
      modalFindd,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.modalll = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const modalFinddd = await findmodalll(postId);
    // const postes = await getPosts();
    // const content = await getfile(postId);
    // const findd = await sfile(postId);
    // const updown = await getUpdown(postId);
    res.render("posts/post", {
      modalFinddd,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.showmodalfilefolderpostlist = async (req, res, next) => {
  try {
    const postIdFileFolderPostList = req.params.postId;
    const modalFindd = await findmodall(postId);
    // const postes = await getPosts();
    // const content = await getfile(postId);
    // const findd = await sfile(postId);
    // const updown = await getUpdown(postId);
    res.render("posts/post", {
      modalFindd,
      postIdFileFolderPostList,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

// const body = req.body;
// await createsPost({ ...body, author: req.params.postId });

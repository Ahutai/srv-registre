const {
  createUser,
  getUserByUsername,
  getSfile,
  findAllUser,
  // updateUsername,
  // updatesUsername,
  updatesPassword,
} = require("../queries/users.queries");
const {
  getFolderToUser,
  getFolder,
  getPostedd,
  sfile,
  getposted,
  getfilee,
  findUsername,
  findUsernames,
  findUsernamess,
  listnivIII,
  listfoldernivii,
  getFileNivI,
  getcontentnivii,
  listfilenivIII,
  createsPost,
  sposts,
  findAccessNivZERO,
  getFolderByUser,
  FindAccessNivI,
} = require("../queries/posts.queries");

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

exports.signupForm = (req, res, next) => {
  res.render("users/user-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.signup = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await createUser(body);
    res.redirect("/");
  } catch (e) {
    res.render("users/user-form", {
      errors: ["champs requis"],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.updateUsernameOrPassword = async (req, res, next) => {
  const body = req.body;
  // const username = body.usernamee;
  // const password = body.passwordd;
  const postId = req.params.postId;
  try {
    if (body.password) {
      const userr = await updatesPassword(postId, body);
    }
    if (body === "") {
      res.redirect("/");
    }
    res.redirect("/");
  } catch (e) {
    res.render("posts/post", {
      errors: ["champs requis"],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
    });
  }
};

exports.userProfile = async (req, res, next) => {
  try {
    // const username = req.params.username;
    const username = "administrateur";
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    res.render("posts/post", {
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFind = async (req, res, next) => {
  try {
    const arr = [];
    let username;
    const postId = req.params.postId;
    const users = await findUsername(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const postes = await getFolderByUser(req.user);
    const find = await getPostedd(postId);
    console.log(find);
    const findds = await getFileNivI(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const findaccessnivzero = await findAccessNivZERO(postId);
    res.render("posts/post", {
      username,
      find,
      findaccessnivzero,
      findds,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFindd = async (req, res, next) => {
  try {
    const arr = [];
    let username;
    const postId = req.params.postId;
    const users = await findUsernames(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const content = await getfilee(postId);
    const findd = await sfile(postId);
    const finddss = await listfoldernivii(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    const findaccessnivi = await FindAccessNivI(postId);
    res.render("posts/post", {
      username,
      findaccessnivi,
      findd,
      finddss,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      sfile: false,
      nivuser: "1",
    });
  } catch (e) {
    next(e);
  }
};

exports.findFolderNivIII = async (req, res, next) => {
  try {
    const arr = [];
    let username;
    const postId = req.params.postId;
    const users = await findUsernamess(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const content = await getcontentnivii(postId);
    const listfolderiii = await listnivIII(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    const fileniviii = await listfilenivIII(postId);
    res.render("posts/post", {
      username,
      listfolderiii,
      fileniviii,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      listniviii: false,
    });
  } catch (e) {
    next(e);
  }
};

exports.userToFind = async (req, res, next) => {
  try {
    // const username = req.params.username;
    const postes = await findAllUser();
    res.render("posts/post", {
      postes,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      editables: false,
      users: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.userFinded = async (req, res, next) => {
  try {
    // const username = req.params.username;
    const username = req.params.username;
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    res.render("posts/post", {
      postes,
      username,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      folderr: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.postFileNivII = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await sposts(postId);
  res.render("posts/addfileniviiusers", {
    post,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
    editable: false,
  });
};

exports.addFileInNivII = [
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
      res.redirect("/users/sposts/" + postId);
    } catch (e) {
      const postId = req.params.postId;
      const post = await sposts(postId);
      const errored = Object.keys(e.errors).map((key) => e.errors[key].message);
      res.render("posts/spost", { errored, post });
    }
  },
];

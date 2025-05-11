const {
  createUser,
  getUserByUsername,
  getSfile,
  findAllUser,
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
} = require("../queries/posts.queries");

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
    const find = await getPostedd(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    res.render("posts/post", {
      username,
      find,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
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
    const user = await getUserByUsername(username);
    const postes = await getFolderToUser(user._id);
    res.render("posts/post", {
      username,
      findd,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
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
    });
  } catch (e) {
    next(e);
  }
};

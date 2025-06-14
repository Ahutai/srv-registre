const {
  createUser,
  getUserByUsername,
  findAllUser,
  // updateUsername,
  // updatesUsername,
  updatesPassword,
} = require("../queries/users.queries");
const { getFolderToUser } = require("../queries/shared.queries");

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
    res.redirect("/users");
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
    // const username = req.params.username;
    const user = await getUserByUsername("administrateur");
    const postes = await getFolderToUser(user._id);
    res.render("posts/post", {
      postes,
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

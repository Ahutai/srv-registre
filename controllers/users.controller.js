const { createUser, getUserByUsername } = require("../queries/users.queries");
const { getFolderToUser } = require("../queries/posts.queries");

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
    const username = "admin";
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

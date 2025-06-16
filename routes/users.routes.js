const router = require("express").Router();

const {
  signup,
  signupForm,
  userProfile,
  userToFind,
  userFinded,
  updateUsernameOrPassword,
} = require("../controllers/users.controller");

router.get("/vaihere", userProfile);

router.get("/users", userToFind);

router.post("/updateusername/:postId", updateUsernameOrPassword);

router.get("/users", userToFind);

router.get("/", userFinded);

router.get("/signup/form", signupForm);

router.post("/signup", signup);

module.exports = router;

const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");

const {
  signup,
  signupForm,
  userProfile,
  userToFind,
  userFinded,
  updateUsernameOrPassword,
} = require("../controllers/users.controller");

router.get("/vaihere", ensureAuthenticated, userProfile);

router.get("/users", ensureAuthenticated, userToFind);

router.post(
  "/updateusername/:postId",
  ensureAuthenticated,
  updateUsernameOrPassword
);

router.post("/signup", signup);

router.get("/", ensureAuthenticated, userFinded);

module.exports = router;

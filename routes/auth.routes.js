const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const {
  signinForm,
  signin,
  SignOut,
  signupForm,
} = require("../controllers/auth.controller");

router.get("/signin/form", signinForm);
router.post("/signin", signin);
router.get("/signout", ensureAuthenticated, SignOut);
router.get("/signup/form", signupForm);

module.exports = router;

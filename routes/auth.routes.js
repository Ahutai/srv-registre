const router = require("express").Router();
const {
  signinForm,
  signin,
  SignOut,
} = require("../controllers/auth.controller");

router.get("/signin/form", signinForm);
router.post("/signin", signin);
router.get("/signout", SignOut);

module.exports = router;

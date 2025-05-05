const router = require("express").Router();

const {
  signup,
  signupForm,
  userProfile,
} = require("../controllers/users.controller");

router.get("/ahutai", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);

module.exports = router;

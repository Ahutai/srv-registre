const router = require("express").Router();

const {
  signup,
  signupForm,
  userProfile,
  sfileFind,
  sfileFindd,
  userToFind,
  userFinded,
} = require("../controllers/users.controller");

router.get("/administrateur", userProfile);
router.get("/users", userToFind);
router.get("/spost/:postId", sfileFind);
router.get("/finduser/:username", userFinded);
router.get("/sposts/:postId", sfileFindd);
router.get("/signup/form", signupForm);
router.post("/signup", signup);

module.exports = router;

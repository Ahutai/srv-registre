const router = require("express").Router();

const {
  signup,
  signupForm,
  userProfile,
  sfileFind,
  sfileFindd,
  userToFind,
  userFinded,
  updateUsernameOrPassword,
  findFolderNivIII,
  postFileNivII,
  addFileInNivII,
} = require("../controllers/users.controller");

router.get("/administrateur", userProfile);

router.get("/users", userToFind);

router.post("/updateusername/:postId", updateUsernameOrPassword);

router.get("/users", userToFind);

router.get("/spost/:postId", sfileFind);

router.get("/finduser/:username", userFinded);

router.get("/sposts/:postId", sfileFindd);

router.get("/findfolderniviii/:postId", findFolderNivIII);

router.get("/signup/form", signupForm);

router.get("/postfilenivoneinshared/:postId", postFileNivII);

router.post("/signup", signup);

router.post("/addfileusersi/:postId", addFileInNivII);

module.exports = router;

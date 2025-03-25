const router = require("express").Router();
const {
  postList,
  postNew,
  postCreate,
  postDelete,
  postMod,
  postUpdate,
} = require("../controllers/posts.controller");

router.get("/new", postNew);

router.get("/", postList);

router.post("/", postCreate);

router.get("/mod/:postId", postMod);

router.post("/update/:postId", postUpdate);

router.delete("/:postId", postDelete);

module.exports = router;

const router = require("express").Router();
const {
  postList,
  postNew,
  postCreate,
  postDelete,
  postMod,
  postUpdate,
  postModd,
  addfile,
  postUpdatee,
} = require("../controllers/posts.controller");

router.get("/new", postNew);

router.get("/", postList);

router.post("/", postCreate);

router.get("/mod/:postId", postMod);

router.get("/modd/:postId", postModd);

router.post("/update/:postId", postUpdate);

router.post("/updatee/:postId", postUpdatee);

router.delete("/:postId", postDelete);

module.exports = router;

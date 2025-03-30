const router = require("express").Router();
const {
  postList,
  postNew,
  postCreate,
  postDelete,
  postMod,
  postModdd,
  postUpdate,
  postModd,
  addfile,
  postUpdatee,
  postListt,
  postNeww,
  postDeletee,
  postFind,
  postFindd,
  postModed,
} = require("../controllers/posts.controller");

router.get("/new", postNew);

router.get("/neww/:postId", postNeww);

router.get("/", postFind);

// router.get("/listt", postListt);

router.post("/", postCreate);

// router.get("/listt/:postId", postListt);

router.get("/mod/:postId", postMod);

router.get("/moded/:postId", postModed);

router.get("/finded/:postId", postFind);

router.get("/findedd/:postId", postFindd);

router.post("/modded/:postId", postModd);

router.post("/update/:postId", postUpdate);

router.post("/updatee/:postId", postUpdatee);

router.delete("/:postId", postDelete);

router.delete("/del/:postId", postDeletee);

module.exports = router;

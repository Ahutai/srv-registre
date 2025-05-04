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
  postNeww,
  postDeletee,
  postFind,
  postFindd,
  postModed,
  sfiles,
  spost,
  findSpost,
  deleteSfile,
  sfiledel,
  AddFile,
  modal,
  fed,
  msFile,
  sUpdate,
  postedList,
  findposted,
} = require("../controllers/posts.controller");

router.get("/new", postNew);

router.get("/neww/:postId", postNeww);

router.get("/spost/:postId", spost);

router.get("/", postFind);

// router.get("/listt", postListt);

router.post("/", postCreate);

router.post("/addfile/:postId", AddFile);

// router.get("/listt/:postId", postListt);

router.get("/mod/:postId", postMod);

router.get("/modal/:postId", modal);

router.get("/moded/:postId", postModed);

router.get("/msfile/:postId", msFile);

router.get("/finded/:postId", postFind);

router.get("/findeddd/:postId", sfiles);

router.get("/fed/:postId", fed);

router.get("/sfiledel/:postId", sfiledel);

router.get("/findedd/:postId", postFindd);

router.post("/modded/:postId", postModd);

router.post("/spostmod/:postId", findSpost);

router.post("/update/:postId", postUpdate);

router.post("/postedfile/:postId", findposted);

router.post("/updatee/:postId", postUpdatee);

router.get("/listpost/:postId", postedList);

router.post("/supdate/:postId", sUpdate);

router.delete("/:postId", postDelete);

router.delete("/del/:postId", postDeletee);

router.delete("/deletesfile/:postId", deleteSfile);

module.exports = router;

const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
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
  postListFile,
  addToPostList,
  sfiless,
  deleteFilePostList,
  sfiledell,
  modall,
  modForFilePostList,
  filepostlistupdate,
  showmodalfilefolderpostlist,
  folderNivII,
  addFolderNivII,
  modFolderNivII,
  folderUpdateNivII,
  listFolderNivIII,
  createListNivIII,
  createfolderListNivIII,
} = require("../controllers/posts.controller");

router.post("/addfile/:postId", ensureAuthenticated, AddFile);

router.post("/addfiles/:postId", ensureAuthenticated, addToPostList);

router.get("/new", postNew);

router.get("/neww/:postId", postNeww);

router.get("/foldernivii/:postId", folderNivII);

router.get("/showmodal/:postId", postListFile);

router.get("/spost/:postId", spost);

router.get("/createlistniviii/:postId", createListNivIII);

router.get("/", postFind);

router.get("/listpost/:postId", postedList);

router.get("/mod/:postId", postMod);

router.get("/modal/:postId", modal);

router.get("/modall/:postId", modall);

router.get("/moded/:postId", postModed);

router.get("/msfile/:postId", msFile);

router.get("/modfoldernivii/:postId", modFolderNivII);

router.get("/msfiles/:postId", modForFilePostList);

router.get("/finded/:postId", postFind);

router.get("/findeddd/:postId", sfiles);

router.get("/listfolderiii/:postId", listFolderNivIII);

router.get("/findedddd/:postId", sfiless);

router.get("/fed/:postId", fed);

router.get("/showmodalfilefolderpostlist/:postId", showmodalfilefolderpostlist);

router.get("/sfiledel/:postId", sfiledel);

router.get("/sfiledell/:postId", sfiledell);

router.get("/findedd/:postId", postFindd);

router.post("/", postCreate);

router.post("/modded/:postId", postModd);

router.post("/createdfolderniviii/:postId", createfolderListNivIII);

router.post("/addfoldernivii/:postId", addFolderNivII);

router.post("/spostmod/:postId", findSpost);

router.post("/update/:postId", postUpdate);

router.post("/updatefoldernivii/:postId", folderUpdateNivII);

router.post("/postedfile/:postId", findposted);

router.post("/updatee/:postId", postUpdatee);

router.post("/supdate/:postId", sUpdate);

router.post("/supdates/:postId", filepostlistupdate);

router.delete("/:postId", postDelete);

router.delete("/del/:postId", postDeletee);

router.delete("/deletesfile/:postId", deleteSfile);

router.delete("/deletesfiles/:postId", deleteFilePostList);

module.exports = router;

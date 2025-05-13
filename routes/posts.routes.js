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
  ffolderNivII,
  addFolderNivII,
  modFolderNivII,
  folderUpdateNivII,
  listFolderNivIII,
  createListNivIII,
  createfolderListNivIII,
  fileniviii,
  createFileNivIII,
  modalll,
  delfoldernivII,
  ListdelFolderNivII,
  deleteFilesNivIII,
  getDelFileNivIII,
  modFileNivIII,
  fileniviiiupdate,
  folderfind,
  addAccess,
  doneAccess,
  doneAccessNivI,
  addAccessNivI,
  addAccessNivII,
  doneAccessNivII,
} = require("../controllers/posts.controller");

router.post("/addfile/:postId", ensureAuthenticated, AddFile);

router.post("/addfiles/:postId", ensureAuthenticated, addToPostList);

router.post(
  "/createfileforniviii/:postId",
  ensureAuthenticated,
  createFileNivIII
);

router.get("/new", postNew);

router.get("/neww/:postId", postNeww);

router.get("/foldernivii/:postId", ffolderNivII);

router.get("/showmodal/:postId", postListFile);

router.get("/createfileniviii/:postId", fileniviii);

router.get("/spost/:postId", spost);

router.get("/createlistniviii/:postId", createListNivIII);

router.get("/", folderfind);

router.get("/listpost/:postId", postedList);

router.get("/mod/:postId", postMod);

router.get("/modal/:postId", modal);

router.get("/modall/:postId", modall);

router.get("/modalll/:postId", modalll);

router.get("/moded/:postId", postModed);

router.get("/msfile/:postId", msFile);

router.get("/modfoldernivii/:postId", modFolderNivII);

router.get("/msfiles/:postId", modForFilePostList);

router.get("/mfileniviii/:postId", modFileNivIII);

router.get("/finded/:postId", postFind);

router.get("/findeddd/:postId", sfiles);

router.get("/listfolderiii/:postId", listFolderNivIII);

router.get("/findedddd/:postId", sfiless);

router.get("/fed/:postId", fed);

router.get("/showmodalfilefolderpostlist/:postId", showmodalfilefolderpostlist);

router.get("/sfiledel/:postId", sfiledel);

router.get("/sfiledell/:postId", sfiledell);

router.get("/getfilesniviii/:postId", getDelFileNivIII);

router.get("/delfoldernivii/:postId", ListdelFolderNivII);

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

router.get("/addaccess/:postId", addAccess);

router.get("/addaccessnivii/:postId", addAccessNivII);

router.get("/addaccessnivi/:postId", addAccessNivI);

router.get("/doneaccess/:postId", doneAccess);

router.get("/doneaccessnivii/:postId", doneAccessNivII);

router.get("/doneaccessnivi/:postId", doneAccessNivI);

router.post("/supdate/:postId", sUpdate);

router.post("/supdates/:postId", filepostlistupdate);

router.post("/updatefilesniviii/:postId", fileniviiiupdate);

router.delete("/:postId", postDelete);

router.delete("/del/:postId", postDeletee);

router.delete("/delfoldernivii/:postId", delfoldernivII);

router.delete("/deletesfile/:postId", deleteSfile);

router.delete("/deletesfiles/:postId", deleteFilePostList);

router.delete("/delfilesniviii/:postId", deleteFilesNivIII);

module.exports = router;

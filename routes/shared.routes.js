const router = require("express").Router();

const {
  sfileFind,
  sfileFindd,
  findFolderNivIII,
  postFileNivII,
  addFileInNivII,
  createFolderNivIuser,
  showModalForCreateFolderUserNivI,
  createListNivIII,
  modalCreateFolderNivII,
  createFolderNivIIuser,
  createPanier,
  sfileFindPanier,
  sfileFindPanierr,
  awaitcommande,
  sfileFindAwaitComm,
  sfileFindAwaitCommm,
  statusadd,
} = require("../controllers/shared.controller");

router.get("/spost/:postId", sfileFind);

router.get("/findpanier/:postId", sfileFindPanier);

router.get("/findawaitcomm/:postId", sfileFindAwaitComm);

router.get("/findawaitcommm/:postId", sfileFindAwaitCommm);

router.post("/awaitcommande/:postId", awaitcommande);

router.get("/findpanierr/:postId", sfileFindPanierr);

router.get("/folderrnivii/:postId", modalCreateFolderNivII);

router.get("/sposts/:postId", sfileFindd);

router.get("/findfolderniviii/:postId", findFolderNivIII);

router.get("/postfilenivoneinshared/:postId", postFileNivII);

router.get("/createlistniviii/:postId", createListNivIII);

router.get(
  "/showmodcreatefoldernivi/:postId",
  showModalForCreateFolderUserNivI
);

router.post("/addfileusersi/:postId", addFileInNivII);

router.post("/status/:postId", statusadd);

router.post("/createfoldernivi/:postId", createFolderNivIuser);

router.post("/createpanier/:postId", createPanier);

router.post("/createfoldernivii/:postId", createFolderNivIIuser);

module.exports = router;

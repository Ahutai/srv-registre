const router = require("express").Router();

const {
  sfileFind,
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

router.post("/status/:postId", statusadd);

router.post("/createpanier/:postId", createPanier);

module.exports = router;

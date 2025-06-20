const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const {
  paiement,
  success,
  cancel,
} = require("../controllers/paiement.controller");

router.post("/createsession/:value", ensureAuthenticated, paiement);

router.get("/success/:postId", ensureAuthenticated, success);

router.get("/cancel/:postId", ensureAuthenticated, cancel);

module.exports = router;

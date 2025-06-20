const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const users = require("./users.routes");
const posts = require("./posts.routes");
const shared = require("./shared.routes");
const connexion = require("./auth.routes");
const paiement = require("./paiement.routes");

router.use("/posts", ensureAuthenticated, posts);
router.use("/shared", ensureAuthenticated, shared);
router.use("/users", users);
router.use("/auth", connexion);
router.use("/paiement", paiement);
router.get("/", (req, res) => {
  res.redirect("/shared/spost/" + "684a13da51a8dc62b71f0561");
});

module.exports = router;

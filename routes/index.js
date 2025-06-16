const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const users = require("./users.routes");
const posts = require("./posts.routes");
const shared = require("./shared.routes");
const connexion = require("./auth.routes");

router.use("/posts", ensureAuthenticated, posts);
router.use("/shared", ensureAuthenticated, shared);
router.use("/users", ensureAuthenticated, users);
router.use("/auth", connexion);
router.get("/", (req, res) => {
  res.redirect("/users");
});

module.exports = router;

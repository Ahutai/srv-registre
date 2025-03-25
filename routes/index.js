const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const users = require("./users.routes");
const posts = require("./posts.routes");
const connexion = require("./auth.routes");

router.use("/posts", ensureAuthenticated, posts);
router.use("/users", users);
router.use("/auth", connexion);
router.get("/", (req, res) => {
  res.redirect("/posts");
});

module.exports = router;

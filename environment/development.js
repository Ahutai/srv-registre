const path = require("path");

module.exports = {
  dbUrl:
    "mongodb+srv://Allen:C3EjU2rnNUfbPO@cluster0.lg23k.mongodb.net/nodeTest?retryWrites=true&w=majority&appName=Cluster0",
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
  portHttp: 3000,
  portHttps: 3001,
};

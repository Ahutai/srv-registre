const app = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const dbString =
  "mongodb+srv://Allen:C3EjU2rnNUfbPO@cluster0.lg23k.mongodb.net/nodeTest?retryWrites=true&w=majority&appName=Cluster0";
const connection = mongoose.createConnection(dbString);

const sessionStore = MongoStore.create({
  client: connection.getClient(),
  ttl: 60 * 60 * 24 * 14,
});

app.use(
  session({
    secret: "keypasstoserver",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: sessionStore,
  })
);

const app = require("../app");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { findUserPerEmail, findUserPerId } = require("../queries/users.queries");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserPerId(id);
    if (user) {
      done(null, user);
    }
  } catch (e) {
    done(e);
  }
});

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "username",
    },
    async (username, password, done) => {
      try {
        const user = await findUserPerEmail(username);
        if (user) {
          const match = await user.comparePassword(password);
          if (match) {
            done(null, user);
          } else {
            done(null, false, { message: "Wrong password" });
          }
        } else {
          done(null, false, { message: "User not found" });
        }
      } catch (e) {}
    }
  )
);

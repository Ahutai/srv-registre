const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword,
      },
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

exports.findUserPerEmail = (user) => {
  return User.findOne({ username: user }).exec();
};

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
};

exports.getUserByUsername = (username) => {
  return User.findOne({ username }).exec();
};

exports.findAllUser = () => {
  return User.find(
    {},
    {
      username: 1,
    }
  )
    .sort({ username: 1 })
    .exec();
};

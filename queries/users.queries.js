const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword,
        nom: user.nom,
        tel: user.tel,
      },
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

// exports.updateUsername = async (postId, user) => {
//   const hashedPassword = await User.hashPassword(user.password);
//   return User.findByIdAndUpdate(
//     postId,
//     {
//       username: user.username,
//       "local.password": hashedPassword,
//     },
//     { runValidators: true }
//   );
// }; update username and password

// exports.updatesUsername = async (postId, user) => {
//   return User.findByIdAndUpdate(
//     postId,
//     {
//       username: user.username,
//     },
//     { runValidators: true }
//   );
// }; update username only

exports.updatesPassword = async (postId, user) => {
  const hashedPassword = await User.hashPassword(user.password);
  return User.findByIdAndUpdate(
    postId,
    {
      "local.password": hashedPassword,
    },
    { runValidators: true }
  );
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

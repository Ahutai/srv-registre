// FOLDER DE NIVEAU 0
const Post = require("../database/models/post.model");

// FOLDER DE NIVEAU 1
const file = require("../database/models/files");

const User = require("../database/models/user.model");

// // FILES DE NIVEAU 1
const files = require("../database/models/filess");

// // FOLDER DE NIVEAU 2
const foldernivii = require("../database/models/foldernivii");

// // FILES DE NIVEAU 2
const sfile = require("../database/models/sfile");

// // FOLDER DE NIVEAU 3
const folderniviii = require("../database/models/folderniviii");

// // FILES DE NIVEAU 3
const fileniviii = require("../database/models/fileniviii");

// // FILES PANIER
const panier = require("../database/models/panier");

const awaitcomm = require("../database/models/awaitcomm");

exports.getFolderToUser = (authorId) => {
  return Post.find({ author: authorId }).populate("author").exec();
};

exports.getPostedd = (postId) => {
  return file.find({ author: postId }).sort({ updown: -1 }).exec();
};

exports.sfile = (postId) => {
  return sfile.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.findpanier = (postId) => {
  return panier.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.findonee = (postId) => {
  return panier
    .findOne(
      { author: postId },
      {
        show: 1,
      }
    )
    .sort({ sort: 1 })
    .exec();
};

exports.findawaitcommm = (postId) => {
  return awaitcomm.find({ _id: postId }).sort({ sort: 1 }).exec();
};

exports.delpanierr = (postId) => {
  return panier
    .findOne(
      { username: postId },
      {
        auth: 1,
      }
    )
    .exec();
};

exports.delpanierrr = (postId) => {
  return panier.deleteMany({ auth: postId }).exec();
};

exports.findawaitcomm = (postId) => {
  return awaitcomm.find({ author: postId }).sort({ datered: -1 }).exec();
};

exports.findauthorbyusername = (postId) => {
  return User.find(
    { username: postId },
    {
      _id: 1,
    }
  )
    .sort({ sort: 1 })
    .exec();
};

exports.resultfind = (postId) => {
  return panier
    .find(
      { auth: postId },
      {
        total: 1,
      }
    )
    .sort({ sort: 1 })
    .exec();
};

exports.quantfind = (postId) => {
  return panier
    .find(
      { auth: postId },
      {
        quant: 1,
      }
    )
    .sort({ sort: 1 })
    .exec();
};

exports.findpanierr = (postId) => {
  return panier.find({ _id: postId }).sort({ sort: 1 }).exec();
};

exports.getposted = (postId) => {
  return Post.find(
    { _id: postId },
    {
      _id: 1,
      content: 1,
      niv: 1,
    }
  ).exec();
};

exports.getfilee = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        _id: 1,
        name: 1,
        author: 1,
        niv: 1,
      }
    )
    .exec();
};

exports.findUsernamee = (postId) => {
  return Post.find({ _id: postId }).exec();
};

exports.findUsername = (postId) => {
  return Post.find(
    { _id: postId },
    {
      username: 1,
    }
  ).exec();
};

exports.findUsernames = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        username: 1,
      }
    )
    .exec();
};

exports.findUsernamess = (postId) => {
  return foldernivii
    .find(
      { _id: postId },
      {
        username: 1,
      }
    )
    .exec();
};

exports.listnivIII = (postId) => {
  return folderniviii.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.listfoldernivii = (postId) => {
  return foldernivii.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.getFileNivI = (postId) => {
  return files.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.getcontentnivii = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        _id: 1,
        name: 1,
        author: 1,
        niv: 1,
      }
    )
    .exec();
};

exports.listfilenivIII = (postId) => {
  return fileniviii.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.createsPost = (post) => {
  const newSpost = new sfile(post);
  return newSpost.save();
};

exports.sposts = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.findAccessNivZERO = (postId) => {
  return Post.findOne(
    { _id: postId },
    {
      access: 1,
    }
  ).exec();
};

exports.FindAccessNivI = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        access: 1,
      }
    )
    .exec();
};

exports.findAuthorFolderNivZeroUser = (postId) => {
  return Post.findOne(
    { _id: postId },
    {
      author: 1,
    }
  ).exec();
};

exports.findAuthorFolderNivIUser = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.findUsernameFolderNivZeroUser = (postId) => {
  return Post.find(
    { _id: postId },
    {
      username: 1,
    }
  ).exec();
};

exports.findUsernameFolderNivIUser = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        username: 1,
      }
    )
    .exec();
};

exports.createFolderUserNivZero = (post) => {
  const newfoldersharednivi = new file(post);
  return newfoldersharednivi.save();
};

exports.createFolderUserNivI = (post) => {
  const newfoldersharednivii = new foldernivii(post);
  return newfoldersharednivii.save();
};

exports.getPostUser = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.getFileUser = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.idListPostNivII = (postId) => {
  return foldernivii.findOne({ _id: postId }).exec();
};

exports.createPaniers = (body) => {
  const newpanier = new panier(body);
  return newpanier.save();
};

exports.createawaitcomm = (body) => {
  const newawaitcomm = new awaitcomm(body);
  return newawaitcomm.save();
};

exports.statusawaitadd = (postId, post) => {
  return awaitcomm.findByIdAndUpdate(
    postId,
    {
      status: post,
    },
    { runValidators: true }
  );
};

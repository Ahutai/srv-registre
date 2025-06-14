// FOLDER DE NIVEAU 0
const Post = require("../database/models/post.model");

// FOLDER DE NIVEAU 1
const file = require("../database/models/files");

// FILES DE NIVEAU 1
const files = require("../database/models/filess");

// FOLDER DE NIVEAU 2
const foldernivii = require("../database/models/foldernivii");

// FILES DE NIVEAU 2
const sfile = require("../database/models/sfile");

// FOLDER DE NIVEAU 3
const folderniviii = require("../database/models/folderniviii");

// FILES DE NIVEAU 3
const fileniviii = require("../database/models/fileniviii");

exports.getPosts = () => {
  return Post.find({}).exec();
};

exports.findUsernameFolderNivII = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        username: 1,
      }
    )
    .exec();
};

exports.findUsernameFolderListII = (postId) => {
  return foldernivii
    .find(
      { _id: postId },
      {
        username: 1,
      }
    )
    .exec();
};

exports.getFolder = (authorId) => {
  return file.find({ author: authorId }).populate("author").exec();
};

exports.getPostsss = () => {
  return file.find({}).exec();
};

exports.sfiles = (postId) => {
  return files.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.listfolderniviii = (postId) => {
  return folderniviii.find({ author: postId }).sort({ sort: 1 }).exec();
};

exports.findfoldernivII = (postId) => {
  return foldernivii.find({ author: postId }).sort({ updown: -1 }).exec();
};

exports.findfileniviii = (postId) => {
  return fileniviii.find({ author: postId }).sort({ updown: -1 }).exec();
};

exports.getauthorr = (postId) => {
  return files
    .find(
      { _id: postId },
      {
        author: 1,
      }
    )
    .sort({ updown: -1 })
    .exec();
};

exports.getauthor = (postId) => {
  return sfile
    .find(
      { _id: postId },
      {
        author: 1,
      }
    )
    .sort({ updown: -1 })
    .exec();
};

exports.findByAuthor = (postId) => {
  return Post.findOne(
    { _id: postId },
    {
      author: 1,
    }
  ).exec();
};

exports.findAuthorFolderListII = (postId) => {
  return foldernivii
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.findByAuthorFolderNivII = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.getaccessfoldernivi = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        access: 1,
      }
    )
    .sort({ updown: -1 })
    .exec();
};

exports.findFolderAccessNivII = (postId) => {
  return foldernivii
    .findOne(
      { _id: postId },
      {
        access: 1,
      }
    )
    .sort({ updown: -1 })
    .exec();
};

exports.fedd = (postId) => {
  return file
    .find(
      { _id: postId },
      {
        author: 1,
      }
    )
    .sort({ updown: -1 })
    .exec();
};

exports.getcontentnivii = (postId) => {
  return foldernivii
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

exports.getContentFoldernivII = (postId) => {
  return foldernivii
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

exports.getsfile = (postId) => {
  return sfile
    .find(
      { _id: postId },
      {
        content: 1,
        niv: 1,
      }
    )
    .exec();
};

exports.updatess = (postId) => {
  return sfile
    .findOne(
      { _id: postId },
      {
        name: 1,
      }
    )
    .exec();
};

exports.PostedFile = (postId) => {
  return Post.findOne(
    { _id: postId },
    {
      author: 1,
    }
  ).exec();
};

exports.updates = (postId) => {
  return sfile
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.updatesFolderNivII = (postId) => {
  return foldernivii
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.AddAccess = (postId, acc) => {
  return Post.findByIdAndUpdate(postId, {
    access: acc,
  }).exec();
};

exports.AddAccessNivII = (postId, acc) => {
  return foldernivii
    .findByIdAndUpdate(postId, {
      access: acc,
    })
    .exec();
};

exports.AddAccessNivI = (postId, acc) => {
  return file
    .findByIdAndUpdate(postId, {
      access: acc,
    })
    .exec();
};

exports.DoneAccess = (postId, acc) => {
  return Post.findByIdAndUpdate(postId, {
    access: acc,
  }).exec();
};

exports.DoneAccessNivII = (postId, acc) => {
  return foldernivii
    .findByIdAndUpdate(postId, {
      access: acc,
    })
    .exec();
};

exports.DoneAccessNivI = (postId, acc) => {
  return file
    .findByIdAndUpdate(postId, {
      access: acc,
    })
    .exec();
};

exports.upDatess = (postId) => {
  return files
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.updateFileNivIII = (postId) => {
  return fileniviii
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.awaitedd = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        author: 1,
      }
    )
    .exec();
};

exports.getUpdown = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        updown: 1,
      }
    )
    .exec();
};

exports.getPostss = () => {
  return Post.findOne(
    {},
    {
      "file.name": 1,
    }
  ).exec();
};

exports.createPost = (post) => {
  const newPost = new Post(post);
  return newPost.save();
};

exports.createFileForPostList = (post) => {
  const newFilePostList = new files(post);
  return newFilePostList.save();
};

exports.createFileNivIII = (post) => {
  const newfileniviii = new fileniviii(post);
  return newfileniviii.save();
};

exports.createPostt = (post) => {
  const newPost = new file(post);
  return newPost.save();
};

exports.createFolderListnivIII = (post) => {
  const newfolderniviii = new folderniviii(post);
  return newfolderniviii.save();
};

exports.createFolderNivII = (post) => {
  const newFolder = new foldernivii(post);
  return newFolder.save();
};

exports.deletePost = (postId) => {
  return Post.findByIdAndDelete(postId).exec();
};

exports.deletePostt = (postId) => {
  return file.findByIdAndDelete(postId).exec();
};

exports.deletefoldernivII = (postId) => {
  return foldernivii.findByIdAndDelete(postId).exec();
};

exports.sfileDelete = (postId) => {
  return sfile.findByIdAndDelete(postId).exec();
};

exports.sfileDeletes = (postId) => {
  return files.findByIdAndDelete(postId).exec();
};

exports.delFileNivIII = (postId) => {
  return fileniviii.findByIdAndDelete(postId).exec();
};

exports.deleteAll = (postId) => {
  return file.deleteMany({ author: postId }).exec();
};

exports.getPost = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.getIdNivII = (postId) => {
  return foldernivii.findOne({ _id: postId }).exec();
};

exports.sposts = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.getPosted = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.getFolderByUser = (user) => {
  return Post.find({ author: { $in: [...user.author, user._id] } })
    .populate("author")
    .exec();
};

exports.findAccessNivI = (postId) => {
  return file
    .findOne(
      { _id: postId },
      {
        access: 1,
      }
    )
    .exec();
};

exports.PostList = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.MsFile = (postId) => {
  return sfile.findOne({ _id: postId }).exec();
};

exports.MsFiles = (postId) => {
  return files.findOne({ _id: postId }).exec();
};

exports.modFilesNivIII = (postId) => {
  return fileniviii.findOne({ _id: postId }).exec();
};

exports.modFoldernivii = (postId) => {
  return foldernivii.findOne({ _id: postId }).exec();
};

exports.updatePost = (postId, post) => {
  return Post.findByIdAndUpdate(
    postId,
    {
      $set: post,
    },
    { runValidators: true }
  );
};

exports.updatesSfile = (postIded, postIdd) => {
  return sfile.findByIdAndUpdate(
    postIded,
    {
      $set: postIdd,
    },
    { runValidators: true }
  );
};

exports.updatesfoldernivii = (postIded, postIdd) => {
  return foldernivii.findByIdAndUpdate(
    postIded,
    {
      $set: postIdd,
    },
    { runValidators: true }
  );
};

exports.updatesSfiles = (postIded, postIdd) => {
  return files.findByIdAndUpdate(
    postIded,
    {
      $set: postIdd,
    },
    { runValidators: true }
  );
};

exports.updatesFileNivIII = (postIded, postIdd) => {
  return fileniviii.findByIdAndUpdate(
    postIded,
    {
      $set: postIdd,
    },
    { runValidators: true }
  );
};

exports.addedToFile = (postIded, postIdd) => {
  return Post.findByIdAndUpdate(
    postIded,
    {
      $set: postIdd,
    },
    { runValidators: true }
  );
};

exports.addToFolder = (postIded, post) => {
  return file.findByIdAndUpdate(
    postIded,
    {
      $set: post,
    },
    { runValidators: true }
  );
};

exports.findmodal = (postId) => {
  return sfile
    .find(
      { _id: postId },
      {
        addfile: 1,
        type: 1,
      }
    )
    .exec();
};

exports.findmodalll = (postId) => {
  return fileniviii
    .find(
      { _id: postId },
      {
        addfiless: 1,
        type: 1,
      }
    )
    .exec();
};

exports.findmodall = (postId) => {
  return files
    .find(
      { _id: postId },
      {
        addfiles: 1,
        type: 1,
      }
    )
    .exec();
};

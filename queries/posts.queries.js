const Post = require("../database/models/post.model");
const file = require("../database/models/files");
const files = require("../database/models/filess");
const sfile = require("../database/models/sfile");
const foldernivii = require("../database/models/foldernivii");
const folderniviii = require("../database/models/folderniviii");

exports.getPosts = () => {
  return Post.find({}).exec();
};

exports.getFolderByUser = (user) => {
  return Post.find({ author: { $in: [...user.author, user._id] } })
    .populate("author")
    .exec();
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

exports.getFolderToUser = (authorId) => {
  return Post.find({ author: authorId }).populate("author").exec();
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

exports.sfile = (postId) => {
  return sfile.find({ author: postId }).sort({ sort: 1 }).exec();
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

exports.getPostedd = (postId) => {
  return file.find({ author: postId }).sort({ updown: -1 }).exec();
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

exports.getposted = (postId) => {
  return Post.find(
    { _id: postId },
    {
      _id: 1,
      content: 1,
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

exports.createsPost = (post) => {
  const newSpost = new sfile(post);
  return newSpost.save();
};

exports.createFileForPostList = (post) => {
  const newFilePostList = new files(post);
  return newFilePostList.save();
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

exports.sfileDelete = (postId) => {
  return sfile.findByIdAndDelete(postId).exec();
};

exports.sfileDeletes = (postId) => {
  return files.findByIdAndDelete(postId).exec();
};

exports.deleteAll = (postId) => {
  return file.deleteMany({ author: postId }).exec();
};

exports.getPost = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.getidlistserver = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.sposts = (postId) => {
  return file.findOne({ _id: postId }).exec();
};

exports.idListPostNivII = (postId) => {
  return foldernivii.findOne({ _id: postId }).exec();
};

exports.getPosted = (postId) => {
  return file.findOne({ _id: postId }).exec();
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

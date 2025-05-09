const Post = require("../database/models/post.model");
const file = require("../database/models/files");
const sfile = require("../database/models/sfile");

exports.getPosts = () => {
  return Post.find({}).exec();
};

exports.getFolderByUser = (user) => {
  return Post.find({ author: { $in: [...user.author, user._id] } })
    .populate("author")
    .exec();
};

exports.getFolderToUser = (authorId) => {
  return Post.find({ author: authorId }).populate("author").exec();
};

exports.getPostsss = () => {
  return file.find({}).exec();
};

exports.sfile = (postId) => {
  return sfile.find({ author: postId }).sort({ updown: -1 }).exec();
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

exports.createPostt = (post) => {
  const newPost = new file(post);
  return newPost.save();
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

exports.deleteAll = (postId) => {
  return file.deleteMany({ author: postId }).exec();
};

exports.getPost = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.sposts = (postId) => {
  return file.findOne({ _id: postId }).exec();
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
      }
    )
    .exec();
};

const Post = require("../database/models/post.model");
const file = require("../database/models/files");

exports.getPosts = () => {
  return Post.find({}).exec();
};

exports.getPostsss = () => {
  return file.find({}).exec();
};

exports.getPostedd = (postId) => {
  return file.find({ author: postId }).exec();
};

exports.getposted = (postId) => {
  return Post.find(
    { _id: postId },
    {
      content: 1,
    }
  ).exec();
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

exports.getPost = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.getPosted = (postId) => {
  return file.findOne({ _id: postId }).exec();
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

exports.addToFolder = (postIded, post) => {
  return file.findByIdAndUpdate(
    postIded,
    {
      $set: post,
    },
    { runValidators: true }
  );
};

const Post = require("../database/models/post.model");

exports.getPosts = () => {
  return Post.find({}).exec();
};

exports.createPost = (post) => {
  const newPost = new Post(post);
  return newPost.save();
};

exports.deletePost = (postId) => {
  return Post.findByIdAndDelete(postId).exec();
};

exports.getPost = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.getPostt = (postId) => {
  return Post.findOne({ _id: postId }).exec();
};

exports.updatePost = (postId, post) => {
  return Post.findByIdAndUpdate(
    postId,
    { $set: post },
    { runValidators: true }
  );
};

exports.addToFolder = (postId, postt) => {
  return Post.findByIdAndUpdate(postId, {
    $set: postt,
  });
};

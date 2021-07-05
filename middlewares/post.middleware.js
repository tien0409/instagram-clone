const asyncHandler = require("express-async-handler");

const Post = require("../models/post.model");

const getPostId = asyncHandler(async (req, res, next, postId) => {
  if (postId.match(/^[0-9a-fA-F]{24}$/)) {
    const postReq = await Post.findById(postId);
    if (postReq) {
      req.postReq = postReq;
      return next();
    }
  }
  res.status(404);
  next(new Error("Post not found"));
});

module.exports = { getPostId };

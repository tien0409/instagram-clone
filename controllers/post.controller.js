const { validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Post = require("../models/post.model");

/*
 * @desc  create post
 * @route POST /api/post
 * @access Private
 */
const createPost = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array()[0].msg);
  }

  const { imagePost, caption } = req.body;
  const { _id, username, avatar } = req.user;

  const post = new Post({
    imagePost,
    caption,
    user: _id,
    name: username,
    avatar,
  });

  await post.save();
  req.user.postsCreated.push(post._id);
  await req.user.save();

  res.status(201).json(post);
});

/*
 * @desc  get all post
 * @route GET /api/post
 * @access Private
 */
const getAllPost = asyncHandler(async (req, res) => {
  const { following } = req.user;
  const listUserGetPost = [...following, req.user._id];

  const posts = await Post.find({ user: { $in: listUserGetPost } }).sort({
    createdAt: "desc",
  });

  res.status(200).json(posts);
});

/*
 * @desc  get all post user created by userId
 * @route GET /api/post/created/:username
 * @access Private
 */
const getAllPostByUserId = asyncHandler(async (req, res) => {
  const { userReq } = req;

  const posts = await Post.find({ user: userReq._id }).sort({
    createdAt: "desc",
  });
  res.status(200).json(posts);
});

/*
 * @desc  user like post
 * @route GET /api/post/like/:postId
 * @access Private
 */
const likePost = asyncHandler(async (req, res) => {
  const { postReq, user } = req;

  // unlike
  if (postReq.likes.includes(user._id)) {
    await Post.updateOne({ _id: postReq._id }, { $pull: { likes: user._id } });
  } else {
    // like
    await Post.updateOne({ _id: postReq._id }, { $push: { likes: user._id } });
  }
  await postReq.save();

  res.status(200).json({ msg: "Like success" });
});

module.exports = {
  createPost,
  getAllPost,
  getAllPostByUserId,
  likePost,
};

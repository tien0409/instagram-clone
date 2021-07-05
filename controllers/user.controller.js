const { validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const generateToken = require("../utils/generate-token");
const Post = require("../models/post.model");

/*
 * @desc  sign up user
 * @route POST /api/user/signup
 * @access Public
 */
const signUp = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array()[0].msg);
  }
  const { email, username, fullName, password } = req.body;

  const newUser = new User({ email, username, fullName, password });
  await newUser.save();

  res.status(201).json({
    _id: newUser._id,
    email: newUser.email,
    username: newUser.username,
    fullName: newUser.fullName,
    followers: newUser.followers,
    following: newUser.following,
    avatar: newUser.avatar,
    token: generateToken(newUser._id),
  });
});

/*
 * @desc  sign in user
 * @route POST /api/user/signin
 * @access Public
 */
const signIn = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array()[0].msg);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.isCorrectPassword(password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      fullName: user.fullName,
      followers: user.followers,
      following: user.following,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Email or Password incorrect. Please try again");
  }
});

/*
 * @desc  check auth
 * @route POST /api/user/auth
 * @access Public
 */
const authSignIn = asyncHandler(async (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    email: req.user.email,
    username: req.user.username,
    avatar: req.user.avatar,
    fullName: req.user.fullName,
    followers: req.user.followers,
    following: req.user.following,
  });
});

/*
 * @desc  get all user suggestion
 * @route GET /api/user/suggestion
 * @access Private
 */
const getUserSuggestion = asyncHandler(async (req, res) => {
  const { _id: idLoggedIn, following } = req.user;

  const users = await User.find({ _id: { $ne: idLoggedIn, $nin: following } });

  res.status(200).json(users);
});

/*
 * @desc  get info user details
 * @route POST /api/user/:id
 * @access Private
 */
const getUserDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const postsCreated = await Post.find({ user: id });

  res.status(200).json({
    _id: user._id,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    fullName: user.fullName,
    followers: user.followers,
    following: user.following,
    numPostCreated: postsCreated.length,
  });
});

/*
 * @desc  follow user
 * @route POST /api/user/follow
 * @access Private
 */
const followUser = asyncHandler(async (req, res) => {
  const { following, id } = req.user;
  const { userId } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("Can not follow. User not found");
  }

  // user logged in following
  if (following.includes(user._id)) {
    const index = following.findIndex((id) => id === user._id);
    following.splice(index, 1);
  } else {
    following.push(user._id);
  }

  // user followed
  if (user.followers.includes(id)) {
    const index = user.followers.findIndex((i) => i === id);
    user.followers.splice(index, 1);
  } else {
    user.followers.push(id);
  }

  await req.user.save();

  res.status(200).json();
});

module.exports = {
  signUp,
  signIn,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
};

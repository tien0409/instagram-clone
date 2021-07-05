const { validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const generateToken = require("../utils/generate-token");

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
    postsCreated: newUser.postsCreated,
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
      postsCreated: user.postsCreated,
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
    postsCreated: req.user.following,
  });
});

/*
 * @desc  get all user suggestion
 * @route GET /api/user/suggestion
 * @access Private
 */
const getUserSuggestion = asyncHandler(async (req, res) => {
  const { _id: idLoggedIn, following } = req.user;

  const users = await User.find({
    _id: { $ne: idLoggedIn, $nin: following },
  }).select("-password");

  res.status(200).json(users);
});

/*
 * @desc  get info user details
 * @route GET /api/user/:id
 * @access Private
 */
const getUserDetails = asyncHandler(async (req, res) => {
  const { userReq } = req;

  res.status(200).json({
    _id: userReq._id,
    email: userReq.email,
    username: userReq.username,
    avatar: userReq.avatar,
    fullName: userReq.fullName,
    followers: userReq.followers,
    following: userReq.following,
    postsCreated: userReq.postsCreated,
  });
});

/*
 * @desc  follow user
 * @route POST /api/user/follow
 * @access Private
 */
const followUser = asyncHandler(async (req, res) => {
  const { following, id: idLoggedIn } = req.user;
  const { userId } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("Can not follow. User not found");
  }

  // user logged in following
  if (following.includes(userId)) {
    await User.updateOne({ _id: idLoggedIn }, { $pull: { following: userId } });
  } else {
    await User.updateOne({ _id: idLoggedIn }, { $push: { following: userId } });
  }

  // user followed
  if (user.followers.includes(idLoggedIn)) {
    await User.updateOne({ _id: userId }, { $pull: { followers: idLoggedIn } });
  } else {
    await User.updateOne({ _id: userId }, { $push: { followers: idLoggedIn } });
  }

  await user.save();
  await req.user.save();

  res.status(200).json({ msg: "Follow success" });
});

module.exports = {
  signUp,
  signIn,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
};

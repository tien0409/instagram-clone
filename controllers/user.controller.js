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
    throw new Error(errors.array()[0].msg);
  }

  const { email, username, fullName, password } = req.body;

  const newUser = new User({ email, username, fullName, password });
  await newUser.save();

  res.json({
    _id: user._id,
    email: user.email,
    username: user.username,
    fullName: user.fullName,
    followers: user.followers,
    following: user.following,
    token: generateToken(user._id),
  });
});

/*
 * @desc  sign in user
 * @route POST /api/user/signin
 * @access Public
 */
const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.isCorrectPassword(password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      username: user.username,
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
    fullName: req.user.fullName,
    followers: req.user.followers,
    following: req.user.following,
  });
});

module.exports = { signUp, signIn, authSignIn };

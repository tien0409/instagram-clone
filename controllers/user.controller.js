const { validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");

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

  res.json(newUser);
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
    res.status(200).json(user);
  } else {
    res
      .status(401)
      .json({ msg: "Email or Password incorrect. Please try again" });
  }
});

module.exports = { signUp, signIn };

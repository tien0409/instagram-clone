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

module.exports = { signUp };

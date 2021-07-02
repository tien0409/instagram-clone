const { validationResult } = require("express-validator");

/*
 * @desc  sign up user
 * @route POST /api/user/signup
 * @access Public
 */
const signUpUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(errors.array()[0].msg);
  }

  const { email, username, fullName, password } = req.body;

  res.json({});
};

module.exports = { signUpUser };

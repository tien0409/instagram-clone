const { check } = require("express-validator");
const User = require("../models/user.model");

const signUpValidator = () => [
  check("email", "Email is not valid").isEmail(),
  check("email").custom((email) =>
    User.findOne({ email }).then((emailExists) => {
      if (emailExists) {
        throw new Error("Email already in use");
      }
    }),
  ),
  check("email")
    .custom((email) => !/\s/.test(email))
    .withMessage("No spaces are allowed in the email"),

  check("username", "Username is required").not().isEmpty(),
  check(
    "username",
    "Username is more than 4 characters and less than 15 characters",
  ).isLength({ min: 4, max: 15 }),
  check("username").custom((username) =>
    User.findOne({ username }).then((usernameExists) => {
      if (usernameExists) {
        throw new Error("Username already in use");
      }
    }),
  ),
  check("username")
    .custom((username) => !/\s/.test(username))
    .withMessage("No spaces are allowed in the username"),

  check("fullName", "Full name is required").not().isEmpty(),
  check("password", "Password must more than 6 characters").isLength({
    min: 6,
  }),
  check("password")
    .custom((password) => !/\s/.test(password))
    .withMessage("No spaces are allowed in the password"),
];

const signInValidator = () => [
  check("email", "Email is not valid").isEmail(),
  check("email")
    .custom((email) => !/\s/.test(email))
    .withMessage("No spaces are allowed in the email"),

  check("password", "Password must more than 6 characters").isLength({
    min: 6,
  }),
  check("password")
    .custom((password) => !/\s/.test(password))
    .withMessage("No spaces are allowed in the password"),
];

const createCommentValidator = () => [
  check("content", "Comment cannot white spaces").not().isEmpty(),
];

const updateInfoValidator = () => [
  check("fullName", "Full name is required").not().isEmpty(),
  check("email", "Email is not valid").isEmail(),
  check("email").custom((email, { req }) => {
    const { user } = req;
    return User.findOne({ email }).then((emailExists) => {
      if (emailExists && emailExists.email !== user.email) {
        throw new Error("Email already in use");
      }
    });
  }),
  check("email")
    .custom((email) => !/\s/.test(email))
    .withMessage("No spaces are allowed in the email"),

  check("username", "Username is required").not().isEmpty(),
  check(
    "username",
    "Username is more than 4 characters and less than 15 characters",
  ).isLength({ min: 4, max: 15 }),
  check("username").custom((username, { req }) => {
    const { user } = req;
    return User.findOne({ username }).then((userExist) => {
      if (userExist && userExist.username !== user.username) {
        throw new Error("Username already in use");
      }
    });
  }),
  check("username")
    .custom((username) => !/\s/.test(username))
    .withMessage("No spaces are allowed in the username"),

  check("gender", "Gender is required").not().isEmpty(),

  check("phoneNumber", "Phone number is required").not().isEmpty(),
  check("phoneNumber")
    .custom((phoneNumber) => !phoneNumber.trim().length !== 10)
    .withMessage("Phone number only contains 10 digits"),
];

const updatePasswordValidator = () => [
  check("password").custom((password, { req }) => {
    if (password !== req.body.confirmPassword) {
      throw new Error("Password confirm does not match password");
    }
  }),
];

module.exports = {
  signUpValidator,
  signInValidator,
  createCommentValidator,
  updateInfoValidator,
  updatePasswordValidator,
};

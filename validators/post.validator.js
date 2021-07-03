const { check } = require("express-validator");

const createPostValidator = () => [
  check("imagePost", "Image post is required").not().isEmpty(),
];

module.exports = { createPostValidator };

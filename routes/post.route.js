const express = require("express");

const router = express.Router();
const {
  createPost,
  getAllPost,
  getAllPostByUserId,
} = require("../controllers/post.controller");
const { auth } = require("../middlewares/auth.middleware");
const { createPostValidator } = require("../validators/post.validator");

router
  .route("/")
  .post(auth, createPostValidator(), createPost)
  .get(auth, getAllPost);
router.route("/:userId").get(auth, getAllPostByUserId);

module.exports = router;

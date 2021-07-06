const express = require("express");

const router = express.Router();
const {
  createPost,
  getAllPost,
  getAllPostByUserId,
  likePost,
} = require("../controllers/post.controller");
const { auth } = require("../middlewares/auth.middleware");
const { createPostValidator } = require("../validators/post.validator");
const { getUserId, getUsername } = require("../middlewares/user.middleware");
const { getPostId } = require("../middlewares/post.middleware");

router.param("userId", getUserId);
router.param("username", getUsername);
router.param("postId", getPostId);

router
  .route("/")
  .post(auth, createPostValidator(), createPost)
  .get(auth, getAllPost);
router.route("/created/:username").get(auth, getAllPostByUserId);
router.route("/like/:postId").get(auth, likePost);

module.exports = router;

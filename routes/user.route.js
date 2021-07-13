const express = require("express");

const router = express.Router();
const {
  signUp,
  signIn,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
  commentPost,
  updateAvatar,
  deleteAvatar,
  updateInfo,
  updatePassword,
} = require("../controllers/user.controller");
const {
  signUpValidator,
  signInValidator,
  createCommentValidator,
  updateInfoValidator,
  updatePasswordValidator,
} = require("../validators/user.validator");
const { auth } = require("../middlewares/auth.middleware");
const { getUserId, getUsername } = require("../middlewares/user.middleware");
const { getPostId } = require("../middlewares/post.middleware");

router.param("userId", getUserId);
router.param("username", getUsername);
router.param("postId", getPostId);

router.post("/signup", signUpValidator(), signUp);
router.route("/signin", signInValidator()).post(signIn);
router.get("/auth", auth, authSignIn);
router.route("/suggestion").get(auth, getUserSuggestion);
router.route("/details/:username").get(auth, getUserDetails);
router.route("/follow").post(auth, followUser);
router.route("/avatar").put(auth, updateAvatar).delete(auth, deleteAvatar);
router.route("/password").put(auth, updatePasswordValidator(), updatePassword);
router
  .route("/comment/:postId")
  .post(auth, createCommentValidator(), commentPost);
router.route("/").put(auth, updateInfoValidator(), updateInfo);

module.exports = router;

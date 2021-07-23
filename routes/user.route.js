const express = require ("express");
const passport = require ("passport");

const router = express.Router ();
const {
  signUp,
  signIn,
  signInWithFb,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
  commentPost,
  updateAvatar,
  deleteAvatar,
  updateInfo,
  updatePassword,
  findUser,
} = require ("../controllers/user.controller");
const {
  signUpValidator,
  signInValidator,
  createCommentValidator,
  updateInfoValidator,
  updatePasswordValidator,
} = require ("../validators/user.validator");
const {auth} = require ("../middlewares/auth.middleware");
const {getUserId, getUsername} = require ("../middlewares/user.middleware");
const {getPostId} = require ("../middlewares/post.middleware");

router.param ("userId", getUserId);
router.param ("username", getUsername);
router.param ("postId", getPostId);

router.post ("/signup", signUpValidator (), signUp);
router.route ("/signin/fb").post (passport.authenticate ("facebook-token", {session: false}), signInWithFb);
router.route ("/signin", signInValidator ()).post (signIn);
router.get ("/auth", passport.authenticate ('jwt', {session: false}), authSignIn);
router.route ("/suggestion").get (auth, getUserSuggestion);
router.route ("/details/:username").get (auth, getUserDetails);
router.route ("/follow").post (auth, followUser);
router.route ("/avatar").put (auth, updateAvatar).delete (auth, deleteAvatar);
router.route ("/password").put (auth, updatePasswordValidator (), updatePassword);
router
  .route ("/comment/:postId")
  .post (auth, createCommentValidator (), commentPost);
router
  .route ("/")
  .put (auth, updateInfoValidator (), updateInfo)
  .get (auth, findUser);

module.exports = router;

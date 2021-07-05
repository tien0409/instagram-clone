const express = require("express");

const router = express.Router();
const {
  signUp,
  signIn,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
} = require("../controllers/user.controller");
const {
  signUpValidator,
  signInValidator,
} = require("../validators/user.validator");
const { auth } = require("../middlewares/auth.middleware");
const { getUserId } = require("../middlewares/user.middleware");

router.param("userId", getUserId);

router.post("/signup", signUpValidator(), signUp);
router.route("/signin", signInValidator()).post(signIn);
router.get("/auth", auth, authSignIn);
router.route("/suggestion").get(auth, getUserSuggestion);
router.route("/:userId").get(auth, getUserDetails);
router.route("/follow").post(auth, followUser);

module.exports = router;

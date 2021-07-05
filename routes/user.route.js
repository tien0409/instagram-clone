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

router.post("/signup", signUpValidator(), signUp);
router.route("/signin", signInValidator()).post(signIn);
router.get("/auth", auth, authSignIn);
router.route("/suggestion").get(auth, getUserSuggestion);
router.route("/:id").get(auth, getUserDetails);
router.route("/follow").post(auth, followUser);

module.exports = router;

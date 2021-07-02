const express = require("express");

const router = express.Router();
const { signUp, signIn } = require("../controllers/user.controller");
const {
  signUpValidator,
  signInValidator,
} = require("../validators/user.validator");

router.post("/signup", signUpValidator(), signUp);
router.post("/signin", signInValidator(), signIn);

module.exports = router;

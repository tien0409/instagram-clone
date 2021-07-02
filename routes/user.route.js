const express = require("express");

const router = express.Router();
const { signUp } = require("../controllers/user.controller");
const { signUpValidator } = require("../validators/user.validator");

router.post("/signup", signUpValidator(), signUp);

module.exports = router;

const express = require("express");

const router = express.Router();
const { signUpUser } = require("../controllers/user.controller");
const { signUpValidator } = require("../validators/user.validator");

router.post("/signup", signUpValidator(), signUpUser);

module.exports = router;

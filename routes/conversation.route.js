const express = require("express");

const router = express.Router();
const {
  createConversation,
} = require("../controllers/conversation.controller");
const { auth } = require("../middlewares/auth.middleware");
const { getUserId } = require("../middlewares/user.middleware");

router.param("userId", getUserId);

router.route("/:userId").post(auth, createConversation);

module.exports = router;

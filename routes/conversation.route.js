const express = require("express");

const router = express.Router();
const {
  createConversation,
  getConversation,
} = require("../controllers/conversation.controller");
const { auth } = require("../middlewares/auth.middleware");
const { getUserId } = require("../middlewares/user.middleware");
const { getConversationId } = require("../middlewares/conversation.middleware");

router.param("userId", getUserId);
router.param("conversationId", getConversationId);

router.route("/:userId").post(auth, createConversation);
router.route("/:conversationId").get(auth, getConversation);

module.exports = router;

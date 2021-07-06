const express = require("express");

const router = express.Router();
const { auth } = require("../middlewares/auth.middleware");
const { getConversationId } = require("../middlewares/conversation.middleware");

router.param("conversationId", getConversationId);

module.exports = router;

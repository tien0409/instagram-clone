const express = require("express");

const router = express.Router();
const { auth } = require("../middlewares/auth.middleware");
const { getConversationId } = require("../middlewares/conversation.middleware");
const { getAllMessage } = require("../controllers/message.controller");

router.param("conversationId", getConversationId);

router.route("/:conversationId").get(auth, getAllMessage);

module.exports = router;

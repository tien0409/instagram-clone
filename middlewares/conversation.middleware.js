const asyncHandler = require("express-async-handler");

const Conversation = require("../models/post.model");

const getConversationId = asyncHandler(
  async (req, res, next, conversationId) => {
    if (conversationId.match(/^[0-9a-fA-F]{24}$/)) {
      const conversationReq = await Conversation.findById(conversationId);
      if (conversationReq) {
        req.conversationReq = conversationReq;
        return next();
      }
    }
    res.status(404);
    next(new Error("Post not found"));
  },
);

module.exports = { getConversationId };

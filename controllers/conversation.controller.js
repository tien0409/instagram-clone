const asyncHandler = require("express-async-handler");

const Conversation = require("../models/conversation.model");

const createConversation = asyncHandler(async (req, res) => {
  const { userReq, user } = req;

  const conversation = new Conversation({ members: [userReq._id, user._id] });
  await conversation.save();

  res.status(201).json({ _id: conversation._id });
});

module.exports = { createConversation };

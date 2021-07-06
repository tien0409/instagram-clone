const asyncHandler = require("express-async-handler");

const Conversation = require("../models/conversation.model");

/*
 * @desc create conversation, if conversation exist then response conversation exist
 * @route POST /api/conversation/:userId
 * @access Private
 */
const createConversation = asyncHandler(async (req, res) => {
  const { userReq, user } = req;

  const conversationExist = await Conversation.findOne({
    members: [userReq._id, user._id],
  });

  if (conversationExist) {
    return res.status(200).json({ _id: conversationExist._id });
  }

  const conversation = new Conversation({ members: [userReq._id, user._id] });
  await conversation.save();

  res.status(201).json({ _id: conversation._id });
});

module.exports = { createConversation };

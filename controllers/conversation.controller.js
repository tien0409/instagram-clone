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
    members: { $in: [userReq._id, user._id] },
  });

  if (conversationExist) {
    return res.status(200).json({ _id: conversationExist._id });
  }

  const conversation = new Conversation({ members: [userReq._id, user._id] });
  await conversation.save();

  res.status(201).json({ _id: conversation._id });
});

/*
 * @desc get all conversation and info user in conversation
 * @route GET /api/conversation
 * @access Private
 */
const getAllConversation = asyncHandler(async (req, res) => {
  const conversations = await Conversation.find().populate(
    "members",
    "avatar username",
  );

  res.status(201).json(conversations);
});

module.exports = { createConversation, getAllConversation };

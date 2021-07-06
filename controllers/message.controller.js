const asyncHandler = require("express-async-handler");

const Message = require("../models/message.model");

/*
 * @desc  get all message in conversation
 * @route Get /api/message/:conversationId
 * @access Private
 */
const getAllMessage = asyncHandler(async (req, res) => {
  const { conversationReq } = req;

  const messages = await Message.find({
    conversation: conversationReq._id,
  });

  res.status(200).json({ messages });
});

module.exports = { getAllMessage };

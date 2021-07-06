const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const Conversation = conversationSchema.model(
  "conversation",
  conversationSchema,
);

module.exports = Conversation;

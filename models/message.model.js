const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "conversation",
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;

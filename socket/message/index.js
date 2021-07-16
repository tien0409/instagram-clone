const Message = require("../../models/message.model");
const Conversation = require("../../models/conversation.model");
const User = require("../../models/user.model");

module.exports = function (socket, io) {
  const getAllMessageInConversation = async (data) => {
    const { usernameReq, user } = data;

    const userReq = await User.findOne({ username: usernameReq });

    let conversation = await Conversation.findOne({
      members: { $all: [userReq._id, user._id] },
    });

    // create conversation and send conversation new to client
    if (!conversation) {
      conversation = new Conversation({
        members: [userReq._id, user._id],
      });
      await conversation.save();

      // send to client => client add to all conversation
      conversationInfo = await conversation
        .populate("members", "avatar username")
        .execPopulate();

      socket.emit("server-send-new-conversation", conversation);
    }

    await Message.updateMany(
      { conversation: conversation._id },
      { unread: false },
    );
    const messages = await Message.find({
      conversation: conversation._id,
    });

    socket.emit("server-send-all-message", messages);
  };

  const getLastMessage = async (conversationId) => {
    const lastMessage = await Message.findOne({
      conversation: conversationId,
    }).sort({ createdAt: -1 });

    socket.emit("server-send-last-message", lastMessage);
  };

  socket.on("client-get-all-message", getAllMessageInConversation);
  socket.on("client-get-last-message", getLastMessage);
};

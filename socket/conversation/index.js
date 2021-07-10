const Conversation = require("../../models/conversation.model");
const User = require("../../models/user.model");

module.exports = function (socket, io) {
  const createConversation = async (data) => {
    const { usernameReq, user } = data;
    socket.emit("server-creating-conversation");

    const userReq = await User.findOne({
      username: usernameReq,
    });

    socket.join(`${userReq.username}-${user.username}`);
    socket.join(`${user.username}-${userReq.username}`);

    const conversationExist = await Conversation.findOne({
      members: { $all: [userReq._id, user._id] },
    });

    if (!conversationExist) {
      // add conversation
      const conversation = new Conversation({
        members: [userReq._id, user._id],
      });
      await conversation.save();

      socket.emit("server-create-conversation", {
        conversationId: conversation._id,
        usernameReq: usernameReq,
      });
    } else {
      socket.emit("server-create-conversation", {
        conversationId: conversationExist._id,
        usernameReq: usernameReq,
      });
    }
  };

  const getAllConversation = async () => {
    socket.emit("server-sending-all-conversation");

    const user = await User.findOne({ username: socket.username });
    const conversations = await Conversation.find({
      members: user._id,
    }).populate("members", "avatar username");

    socket.emit("server-send-all-conversation", conversations);
  };

  socket.on("client-create-conversation", createConversation);

  socket.on("client-get-all-conversation", getAllConversation);
};
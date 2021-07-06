const Message = require("../models/message.model");
const Conversation = require("../models/conversation.model");

const { CLIENT_URL } = require("../configs/env");

const onlineUsers = [];
const messageCurrent = [];

const socketio = (httpServer) => {
  const io = require("socket.io")(httpServer, {
    cors: {
      origin: CLIENT_URL,
    },
  });

  io.on("connection", (socket) => {
    // console.log("user connect");

    socket.on("client-online", (data) => {
      onlineUsers.push(data);
      socket.username = data;
    });

    socket.on("client-create-conversation", async (data) => {
      const { userReq, user } = data;

      const conversationExist = await Conversation.findOne({
        members: { $in: [userReq._id, user._id] },
      });

      if (conversationExist) {
        socket.emit("server-create-conversation", conversationExist._id);
      } else {
        const conversation = new Conversation({
          members: [userReq._id, user._id],
        });

        socket.join(`${userReq.username}-${user.username}`);
        socket.join(`${user.username}-${userReq.username}`);
        socket.emit("server-create-conversation", conversation._id);
        await conversation.save();
      }
    });

    socket.on("client-get-all-message", async (data) => {
      const messages = await Message.find({
        conversation: data.conversationId,
      });
      socket.emit("server-send-all-message", messages);
    });

    socket.on("client-send-message", async (data) => {
      const { conversation, content, avatar, sender } = data;
      const message = new Message({ conversation, sender, avatar, content });

      socket.emit("server-send-message", { ...data });
      await message.save();
    });

    socket.on("disconnect", () => {
      const index = onlineUsers.findIndex(
        (username) => username === socket.username,
      );
      onlineUsers.splice(index, 1);
      // console.log(`${socket.username} disconnect`);
    });
  });
};

module.exports = socketio;

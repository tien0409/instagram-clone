const Message = require("../models/message.model");
const Conversation = require("../models/conversation.model");
const User = require("../models/user.model");

const { CLIENT_URL } = require("../configs/env");

const onlineUsers = [];

const socketio = (httpServer) => {
  const io = require("socket.io")(httpServer, {
    cors: {
      origin: CLIENT_URL,
    },
  });

  io.on("connection", (socket) => {
    console.log("user connect:", socket.id);

    socket.on("client-online", (username) => {
      console.log(`${username} online`);
      const userExist = onlineUsers.find((user) => user === username);
      if (!userExist) {
        onlineUsers.push(username);
      }
      socket.username = username;
    });

    socket.on("client-get-user-logged-in", async (id) => {
      const user = await User.findById(id);
      socket.emit("server-send-user-logged-in", user);
    });

    socket.on("client-get-user-online", (username) => {
      const index = onlineUsers.findIndex((user) => user === username);
      socket.emit("server-send-user-online", index < 0 ? false : true);
    });

    socket.on("client-create-conversation", async (data) => {
      const { usernameReq, user } = data;
      socket.emit("server-creating-conversation");

      const userReq = await User.findOne({
        username: usernameReq,
      });

      const conversationExist = await Conversation.findOne({
        members: { $all: [userReq._id, user._id] },
      });

      if (conversationExist) {
        socket.emit("server-create-conversation", userReq.username);
      } else {
        const conversation = new Conversation({
          members: [userReq._id, user._id],
        });

        await conversation.save();
        socket.emit("server-create-conversation", userReq.username);
      }
      socket.join(`${userReq.username}-${user.username}`);
      socket.join(`${user.username}-${userReq.username}`);
    });

    socket.on("client-get-all-conversation", async () => {
      socket.emit("server-sending-all-conversation");

      const user = await User.findOne({ username: socket.username });
      const conversations = await Conversation.find({
        members: user._id,
      }).populate("members", "avatar username");

      socket.emit("server-send-all-conversation", conversations);
    });

    socket.on("client-get-all-message", async (data) => {
      const { usernameReq, user } = data;

      const userReq = await User.findOne({ username: usernameReq });

      const conversation = await Conversation.findOne({
        members: { $in: [userReq._id, user._id] },
      });

      const messages = await Message.find({
        conversation: conversation._id,
      });

      socket.emit("server-send-all-message", { messages, conversation });
    });

    socket.on("client-send-message", async (data) => {
      const message = new Message({ ...data });

      io.sockets
        .in(data.room)
        .emit("server-send-message", { ...data, _id: message._id });
      await message.save();
    });

    socket.on("client-user-typing", (data) => {
      io.to(data.room).emit("server-user-typing");
    });

    socket.on("disconnect", () => {
      const index = onlineUsers.findIndex(
        (username) => username === socket.username,
      );
      console.log(`${onlineUsers[index]} disconnect`);
      onlineUsers.splice(index, 1);
      socket.emit("server-send-user-offline", socket.username);
    });
  });
};

module.exports = socketio;

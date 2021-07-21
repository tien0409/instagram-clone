const { CLIENT_URL } = require("../configs/env");
const userSocket = require("./user");
const conversationSocket = require("./conversation");
const messageSocket = require("./message");
const postSocket = require("./post");

const onlineUsers = [];

const socketio = (httpServer) => {
  const io = require("socket.io")(httpServer, { cors: CLIENT_URL });

  io.on("connection", (socket) => {
    console.log("user connect:", socket.id);

    socket.on("client-online", (userInfo) => {
      console.log(`${userInfo.username} online`);
      onlineUsers.push({ _id: userInfo._id, username: userInfo.username });
      socket.username = userInfo.username;
      socket._id = userInfo._id;
      socket.broadcast.emit("server-send-user-online", socket.username);
    });

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnect`);
      if (onlineUsers.length > 0) {
        const index = onlineUsers.findIndex((user) => user._id === socket._id);
        // console.log(`${onlineUsers[index].username} disconnect`);

        const userExistToo = onlineUsers.find(
          (user) => user._id === socket._id,
        );
        if (!userExistToo) {
          socket.broadcast.emit("server-send-user-offline", onlineUsers[index]);
        }
        onlineUsers.splice(index, 1);
      }
    });

    userSocket(socket, io);
    conversationSocket(socket, io);
    messageSocket(socket, io);
    postSocket(socket, io);
  });
};

module.exports = socketio;

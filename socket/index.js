const { CLIENT_URL } = require("../configs/env");

const onlineUsers = [];

const socketio = (httpServer) => {
  const io = require("socket.io")(httpServer, {
    cors: {
      origin: CLIENT_URL,
    },
  });

  io.on("connection", (socket) => {
    console.log("user connect");

    socket.on("client-online", (data) => {
      onlineUsers.push(data);
      socket.username = data;
    });

    socket.on("disconnect", () => {
      const index = onlineUsers.findIndex(
        (username) => username === socket.username,
      );
      onlineUsers.splice(index, 1);
      console.log(`${socket.username} disconnect`);
    });
  });
};

module.exports = socketio;

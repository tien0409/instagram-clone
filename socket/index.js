const Message = require("../models/message.model");
const Conversation = require("../models/conversation.model");
const User = require("../models/user.model");
const Post = require("../models/post.model");

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
      onlineUsers.push(username);
      socket.username = username;
      socket.broadcast.emit("server-send-user-online", socket.username);
    });

    socket.on("client-get-user-logged-in", async (id) => {
      const user = await User.findById(id);
      const postsCreated = await Post.find({ user: user._id });

      const userRes = Object(user, {});
      userRes.postsCreated = postsCreated;

      socket.emit("server-send-user-logged-in", userRes);
    });

    socket.on("client-get-receiver", async (username) => {
      const user = await User.findOne({ username }).select("-password");
      socket.emit("server-send-receiver", user);
    });

    socket.on("client-toggle-follow", async (data) => {
      const { userReq, user } = data;

      console.log("userReq", userReq);
      // user logged in following
      if (user.following.includes(userReq._id)) {
        await User.updateOne(
          { _id: user._id },
          { $pull: { following: userReq._id } },
        );
      } else {
        await User.updateOne(
          { _id: user._id },
          { $push: { following: userReq._id } },
        );
      }

      // userReq followed
      if (userReq.followers.includes(user._id)) {
        await User.updateOne(
          { _id: userReq._id },
          { $pull: { followers: user._id } },
        );
      } else {
        await User.updateOne(
          { _id: userReq._id },
          { $push: { followers: user._id } },
        );
      }

      const userReqInfo = await User.findById(userReq._id);

      io.emit("server-toggle-follow", userReqInfo.followers.length);
    });

    socket.on("client-create-conversation", async (data) => {
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

      const messages = await Message.find({
        conversation: conversation._id,
      });

      socket.emit("server-send-all-message", messages);
    });

    socket.on("client-send-message", async (data) => {
      const message = new Message({ ...data });

      io.to(data.room).emit("server-send-message", {
        ...data,
        _id: message._id,
      });
      await message.save();
    });

    socket.on("client-user-typing", (data) => {
      io.to(data.room).emit("server-user-typing");
    });

    socket.on("client-send-comment", async (comment) => {
      const { userId, username, avatar, content, postId } = comment;

      const newComment = {
        user: userId,
        name: username,
        avatar: avatar,
        content,
        createdAt: Date.now(),
      };

      io.emit("server-send-comment", {
        ...newComment,
        _id: `${newComment.createdAt}`,
      });

      await Post.updateOne(
        { _id: postId },
        { $push: { comments: newComment } },
      );
    });

    socket.on("client-send-toggle-like", async (data) => {
      const { postId, userId } = data;

      const post = await Post.findById(postId);
      let numLiked = post.likes.length;

      // unlike
      if (post.likes.includes(userId)) {
        numLiked -= 1;
        await Post.updateOne({ _id: post._id }, { $pull: { likes: userId } });
      } else {
        // like
        numLiked += 1;
        await Post.updateOne({ _id: post._id }, { $push: { likes: userId } });
      }

      io.emit("server-send-toggle-like", numLiked);
      await post.save();
    });

    socket.on("disconnect", () => {
      const index = onlineUsers.findIndex(
        (username) => username === socket.username,
      );
      console.log(`${onlineUsers[index]} disconnect`);

      const userExistToo = onlineUsers.find(
        (username) => username === socket.username,
      );
      if (!userExistToo) {
        socket.broadcast.emit("server-send-user-offline", onlineUsers[index]);
      }
      onlineUsers.splice(index, 1);
    });
  });
};

module.exports = socketio;

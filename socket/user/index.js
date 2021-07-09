const User = require("../../models/user.model");
const Message = require("../../models/message.model");
const Post = require("../../models/post.model");

module.exports = function (socket, io) {
  const getUserLoggedIn = async (id) => {
    const user = await User.findById(id);
    const postsCreated = await Post.find({ user: user._id });

    const userRes = Object(user, {});
    userRes.postsCreated = postsCreated;

    socket.emit("server-send-user-logged-in", userRes);
  };

  const getReceiverMessage = async (username) => {
    const user = await User.findOne({ username }).select("-password");
    socket.emit("server-send-receiver", user);
  };

  const toggleFollow = async (data) => {
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
  };

  const sendMessage = async (data) => {
    const { room, sender, conversation, content, avatar } = data;
    const message = new Message({ conversation, content, avatar, sender });

    io.to(room).emit("server-send-message", {
      ...data,
      _id: message._id,
    });
    await message.save();
  };

  socket.on("client-get-user-logged-in", getUserLoggedIn);

  socket.on("client-get-receiver", getReceiverMessage);

  socket.on("client-toggle-follow", toggleFollow);

  socket.on("client-send-message", sendMessage);

  socket.on("client-user-typing", (data) => {
    io.to(data.room).emit("server-user-typing");
  });
};

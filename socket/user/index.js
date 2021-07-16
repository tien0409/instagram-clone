const User = require("../../models/user.model");
const Message = require("../../models/message.model");
const Post = require("../../models/post.model");
const Conversation = require("../../models/conversation.model");

module.exports = function (socket, io) {
  const getUserLoggedIn = async (id) => {
    const user = await User.findById(id)
      .populate("followers", "avatar username fullName")
      .populate("following", "avatar username fullName");
    const postsCreated = await Post.find({ user: user._id });

    socket.emit("server-send-user-logged-in", {
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      fullName: user.fullName,
      followers: user.followers,
      following: user.following,
      postsCreated: postsCreated.length,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
    });
  };

  const getReceiver = async (conversationId) => {
    const userIdLoggedIn = socket._id;

    const conversation = await Conversation.findById(conversationId);
    const userId = conversation.members.find((id) => id !== userIdLoggedIn);

    const user = await User.findById(userId).select("-password");

    socket.emit("server-send-receiver", user);
  };

  const toggleFollow = async (data) => {
    const { userReq, user } = data;

    const userReqRes = await User.findById(userReq._id);
    const userRes = await User.findById(user._id);

    // user logged in following
    if (userRes.following.includes(userReq._id)) {
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
    if (userReqRes.followers.includes(user._id)) {
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

  const forcedUnfollow = async (id) => {
    await User.updateOne({ _id: socket._id }, { $pull: { followers: id } });
    await User.updateOne({ _id: id }, { $pull: { following: socket._id } });
    socket.emit("server-user-forced-unfollow", id);
  };

  socket.on("client-get-user-logged-in", getUserLoggedIn);

  socket.on("client-get-receiver", getReceiver);

  socket.on("client-toggle-follow", toggleFollow);

  socket.on("client-send-message", sendMessage);

  socket.on("client-user-forced-unfollow", forcedUnfollow);

  socket.on("client-user-typing", (data) => {
    io.to(data.room).emit("server-user-typing");
  });
};

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
    const userId = conversation.members.find((id) => {
      return String(id) !== userIdLoggedIn;
    });

    const user = await User.findById(userId).select("-password");

    socket.emit("server-send-receiver", user);
    socket.receiver = user;
  };

  const toggleFollow = async (data, cb) => {
    socket.emit("server-sending-toggle-follow");
    console.log("abc");
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

    io.emit("server-toggle-follow", {
      numFollowers: userReqInfo.followers.length,
      numFollowing: userReqInfo.following.length,
    });
    cb();
  };

  const sendMessage = async (data, cb) => {
    const { room, sender, conversation, content, avatar } = data;
    const message = new Message({ conversation, content, avatar, sender });

    await message.save();
    io.to(room).emit("server-send-message", {
      ...data,
      _id: message._id,
      conversationCurrent: socket.conversationCurrent,
      receiver: socket.receiver,
    });

    const noFirstMessage = await Message.findOne({ conversation });

    if (!noFirstMessage) {
      const conversationInfo = await Conversation.findById(
        conversation._id,
      ).populate("members", "avatar username");
      io.emit("server-send-new-conversation", conversationInfo);
    }
    cb();
  };

  const forcedUnfollow = async (id, cb) => {
    await User.updateOne({ _id: socket._id }, { $pull: { followers: id } });
    await User.updateOne({ _id: id }, { $pull: { following: socket._id } });
    const user = await User.findById(id);
    socket.emit("server-user-forced-unfollow", {
      _id: id,
      numFollowers: user.followers.length,
    });
    cb();
  };

  const unfollow = async (id, cb) => {
    await User.updateOne({ _id: socket._id }, { $pull: { following: id } });
    await User.updateOne({ _id: id }, { $pull: { followers: socket._id } });
    const user = await User.findById(id);
    socket.emit("server-user-unfollow", {
      _id: id,
      numFollowing: user.following.length,
    });
    cb();
  };

  socket.on("client-get-user-logged-in", getUserLoggedIn);

  socket.on("client-get-receiver", getReceiver);

  socket.on("client-toggle-follow", toggleFollow);

  socket.on("client-send-message", sendMessage);

  socket.on("client-user-forced-unfollow", forcedUnfollow);

  socket.on("client-user-unfollow", unfollow);

  socket.on("client-user-typing", (data) => {
    io.to(data.room).emit("server-user-typing");
  });
};

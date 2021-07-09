const Post = require("../../models/post.model");

module.exports = function (socket, io) {
  const sendComment = async (comment) => {
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

    await Post.updateOne({ _id: postId }, { $push: { comments: newComment } });
  };

  const toggleLikePost = async (data) => {
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
  };

  socket.on("client-send-comment", sendComment);

  socket.on("client-send-toggle-like", toggleLikePost);
};

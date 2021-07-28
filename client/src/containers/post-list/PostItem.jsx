import { Post } from "../../components";
import { formatDistance } from "date-fns";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PostItem = ({ post }) => {
  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [liked, setLiked] = useState(post.likes.includes(userInfo._id));
  const [comment, setComment] = useState("");
  const [numLiked, setNumLiked] = useState(post.likes.length);
  const [comments, setComments] = useState(post.comments);

  useEffect(() => {
    socket.on("server-send-comment", (newComment) => {
      setComments((comments) => [...comments, newComment]);
    });

    // set numliked real ==> for all user follow
    socket.on("server-send-toggle-like", (num) => {
      setNumLiked(num);
    });

    return () => {
      socket.off("server-send-comment");
      socket.off("server-send-toggle-like");
    };
    // eslint-disable-next-line
  }, []);

  const handleToggleLike = () => {
    socket.emit("client-send-toggle-like", {
      postId: post._id,
      userId: userInfo._id,
    });
    setLiked(!liked);

    // set num liked virtual to user logged in ==> fast effect
    if (liked) {
      setNumLiked(numLiked - 1);
    } else {
      setNumLiked(numLiked + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      return;
    }
    socket.emit("client-send-comment", {
      userId: userInfo._id,
      avatar: userInfo.avatar,
      username: userInfo.username,
      content: comment,
      postId: post._id,
    });
    setComment("");
  };

  return (
    <Post>
      <Post.Infor to={`/${post.name}`}>
        <Post.AvatarWrap to={`/${post.name}`}>
          <Post.Avatar alt={post.avatar} src={post.avatar} />
        </Post.AvatarWrap>
        <Post.MyName to={`/${post.name}`}>{post.name}</Post.MyName>
      </Post.Infor>

      <Post.Image alt={post.imagePost} src={post.imagePost} />
      <Post.Actions>
        <Post.Icon onClick={handleToggleLike}>
          {liked ? <AiFillHeart fill="red" /> : <AiOutlineHeart />}
        </Post.Icon>
        <Post.Icon>
          <AiOutlineComment />
        </Post.Icon>
        <Post.Icon>
          <IoPaperPlaneOutline />
        </Post.Icon>
      </Post.Actions>
      <Post.NumberLiked>
        {numLiked} {numLiked >= 0 ? "likes" : "like"}
      </Post.NumberLiked>
      {post.caption.trim().length > 0 && (
        <Post.Caption>
          <Post.Infor name={1}>
            <Post.MyName to={`/${userInfo.username}`}>
              {userInfo.username}
            </Post.MyName>
          </Post.Infor>
          <Post.CaptionText>{post.caption}</Post.CaptionText>
        </Post.Caption>
      )}

      {comments.length > 3 && (
        <Post.ViewAllComment>
          View all {comments.length} comments
        </Post.ViewAllComment>
      )}

      {comments.length > 0 &&
        (comments.length > 3
          ? comments.slice(comments.length - 3, comments.length)
          : comments
        ).map((comment) => (
          <Post.PersonWrap key={comment._id}>
            <Post.PersonName to={`/${comment.user}`}>
              {comment.name}
            </Post.PersonName>
            <Post.PersonComment>{comment.content}</Post.PersonComment>
          </Post.PersonWrap>
        ))}
      <Post.CreatedPost>
        {formatDistance(new Date(post.createdAt), new Date(), {
          addSuffix: true,
        })}
      </Post.CreatedPost>
      <Post.Form onSubmit={handleSubmit}>
        <Post.Group>
          <Post.Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Add a comment..."
          />
          <Post.Button type="submit">Post</Post.Button>
        </Post.Group>
      </Post.Form>
    </Post>
  );
};

export default PostItem;

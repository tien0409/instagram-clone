import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../actions/postAction";
import { Post } from "../../components";
import PostItem from "./PostItem";
import { POST_LIST_RESET } from "../../constants/postConstants";
import PostLoading from "./PostLoading";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { isLoading, posts, err } = postList;

  useEffect(() => {
    dispatch(getAllPost());

    return () => {
      dispatch({ type: POST_LIST_RESET });
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Post.Wrap>
      {isLoading ? (
        <PostLoading />
      ) : err ? (
        <div>{err}</div>
      ) : posts ? (
        posts.map((post) => <PostItem key={post._id} post={post} />)
      ) : null}
    </Post.Wrap>
  );
};

export default PostListContainer;

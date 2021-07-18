import { Post } from "../../components";

const PostLoading = () => {
  return (
    <Post>
      <Post.Infor>
        <Post.LoadingWrap>
          <Post.Loading width={30} height={30} count={1} circle={true} />
        </Post.LoadingWrap>
        <Post.Loading width={200} height={22} count={1} />
      </Post.Infor>
      <Post.Loading width={600} height={600} count={1} />
    </Post>
  );
};

export default PostLoading;

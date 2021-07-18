import { Profile } from "../../components";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfilePostItem = ({ post }) => {
  return (
    <Profile.PostItem to={`/post/${post._id}`}>
      <Profile.PostImgWrap>
        <Profile.PostImg src={post.imagePost} />
      </Profile.PostImgWrap>
      <Profile.PostModal>
        <Profile.PostWrap>
          <Profile.PostReactWrap>
            <Profile.PostReactIcon>
              <AiFillHeart />
            </Profile.PostReactIcon>
            <Profile.PostReactNumber>
              {post.likes.length}
            </Profile.PostReactNumber>
          </Profile.PostReactWrap>
          <Profile.PostReactWrap>
            <Profile.PostReactIcon>
              <FaComment />
            </Profile.PostReactIcon>
            <Profile.PostReactNumber>
              {post.comments.length}
            </Profile.PostReactNumber>
          </Profile.PostReactWrap>
        </Profile.PostWrap>
      </Profile.PostModal>
    </Profile.PostItem>
  );
};

export default ProfilePostItem;

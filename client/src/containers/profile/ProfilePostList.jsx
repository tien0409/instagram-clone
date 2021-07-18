import { Profile } from "../../components";
import ProfilePostItem from "./ProfilePostItem";

const ProfilePostList = ({ posts }) => {
  return (
    <Profile.PostList>
      {posts.length === 0 ? (
        <Profile.NoPost>No Post Yet</Profile.NoPost>
      ) : (
        posts.map((post) => <ProfilePostItem key={post._id} post={post} />)
      )}
    </Profile.PostList>
  );
};

export default ProfilePostList;

import { CreatePost } from "../../components";

const CreatePostView = ({ userInfo, caption, setModal, setCaption }) => {
  return (
    <CreatePost.Create>
      <CreatePost.Avatar alt={userInfo.avatar} src={userInfo.avatar} />
      <CreatePost.Input
        onFocus={() => {
          setModal(true);
        }}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder={`What's on your mind, ${userInfo.username}`}
        value={caption}
      />
    </CreatePost.Create>
  );
};

export default CreatePostView;

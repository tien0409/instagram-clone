import { CreatePost, Spinner } from "../../components";
import { TiCloudStorage } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllPost, createPost } from "../../actions/postAction";
import { POST_CREATE_RESET } from "../../constants/postConstants";

const CreatePostBody = ({ modal, userInfo, setModal, caption, setCaption }) => {
  const dispatch = useDispatch();
  const postCreate = useSelector((state) => state.postCreate);
  const { postCreated, isLoading, err: errPostCreate } = postCreate;

  const inputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (postCreated) {
      setModal(false);
      setCaption("");
      setImage("");
      setImageSrc("");
      setErr("");
      dispatch(getAllPost());
    }
    if (!modal) {
      if (!caption.trim().length) {
        setCaption("");
      }
      setErr("");
      setImage("");
      setImageSrc("");
    }

    return () => {
      dispatch({ type: POST_CREATE_RESET });
    };
  }, [postCreated, caption, dispatch, modal, setModal, setCaption]);

  // get name img, src image and object file
  const handleChooseFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = function () {
        const result = reader.result;
        setImageSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleCreatePost = async () => {
    if (imageSrc === "" || image === "") {
      setErr("Image is required");
      return;
    }
    setErr("");

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-chat");
    data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);

    dispatch(createPost(caption, data));
  };

  return (
    <CreatePost.Body>
      <CreatePost.CaptionWrap>
        <CreatePost.InfoWrap>
          <CreatePost.Avatar alt={userInfo.avatar} src={userInfo.avatar} />
          <CreatePost.Username>{userInfo.username}</CreatePost.Username>
        </CreatePost.InfoWrap>
        <CreatePost.TextArea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder={`What's on your mind, ${userInfo.username}`}
        ></CreatePost.TextArea>

        {err ? (
          <CreatePost.Error>{err}</CreatePost.Error>
        ) : errPostCreate ? (
          <CreatePost.Error>{errPostCreate}</CreatePost.Error>
        ) : null}

        <CreatePost.Button
          type="button"
          disabled={isLoading}
          onClick={handleCreatePost}
        >
          {isLoading ? <Spinner size="sm" color="white" /> : "Post"}
        </CreatePost.Button>
      </CreatePost.CaptionWrap>

      <CreatePost.UploadFileWrap>
        <CreatePost.FileWrap>
          <CreatePost.ImageWrap active={imageSrc}>
            {imageSrc && <CreatePost.Image alt={imageSrc} src={imageSrc} />}
          </CreatePost.ImageWrap>
          <CreatePost.FileInfoWrap>
            <CreatePost.Icon>
              <TiCloudStorage />
            </CreatePost.Icon>
          </CreatePost.FileInfoWrap>
        </CreatePost.FileWrap>
        <CreatePost.Input
          onChange={handleChooseFile}
          ref={inputRef}
          hidden
          type="file"
        />
        <CreatePost.CustomButton
          disabled={isLoading}
          onClick={handleClick}
          type="button"
        >
          Choose a file
        </CreatePost.CustomButton>
      </CreatePost.UploadFileWrap>
    </CreatePost.Body>
  );
};

export default CreatePostBody;

import { CreatePost } from "../../components";

const CreatePostContent = () => {
  return (
    <CreatePost>
      <CreatePost.Head>
        <CreatePost.HeadTitle>Create Post</CreatePost.HeadTitle>
        <CreatePost.CloseButton onClick={handleCloseModal}>
          <ImCancelCircle />
        </CreatePost.CloseButton>
      </CreatePost.Head>
      <CreatePost.Body>
        <CreatePost.CaptionWrap>
          {" "}
          <CreatePost.InfoWrap>
            <CreatePost.Avatar src={userInfo.avatar} />
            <CreatePost.Username>{userInfo.username}</CreatePost.Username>
          </CreatePost.InfoWrap>
          <CreatePost.TextArea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Post"
          ></CreatePost.TextArea>
          {err ? (
            <CreatePost.Error>{err}</CreatePost.Error>
          ) : errPostCreate ? (
            <CreatePost.Error>{errPostCreate}</CreatePost.Error>
          ) : null}
          <CreatePost.Button type="button" onClick={handleCreatePost}>
            {isLoading ? <Spinner size="sm" color="white" /> : "Post"}
          </CreatePost.Button>
        </CreatePost.CaptionWrap>

        <CreatePost.UploadFileWrap>
          <CreatePost.FileWrap>
            <CreatePost.ImageWrap active={imageSrc}>
              {imageSrc && <CreatePost.Image src={imageSrc} />}
            </CreatePost.ImageWrap>
            <CreatePost.FileInfoWrap>
              <CreatePost.Icon>
                <TiCloudStorage />
              </CreatePost.Icon>
            </CreatePost.FileInfoWrap>
          </CreatePost.FileWrap>
          <CreatePost.Input
            onChange={handleChooseFile}
            ref={inputEle}
            hidden
            type="file"
          />
          <CreatePost.CustomButton onClick={handleClick} type="button">
            Choose a file
          </CreatePost.CustomButton>
        </CreatePost.UploadFileWrap>
      </CreatePost.Body>
    </CreatePost>
  );
};

export default CreatePostContent;

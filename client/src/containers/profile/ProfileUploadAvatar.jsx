import { useEffect, useRef, useState } from "react";
import {
  updateAvatar,
  deleteAvatar,
  loadUser,
  getUserDetails,
} from "../../actions/userAction";
import { UploadAvatar, Modal, Spinner, Profile } from "../../components";
import Avatar from "react-avatar-editor";
import { useSelector, useDispatch } from "react-redux";
import {
  USER_DELETE_AVATAR_RESET,
  USER_UPDATE_AVATAR_RESET,
} from "../../constants/userConstants";

const ProfileUploadAvatar = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const userUpdateAvatar = useSelector((state) => state.userUpdateAvatar);
  const { success: successUpdate, isLoading: isLoadingUpdate } =
    userUpdateAvatar;
  const userDeleteAvatar = useSelector((state) => state.userDeleteAvatar);
  const { success: successDelete, isLoading: isLoadingDelete } =
    userDeleteAvatar;
  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const [modalEditor, setModalEditor] = useState(false);

  useEffect(() => {
    if (successUpdate || successDelete) {
      socket.emit("client-get-user-logged-in", userInfo._id);
      dispatch(loadUser());
      dispatch(getUserDetails(userInfo.username));
      setModal(false);
      setModalEditor(false);
    }

    return () => {
      dispatch({ type: USER_UPDATE_AVATAR_RESET });
      dispatch({ type: USER_DELETE_AVATAR_RESET });
    };
  }, [successUpdate, successDelete, setModal, userInfo, socket, dispatch]);

  const handleRemoveAvatar = () => {
    if (window.confirm("You are sure delete avatar ?")) {
      dispatch(deleteAvatar());
    }
  };

  const handleUploadAvatar = () => {
    inputRef.current?.click();
  };

  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setModalEditor(true);
    }
  };

  const handleUpdateAvatar = () => {
    if (image && imageRef.current) {
      const canvas = imageRef.current.getImageScaledToCanvas();
      const urlBase64 = canvas.toDataURL();

      const data = new FormData();
      data.append("file", urlBase64);
      data.append("upload_preset", "instagram-chat");
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);

      dispatch(updateAvatar(data));
    }
  };

  return (
    <>
      <Modal
        modal={modal}
        onClick={() => {
          setModal(false);
          setModalEditor(false);
        }}
      />
      <Modal.Body modal={modal}>
        <Profile.UploadAvatar type="changeAvatar" modal={modalEditor}>
          <Profile.UploadHead>Change Profile Photo</Profile.UploadHead>
          <Profile.UploadList>
            <Profile.UploadItem
              border
              onClick={handleUploadAvatar}
              color="blue"
            >
              Upload Photo
            </Profile.UploadItem>
            <Profile.UploadItem
              border
              onClick={handleRemoveAvatar}
              color="gray"
            >
              {isLoadingDelete ? (
                <Spinner size="sm" color="black" />
              ) : (
                "Remove Current Photo"
              )}
            </Profile.UploadItem>
            <Profile.UploadItem border onClick={() => setModal(false)}>
              Cancel
            </Profile.UploadItem>
            <Profile.UploadInput
              onChange={handleChooseImage}
              type="file"
              ref={inputRef}
            />
          </Profile.UploadList>
        </Profile.UploadAvatar>
        <UploadAvatar.Wrap modal={modalEditor}>
          <UploadAvatar.Title>Upload Profile Picture</UploadAvatar.Title>
          <UploadAvatar.AvatarWrap>
            <Avatar
              ref={imageRef}
              image={image && image}
              width={300}
              height={300}
              scale={1}
              border={0}
              borderRadius={150}
            />
          </UploadAvatar.AvatarWrap>
          <UploadAvatar.ButtonGroup>
            <UploadAvatar.Button
              disabled={isLoadingUpdate}
              onClick={() => setModalEditor(false)}
              variant="cancel"
            >
              Cancel
            </UploadAvatar.Button>
            <UploadAvatar.Button
              disabled={isLoadingUpdate}
              onClick={handleUpdateAvatar}
              variant="save"
            >
              {isLoadingUpdate ? <Spinner size="sm" color="white" /> : "save"}
            </UploadAvatar.Button>
          </UploadAvatar.ButtonGroup>
        </UploadAvatar.Wrap>
      </Modal.Body>
    </>
  );
};

export default ProfileUploadAvatar;

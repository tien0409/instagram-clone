import { Setting, Spinner } from "../../components";
import { useState, useEffect } from "react";
import SettingGender from "./SettingGender";
import { useSelector, useDispatch } from "react-redux";
import ProfileUploadAvatar from "../profile/ProfileUploadAvatar";
import { updateInfo, loadUser } from "../../actions/userAction";
import { USER_UPDATE_RESET } from "../../constants/userConstants";

const SettingEdit = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { success, isLoading, err } = userUpdate;

  const [modal, setModal] = useState(false);
  const [modalAvatar, setModalAvatar] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const isInvalid =
    fullName.trim() === "" ||
    username.trim() === "" ||
    email.trim() === "" ||
    phoneNumber.trim().length !== 10;

  useEffect(() => {
    if (success) {
      dispatch(loadUser());
      setMessage("Update success");
    }
  }, [success, dispatch]);

  useEffect(() => {
    setFullName(userInfo.fullName);
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setGender(userInfo.gender);
    setPhoneNumber(userInfo.phoneNumber);
  }, [userInfo]);

  useEffect(() => {
    dispatch({ type: USER_UPDATE_RESET });
  }, [dispatch]);

  const handleUpdate = () => {
    dispatch(updateInfo(fullName, username, email, phoneNumber, gender));
  };

  return (
    <Setting.Edit>
      <Setting.EditGroup avatar>
        <Setting.EditAvatarWrap>
          <Setting.EditAvatar alt={userInfo.avatar} src={userInfo.avatar} />
        </Setting.EditAvatarWrap>
        <Setting.EditWrap>
          <Setting.EditText>{userInfo.username}</Setting.EditText>
          <Setting.EditDesc onClick={() => setModalAvatar(true)}>
            Change Profile Photo
          </Setting.EditDesc>
          <ProfileUploadAvatar modal={modalAvatar} setModal={setModalAvatar} />
        </Setting.EditWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Name</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Setting.EditDesc>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </Setting.EditDesc>
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Username</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Setting.EditDesc>
            In most cases, you'll be able to change your username back to
            {" " + userInfo.username} for another 14 days. Learn More
          </Setting.EditDesc>
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Email</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Phone Number</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setPhoneNumber(e.target.value);
              }
            }}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Gender</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            defaultValue={gender}
            onClick={() => setModal(true)}
            type="text"
          />
          <SettingGender
            gender={gender}
            setGender={setGender}
            modal={modal}
            setModal={setModal}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      {success && <Setting.EditNotify>{message}</Setting.EditNotify>}
      {err && <Setting.EditNotify err>{err}</Setting.EditNotify>}
      <Setting.EditGroup button>
        <Setting.EditButton onClick={handleUpdate} disabled={isInvalid}>
          {isLoading ? <Spinner size="sm" color="white" /> : "Submit"}
        </Setting.EditButton>
      </Setting.EditGroup>
    </Setting.Edit>
  );
};

export default SettingEdit;

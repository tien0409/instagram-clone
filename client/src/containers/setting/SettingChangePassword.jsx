import { Setting, Spinner } from "../../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../actions/userAction";

const SettingChangePassword = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
  const { success, message, err, isLoading } = userUpdatePassword;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isInvalid =
    oldPassword.trim() === "" ||
    newPassword.trim() === "" ||
    confirmPassword.trim() === "" ||
    newPassword !== confirmPassword;

  const handleUpdatePassword = () => {
    dispatch(updatePassword(newPassword, confirmPassword));
  };

  return (
    <Setting.Edit changePassword>
      <Setting.EditGroup avatar>
        <Setting.EditAvatarWrap>
          <Setting.EditAvatar src={userInfo.avatar} />
        </Setting.EditAvatarWrap>
        <Setting.EditWrap>
          <Setting.EditText>{userInfo.username}</Setting.EditText>
        </Setting.EditWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Old Password</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>New Password</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      <Setting.EditGroup>
        <Setting.EditText>Confirm New Password</Setting.EditText>
        <Setting.EditInputWrap>
          <Setting.EditInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Setting.EditInputWrap>
      </Setting.EditGroup>
      {success && <Setting.EditNotify>{message}</Setting.EditNotify>}
      {err && <Setting.EditNotify err>{err}</Setting.EditNotify>}
      <Setting.EditButton disabled={isInvalid} onClick={handleUpdatePassword}>
        {isLoading ? <Spinner size="sm" color="white" /> : "Change Password"}
      </Setting.EditButton>
    </Setting.Edit>
  );
};

export default SettingChangePassword;

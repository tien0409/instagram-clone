import { useSelector } from "react-redux";
import {
  HeaderContainer,
  HelmetContainer,
  ProfileContainer,
} from "../containers";

const ProfilePage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <HelmetContainer title={`${userInfo.fullName} (@${userInfo.username})`} />
      <HeaderContainer profile="true" />
      <ProfileContainer />
    </>
  );
};

export default ProfilePage;

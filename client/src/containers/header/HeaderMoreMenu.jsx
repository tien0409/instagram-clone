import { Header } from "../../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineSave, AiOutlineSetting } from "react-icons/ai";
import { logout } from "../../actions/userAction";

const HeaderMoreMenu = () => {
  const dispatch = useDispatch();

  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [avatarClicked, setAvatarClicked] = useState(false);

  const handleLogout = () => {
    if (localStorage.getItem("userInfo")) {
      dispatch(logout());
      socket.disconnect();
    }
  };

  return (
    <Header.NavItem
      avatar
      clicked={avatarClicked}
      onClick={() => setAvatarClicked(!avatarClicked)}
    >
      <Header.NavAvatarWrap>
        <Header.NavAvatarImg alt={userInfo.username} src={userInfo.avatar} />

        {/* More menu when click avatar user logged in */}
        <Header.NavMoreMenu>
          <Header.NavMenuList>
            <Header.NavMenuLink to={`/${userInfo.username}`}>
              <Header.NavMenuItem>
                <Header.NavMenuIcon>
                  <HiOutlineUserCircle />
                </Header.NavMenuIcon>
                <Header.NavMenuText>Profile</Header.NavMenuText>
              </Header.NavMenuItem>
            </Header.NavMenuLink>
            <Header.NavMenuLink to="/saved">
              <Header.NavMenuItem>
                <Header.NavMenuIcon>
                  <AiOutlineSave />
                </Header.NavMenuIcon>
                <Header.NavMenuText>Saved</Header.NavMenuText>
              </Header.NavMenuItem>
            </Header.NavMenuLink>
            <Header.NavMenuLink to="/setting/edit">
              <Header.NavMenuItem separate>
                <Header.NavMenuIcon>
                  <AiOutlineSetting />
                </Header.NavMenuIcon>
                <Header.NavMenuText>Settings</Header.NavMenuText>
              </Header.NavMenuItem>
            </Header.NavMenuLink>
            <Header.NavMenuItem onClick={handleLogout}>
              <Header.NavMenuText>Log out</Header.NavMenuText>
            </Header.NavMenuItem>
          </Header.NavMenuList>
        </Header.NavMoreMenu>
      </Header.NavAvatarWrap>
    </Header.NavItem>
  );
};

export default HeaderMoreMenu;

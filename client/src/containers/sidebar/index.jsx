import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Inbox } from "../../components";
import SidebarList from "./SidebarList";

const SidebarContainer = ({ conversations }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { conversationId } = useParams();

  return (
    <Inbox.Sidebar>
      <Inbox.SidebarHead>{userInfo.username}</Inbox.SidebarHead>
      <SidebarList
        conversations={conversations}
        conversationId={conversationId}
        userInfo={userInfo}
      />
    </Inbox.Sidebar>
  );
};

export default SidebarContainer;

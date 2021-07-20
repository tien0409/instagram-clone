import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Inbox } from "../../components";

const SidebarItem = ({ conversation, conversationId, user }) => {
  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    socket.emit("client-get-last-message", conversation._id);
    socket.on("server-send-last-message", (lastMessage) => {
      if (lastMessage && lastMessage?.conversation === conversation._id) {
        setLastMessage(lastMessage);
      }
      socket.emit("client-get-number-unread-message");
    });

    return () => {
      socket.off("server-send-last-message");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Inbox.SidebarItem
      key={user._id}
      active={conversation._id === conversationId ? 1 : 0}
      unread={
        lastMessage?.unread && lastMessage?.sender !== userInfo._id ? 1 : 0
      } // tam de the nay
      to={`/inbox/${conversation._id}`}
    >
      <Inbox.SidebarAvatar src={`${user.avatar}`} />
      <Inbox.SidebarInfor>
        <Inbox.SidebarName>{user.username}</Inbox.SidebarName>
        <Inbox.SidebarMsgWrap>
          <Inbox.SidebarMsg>
            {lastMessage ? lastMessage.content : ""}
          </Inbox.SidebarMsg>
          <Inbox.SidebarTime>4d</Inbox.SidebarTime>
        </Inbox.SidebarMsgWrap>
      </Inbox.SidebarInfor>
    </Inbox.SidebarItem>
  );
};

export default SidebarItem;

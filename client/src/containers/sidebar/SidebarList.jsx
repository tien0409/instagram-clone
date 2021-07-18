import { Inbox } from "../../components";
import SidebarItem from "./SidebarItem";

const SidebarList = ({ conversations, conversationId, userInfo }) => {
  return (
    <Inbox.SidebarList>
      {conversations.map((conversation) => {
        const user = conversation.members.filter(
          (member) => member._id !== userInfo._id,
        )[0];

        return (
          <SidebarItem
            key={conversation._id}
            conversation={conversation}
            conversationId={conversationId}
            user={user}
          />
        );
      })}
    </Inbox.SidebarList>
  );
};

export default SidebarList;

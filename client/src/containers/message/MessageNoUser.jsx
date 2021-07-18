import { Inbox } from "../../components";

const MessageNoUser = () => {
  return (
    <Inbox.NoMsgWrap>
      <Inbox.NoMsg>Your Messages</Inbox.NoMsg>
      <Inbox.NoSubMsg>
        Send private photos and messages to a friend or group.
      </Inbox.NoSubMsg>
    </Inbox.NoMsgWrap>
  );
};

export default MessageNoUser;

import { Inbox } from "../../components";
import { useHistory } from "react-router-dom";

const MessageReceiver = ({ receiver, active }) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(`/${receiver.username}`);
  };

  return (
    <>
      <Inbox.MsgHead>
        <Inbox.MsgHeadAvatar
          onClick={handleRedirect}
          alt={receiver.avatar}
          src={`${receiver.avatar}`}
        />
        <Inbox.MsgHeadInfor>
          <Inbox.MsgHeadName onClick={handleRedirect}>
            {receiver.username}
          </Inbox.MsgHeadName>
          <Inbox.MsgHeadTime>{active && "Active"}</Inbox.MsgHeadTime>
        </Inbox.MsgHeadInfor>
      </Inbox.MsgHead>
    </>
  );
};

export default MessageReceiver;

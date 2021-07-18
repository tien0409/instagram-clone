import { useState } from "react";
import { useSelector } from "react-redux";
import { Inbox } from "../../components";

const MessageForm = ({ receiver, conversation }) => {
  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [content, setContent] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      return;
    }

    socket.emit("client-send-message", {
      room: `${receiver.username}-${userInfo.username}`,
      conversation: conversation,
      sender: userInfo._id,
      avatar: userInfo.avatar,
      content: content.trim(),
    });
    setContent("");
  };

  return (
    <Inbox.Form onSubmit={handleSendMessage}>
      <Inbox.Group>
        <Inbox.Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Message..."
        />
        <Inbox.Send type="submit">Send</Inbox.Send>
      </Inbox.Group>
    </Inbox.Form>
  );
};

export default MessageForm;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Inbox } from "../../components";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import MessageNoUser from "./MessageNoUser";
import MessageReceiver from "./MessageReceiver";

const MessageContainer = () => {
  const dispatch = useDispatch();

  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { conversationId } = useParams();

  const [receiver, setReceiver] = useState(null);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if ((!receiver || conversationId !== conversation?._id) && conversationId) {
      socket.emit("client-get-receiver", conversationId);
      socket.emit("client-get-conversation", conversationId);
      setMessages(null);
      setActive(false);
    } else if (
      receiver &&
      !messages &&
      conversation._id === conversationId &&
      conversation?.members.find((user) => user._id === receiver._id)
    ) {
      socket.emit("client-get-all-message", {
        usernameReq: receiver.username,
        user: userInfo,
      });
    }
  }, [
    receiver,
    userInfo,
    socket,
    messages,
    dispatch,
    active,
    conversationId,
    conversation,
  ]);

  useEffect(() => {
    socket.on("server-send-conversation", (conversation) => {
      setConversation(conversation);
    });

    socket.on("server-send-all-message", (messages) => {
      setMessages(messages);
      socket.emit("client-get-number-unread-message");
    });

    socket.on("server-send-receiver", (user) => {
      setReceiver(user);
    });

    socket.on("server-send-user-online", (name) => {
      if (name === receiver?.username) {
        setActive(true);
      }
    });

    socket.on("server-send-user-offline", (name) => {
      if (name === receiver?.username) {
        setActive(false);
      }
    });

    return () => {
      socket.off("server-send-conversation");
      socket.off("server-send-all-message");
      socket.off("server-send-receiver");
      socket.off("server-send-user-online");
      socket.off("server-send-user-offline");
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("server-send-message", (data) => {
      if (conversationId === data.conversation._id) {
        setMessages((messages) => [...messages, data]);
      }
      if (
        data.sender !== userInfo._id &&
        conversationId === data.conversation._id
      ) {
        // update unread message when user in conversation
        socket.emit(
          "client-in-conversation",
          {
            conversationId: data.conversation._id,
            room: `${data.receiver.username}-${userInfo.username}`,
          },
          () => {
            socket.emit("client-get-number-unread-message");
          },
        );
      } else {
        socket.emit("client-get-number-unread-message");
      }
    });

    return () => {
      socket.off("server-send-message");
    };

    // eslint-disable-next-line
  }, [messages]);

  return (
    <Inbox.Msg>
      {receiver ? (
        <>
          <MessageReceiver receiver={receiver} active={active} />
          <MessageList userInfo={userInfo} messages={messages} />
          <MessageForm receiver={receiver} conversation={conversation} />
        </>
      ) : (
        // No select user
        <MessageNoUser />
      )}
    </Inbox.Msg>
  );
};

export default MessageContainer;

import { useEffect, useRef } from "react";
import { Inbox } from "../../components";

const MessageList = ({ userInfo, messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Inbox.MsgWrap>
      <Inbox.MsgList>
        {!messages
          ? new Array(15).fill(0).map((_, index) => (
              <Inbox.MsgItem key={index} self={index % 2 === 0 ? 1 : 0}>
                <Inbox.MsgLoading
                  avatar={index % 2 === 0 ? 1 : 0}
                  height={34}
                  width={34}
                  count={1}
                  circle={true}
                />
                <Inbox.MsgLoading
                  content
                  height={34}
                  width={
                    window.innerWidth < 530
                      ? 0
                      : window.innerWidth < 650
                      ? 100
                      : window.innerWidth < 800
                      ? 200
                      : 300
                  }
                  count={1}
                />
              </Inbox.MsgItem>
            ))
          : messages.map((message) => (
              <Inbox.MsgItem
                key={message._id}
                self={message.sender === userInfo._id}
              >
                <Inbox.MsgAvatar
                  alt={message.avatar}
                  src={`${message.avatar}`}
                />
                <Inbox.MsgContent>{message.content}</Inbox.MsgContent>
              </Inbox.MsgItem>
            ))}
        <Inbox.MsgItem ref={messageEndRef}></Inbox.MsgItem>
      </Inbox.MsgList>
    </Inbox.MsgWrap>
  );
};

export default MessageList;

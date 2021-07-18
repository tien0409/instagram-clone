import { Container, Error } from "./styles/inbox";
import {
  Sidebar,
  SidebarMsg,
  SidebarMsgWrap,
  SidebarHead,
  SidebarList,
  SidebarName,
  SidebarInfor,
  SidebarTime,
  SidebarItem,
  SidebarAvatar,
} from "./styles/sidebar";
import {
  Msg,
  NoMsg,
  NoSubMsg,
  NoMsgWrap,
  MsgHead,
  MsgHeadAvatar,
  MsgHeadInfor,
  MsgHeadName,
  MsgHeadTime,
  MsgWrap,
  MsgList,
  MsgItem,
  MsgLoading,
  MsgAvatar,
  MsgContent,
  Form,
  Group,
  Input,
  Send,
} from "./styles/message";
import { forwardRef } from "react";

const Inbox = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Inbox.Error = function InboxError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

// Sidebar
Inbox.Sidebar = function InboxSidebar({ children, ...restProps }) {
  return <Sidebar {...restProps}>{children}</Sidebar>;
};

Inbox.SidebarMsg = function InboxSidebarMsg({ children, ...restProps }) {
  return <SidebarMsg {...restProps}>{children}</SidebarMsg>;
};

Inbox.SidebarMsgWrap = function InboxSidebarMsgWrap({
  children,
  ...restProps
}) {
  return <SidebarMsgWrap {...restProps}>{children}</SidebarMsgWrap>;
};

Inbox.SidebarHead = function InboxSidebarHead({ children, ...restProps }) {
  return <SidebarHead {...restProps}>{children}</SidebarHead>;
};

Inbox.SidebarList = function InboxSidebarList({ children, ...restProps }) {
  return <SidebarList {...restProps}>{children}</SidebarList>;
};

Inbox.SidebarItem = function InboxSidebarItem({ children, ...restProps }) {
  return <SidebarItem {...restProps}>{children}</SidebarItem>;
};

Inbox.SidebarInfor = function InboxSidebarInfor({ children, ...restProps }) {
  return <SidebarInfor {...restProps}>{children}</SidebarInfor>;
};

Inbox.SidebarName = function InboxSidebarName({ children, ...restProps }) {
  return <SidebarName {...restProps}>{children}</SidebarName>;
};

Inbox.SidebarTime = function InboxSidebarTime({ children, ...restProps }) {
  return <SidebarTime {...restProps}>{children}</SidebarTime>;
};

Inbox.SidebarAvatar = function InboxSidebarAvatar({ src, ...restProps }) {
  return <SidebarAvatar src={src} {...restProps} />;
};

// Message
Inbox.Msg = function InboxMsg({ children, ...restProps }) {
  return <Msg {...restProps}>{children}</Msg>;
};

Inbox.NoMsgWrap = function InboxNoMsgWrap({ children, ...restProps }) {
  return <NoMsgWrap {...restProps}>{children}</NoMsgWrap>;
};

Inbox.NoMsg = function InboxNoMsg({ children, ...restProps }) {
  return <NoMsg {...restProps}>{children}</NoMsg>;
};

Inbox.NoSubMsg = function InboxNoSubMsg({ children, ...restProps }) {
  return <NoSubMsg {...restProps}>{children}</NoSubMsg>;
};

Inbox.MsgHead = function InboxMsgHead({ children, ...restProps }) {
  return <MsgHead {...restProps}>{children}</MsgHead>;
};

Inbox.MsgHeadAvatar = function InboxMsgHeadAvatar({ src, ...restProps }) {
  return <MsgHeadAvatar src={src} {...restProps} />;
};

Inbox.MsgHeadInfor = function InboxMsgHeadInfor({ children, ...restProps }) {
  return <MsgHeadInfor {...restProps}>{children}</MsgHeadInfor>;
};

Inbox.MsgHeadName = function InboxMsgHeadName({ children, ...restProps }) {
  return <MsgHeadName {...restProps}>{children}</MsgHeadName>;
};

Inbox.MsgHeadTime = function InboxMsgHeadTime({ children, ...restProps }) {
  return <MsgHeadTime {...restProps}>{children}</MsgHeadTime>;
};

Inbox.MsgWrap = function InboxMsgWrap({ children, ...restProps }) {
  return <MsgWrap {...restProps}>{children}</MsgWrap>;
};

Inbox.MsgList = function InboxMsgList({ children, ...restProps }) {
  return <MsgList {...restProps}>{children}</MsgList>;
};

Inbox.MsgItem = forwardRef(function InboxMsgItem(
  { children, ...restProps },
  ref,
) {
  return (
    <MsgItem ref={ref} {...restProps}>
      {children}
    </MsgItem>
  );
});

Inbox.MsgLoading = function InboxMsgLoading({ ...restProps }) {
  return <MsgLoading {...restProps} />;
};

Inbox.MsgAvatar = function InboxMsgAvatar({ src, ...restProps }) {
  return <MsgAvatar src={src} {...restProps} />;
};

Inbox.MsgContent = function InboxMsgContent({ children, ...restProps }) {
  return <MsgContent {...restProps}>{children}</MsgContent>;
};

Inbox.Form = function InboxForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Inbox.Group = function InboxGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Inbox.Input = function InboxInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Inbox.Send = function InboxSend({ children, ...restProps }) {
  return <Send {...restProps}>{children}</Send>;
};

export default Inbox;

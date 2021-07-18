import {
  Container,
  Head,
  Close,
  Link,
  Remove,
  List,
  Wrap,
  User,
  Info,
  Avatar,
  Name,
  FullName,
} from "./styles/list-user";

const ListUser = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

ListUser.Link = function ListUserLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

ListUser.Head = function ListUserHead({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

ListUser.Close = function ListUserClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

ListUser.Remove = function ListUserRemove({ children, ...restProps }) {
  return <Remove {...restProps}>{children}</Remove>;
};

ListUser.List = function ListUserUser({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

ListUser.Wrap = function WrapUserUser({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

ListUser.User = function ListUserUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

ListUser.Info = function ListInfoInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

ListUser.Name = function ListNameName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

ListUser.FullName = function ListFullName({ children, ...restProps }) {
  return <FullName {...restProps}>{children}</FullName>;
};

ListUser.Avatar = function ListAvatarAvatar({ src, ...restProps }) {
  return <Avatar src={src} {...restProps} />;
};

export default ListUser;

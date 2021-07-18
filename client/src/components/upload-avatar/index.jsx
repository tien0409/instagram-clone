import { forwardRef } from "react";
import {
  Container,
  Head,
  Item,
  Input,
  List,
  Button,
  ButtonGroup,
  AvatarWrap,
  Wrap,
  Title,
} from "./styles/upload-avatar";

const UploadAvatar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

UploadAvatar.Head = function UploadAvatarHead({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

UploadAvatar.List = function UploadAvatarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

UploadAvatar.Item = function UploadAvatarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

UploadAvatar.Input = forwardRef(function UploadAvatarInput(
  { ...restProps },
  ref,
) {
  return <Input ref={ref} {...restProps} />;
});

UploadAvatar.Title = function UploadAvatarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

UploadAvatar.Button = function UploadAvatarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

UploadAvatar.ButtonGroup = function UploadAvatarButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

UploadAvatar.Wrap = function UploadAvatarWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

UploadAvatar.AvatarWrap = function UploadAvatarAvatarWrap({
  children,
  ...restProps
}) {
  return <AvatarWrap {...restProps}>{children}</AvatarWrap>;
};

export default UploadAvatar;

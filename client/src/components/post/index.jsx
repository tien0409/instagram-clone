import {
  Container,
  Infor,
  AvatarWrap,
  Avatar,
  MyName,
  Image,
  Actions,
  Icon,
  NumberLiked,
  Caption,
  CaptionText,
  ViewAllComment,
  PersonName,
  PersonComment,
  PersonWrap,
  CreatedPost,
  Form,
  Group,
  Input,
  Button,
  Wrap,
  Loading,
  LoadingWrap,
} from "./styles/post";

const Post = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Post.LoadingWrap = function PostLoadingWrap({ children, ...restProps }) {
  return <LoadingWrap {...restProps}>{children}</LoadingWrap>;
};

Post.Loading = function PostLoading({ children, ...restProps }) {
  return <Loading {...restProps}>{children}</Loading>;
};

Post.Wrap = function PostWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

Post.Infor = function PostInfor({ children, ...restProps }) {
  return <Infor {...restProps}>{children}</Infor>;
};

Post.AvatarWrap = function PostAvatarWrap({ children, ...restProps }) {
  return <AvatarWrap {...restProps}>{children}</AvatarWrap>;
};

Post.Avatar = function PostAvatar({ src, ...restProps }) {
  return <Avatar src={src} {...restProps} />;
};

Post.MyName = function PostMyName({ children, ...restProps }) {
  return <MyName {...restProps}>{children}</MyName>;
};

Post.Image = function PostImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Post.Actions = function PostActions({ children, ...restProps }) {
  return <Actions {...restProps}>{children}</Actions>;
};

Post.Icon = function PostIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Post.NumberLiked = function PostNumberLiked({ children, ...restProps }) {
  return <NumberLiked {...restProps}>{children}</NumberLiked>;
};

Post.Caption = function PostCaption({ children, ...restProps }) {
  return <Caption {...restProps}>{children}</Caption>;
};

Post.CaptionText = function PostCaptionText({ children, ...restProps }) {
  return <CaptionText {...restProps}>{children}</CaptionText>;
};

Post.ViewAllComment = function PostViewAllComment({ children, ...restProps }) {
  return <ViewAllComment {...restProps}>{children}</ViewAllComment>;
};

Post.PersonWrap = function PostPersonWrap({ children, ...restProps }) {
  return <PersonWrap {...restProps}>{children}</PersonWrap>;
};

Post.PersonName = function PostPersonName({ children, ...restProps }) {
  return <PersonName {...restProps}>{children}</PersonName>;
};

Post.PersonComment = function PostPersonComment({ children, ...restProps }) {
  return <PersonComment {...restProps}>{children}</PersonComment>;
};

Post.CreatedPost = function PostCreatedPost({ children, ...restProps }) {
  return <CreatedPost {...restProps}>{children}</CreatedPost>;
};

Post.Form = function PostForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Post.Group = function PostGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Post.Input = function PostInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Post.Button = function PostButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default Post;
